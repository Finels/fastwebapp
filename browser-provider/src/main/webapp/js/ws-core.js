///#source 1 1 /Layouts/WebSpinach13/Core/js/ws-core-utils.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="libs\jquery-1.9.1.min.js" />
/// <reference path="libs\jquery-1.8.3.intellisense.js" />

// declare prototype methods
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
        if (m == "{{") { return "{{"; }
        if (m == "}}") { return "}}"; }
        return args[n];
    });
};

Number.prototype.formatNum = function () {
    var nStr = this + '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
};

Number.prototype.round = function (precision) {
    if (precision == undefined)
        return Math.round(this);
    return parseFloat(this.toFixed(precision));
};

/* ----------------------- Disable the Install Plugin Message --------------------------------------*/
function ProcessImn()
{ }
function ProcessImnMarkers()
{ }
/* ----------------------- end of the disable Install Plugin Message --------------------------------------*/

jQuery(function () {
    // initialize updatePanel's progress handling
    WebSpinach13.Core.Utils.initUpdateProgress();
    WebSpinach13.Core.Utils.fixTitleOnAsyncPostBack();
});

// declare namespace
var WebSpinach13 = WebSpinach13 || {};
WebSpinach13.Core = WebSpinach13.Core || {};

// declare functions
WebSpinach13.Core.Utils = function ($) {

    return {
        ShowLoading: showLoading,
        HideLoading: hideLoading,
        HandleAjaxError: handleAjaxError,
        initUpdateProgress: initUpdateProgress,
        fixTitleOnAsyncPostBack: fixTitleOnAsyncPostBack,
        RegisterCssLink: registerCssLink,
        loadCss: loadCss,
        IsImage: isImage,
        CurrentWebUrl: currentWebUrl,
        GetHanderUrl: getHandlerUrl,
        BindKeyboardShortcuts: BindKeyboardShortcuts,
        GetParameterByName: getParameterByName,
        UpdateQueryString: updateQueryString,
        IsMobile: isMobile,
        SetEnterKeyBehaviour: setEnterKeyBehaviour,
        GetImageThumbnailUrl: getImageThumbnailUrl,
        EnableValidator: enableValidator
    };

    var m_loadingRef = null;
    var m_defaultDirection = "ltr";

    // Private methods
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
    };

    function guid() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
    }

    // loading notification handling
    function showLoading() {
        jQuery('#notificationArea').css('z-index', '2000'); // fix for when modal is opened
        ExecuteOrDelayUntilScriptLoaded(function () {
            if (m_loadingRef == null) {
                m_loadingRef = SP.UI.Notify.addNotification('<img src="/_layouts/15/images/loading.gif" style="vertical-align:middle"> ' + SP.Res.genericLoading, true);
            }
        }, "sp.js");
    }

    // hides loading progress
    function hideLoading() {
        if (m_loadingRef != null) {
            SP.UI.Notify.removeNotification(m_loadingRef);
            m_loadingRef = null;
        }
    }

    // handles errors, which are returned by XmlHttp object
    function handleAjaxError(response) {

        if (response.length == 0) {
            WebSpinach13.Core.Utils.HideLoading();
            return;
        }

        ExecuteOrDelayUntilScriptLoaded(function () {
            var _dialog = SP.UI.ModalDialog.showModalDialog({
                url: '/_layouts/15/blank.htm',
                title: response.statusText,
                width: 650
            });
            var _iframe = jQuery(_dialog.get_frameElement());
            _iframe.load(function () {
                hideLoading();
                jQuery('body', _iframe.contents()).html(response.responseText.replace(/<script[^>]*?>[\s\S]*?<\/script>/gi, ''));
            });
        }, "sp.js");

    }

    // shows update progress during async postback in updatepanel handling
    function initUpdateProgress() {
        if (typeof (Sys) === 'undefined')
            return;

        var _requestManager = Sys.WebForms.PageRequestManager.getInstance();
        if (_requestManager == null)
            return;
        _requestManager.add_beginRequest(function (sender, args) {
            showLoading();
        });
        _requestManager.add_endRequest(function (sender, args) {
            var _error = args.get_error();
            if (_error != null) {
                hideLoading();
                args.set_errorHandled(true);
                alert(_error.message);
            }
            else {
                hideLoading();
            }
        });
    }

    // Fixes known issue in SP - page title disappears after async postback
    function fixTitleOnAsyncPostBack() {
        if (typeof (Sys) === 'undefined')
            return;

        var _requestManager = Sys.WebForms.PageRequestManager.getInstance();
        if (_requestManager == null)
            return;

        if (!_requestManager.get_isInAsyncPostBack()) {
            // save original title
            m_originalTitle = document.title;
            _requestManager.add_pageLoaded(function () {
                if (_requestManager.get_isInAsyncPostBack()) {
                    // restore original title
                    document.title = m_originalTitle;
                }
            });
        }
    }

    function registerCssLink(url, options) {
        // get the direction of the page
        var _dir = $('html').attr('dir');

        if (_dir == null || _dir == "")
            _dir = m_defaultDirection;

        // flags
        // Versioning flag
        var _versioningTrue = true;

        // Get Options
        if (options) {
            // check if need versioning
            _versioningTrue = !options.isExternalLink;

            _versioningTrue = !options.isExLib;

            _versioningTrue = !options.isRelese;
        }

        // register the css
        document.write('<link rel="stylesheet" type="text/css" href="' + url.replace('{0}', _dir) + (_versioningTrue ? "?v=" + guid() : "") + '" />');
    }

    // dynamically adds css file include
    function loadCss(path, elementId) {
        jQuery(function () {
            if (elementId && elementId !== '' && jQuery('#' + elementId).length > 0) {
                return;
            }

            var _css = jQuery('head').append('<link>');
            _css = _css.children(":last");
            _css.attr({
                rel: 'stylesheet',
                type: 'text/css',
                href: path
            });

            if (elementId && elementId !== '') {
                _css.attr('id', elementId);
            }
        });
    }

    function currentWebUrl() {
        var _startUrl = _spPageContextInfo.webServerRelativeUrl;

        if (_startUrl == "/")
            _startUrl = "";

        return _startUrl;
    }

    function getHandlerUrl(fileName) {
        return currentWebUrl() + "/_layouts/15/WebSpinach13/Core/Handlers/" + fileName;
    }

    // binding for all keyboard shortcuts
    function BindKeyboardShortcuts() {
        // in anonymous 
        // ctrl+l - prompting for credentials - authoring mode - switch user
        jwerty.key('alt+l', SwitchUser);

        // in auth mode
        // 
        jwerty.key('alt+w', ChangeStateToEdit);
        //
        jwerty.key('alt+s', ChangeStateToSettings);
        //
        jwerty.key('alt+v', ChangeStateToViewLists);
        //
        jwerty.key('alt+q', ChangeToMaintenance);
        //
        jwerty.key('alt+c', ChangeToCreate);
        //
        jwerty.key('alt+m', ChangeToSitemanager);
    }

    function ChangeStateToSettings() {
        if (_spPageContextInfo.userId)
            window.location.href = currentWebUrl() + "/_layouts/15/settings.aspx";
    }

    function ChangeStateToViewLists() {
        if (_spPageContextInfo.userId)
            window.location.href = currentWebUrl() + "/_layouts/15/viewlsts.aspx";
    }

    function SwitchUser() {
        var _referUrl = window.location.href;
        window.location.href = currentWebUrl() + '/_layouts/15/authenticate.aspx?&source=' + _referUrl;
    }

    function ChangeStateToEdit() {
        if (_spPageContextInfo.userId)
            ChangeLayoutMode(false)
    }

    function ChangeToCreate() {
        if (_spPageContextInfo.userId)
            window.location.href = currentWebUrl() + "/_layouts/15/create.aspx";
    }

    function ChangeToSitemanager() {
        if (_spPageContextInfo.userId)
            window.location.href = currentWebUrl() + "/_layouts/15/sitemanager.aspx";
    }

    function ChangeToMaintenance() {
        if (_spPageContextInfo.userId)
            window.location.href = window.location.href.split('?')[0] + "?contents=1";
    }

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function updateQueryString(key, value, url) {
        if (!url) url = window.location.href;
        var re = new RegExp("([?|&])" + key + "=.*?(&|#|$)(.*)", "gi");

        if (re.test(url)) {
            if (typeof value !== 'undefined' && value !== null)
                return url.replace(re, '$1' + key + "=" + value + '$2$3');
            else {
                return url.replace(re, '$1$3').replace(/(&|\?)$/, '');
            }
        }
        else {
            if (typeof value !== 'undefined' && value !== null) {
                var separator = url.indexOf('?') !== -1 ? '&' : '?',
                    hash = url.split('#');
                url = hash[0] + separator + key + '=' + value;
                if (hash[1]) url += '#' + hash[1];
                return url;
            }
            else
                return url;
        }
    }

    function isMobile() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));
    }

    function setEnterKeyBehaviour(fieldsSelector, method, element)
    {
        $(fieldsSelector).keypress(function (event) {
            if (event.which == 13) {
                event.preventDefault();
                if (element !== undefined && element != null)
                    $.proxy(method, element)();
                else
                    method();
            }
        });
    }

    function isImage(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    /// <summary>
    /// Gets the image url as thumbnail
    /// </summary>
    /// <param name="imageUrl"></param>
    /// <returns></returns>
    function getImageThumbnailUrl(imageUrl)
    {
        if (imageUrl == null || imageUrl == "" || imageUrl == undefined)
            return "";
                
        var _urlArr = imageUrl.split('.');

        _extension = _urlArr.pop(); // Get extension
        if (_extension == "" || _extension == null)
            return "";

        // Getting file name without extension below
        _file = _urlArr.pop().split('/').pop() + "_" + _extension + ".jpg";

        // Getting directory name below
        var _path = getDirectory(imageUrl).replace("\\", "/") + "/_t/";
        return _path + _file;
    }

    function getDirectory(imageUrl)
    {
        return imageUrl.substr(0,imageUrl.lastIndexOf('/'))
    }

    function enableValidator(validatorId, isEnabled)
    {
        var validatorObject = document.getElementById('validatorId');
        validatorObject.enabled = isEnabled;
        
        ValidatorUpdateDisplay(validatorObject);
    }
    
}(jQuery);
///#source 1 1 /Layouts/WebSpinach13/Core/js/ws-copypaste.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="libs\jquery-1.9.1.min.js" />
/// <reference path="libs\jquery-1.8.3.intellisense.js" />
/// <reference path="ws-core-utils.js" />

// declare namespace
var WebSpinach13 = WebSpinach13 || {};
WebSpinach13.Core = WebSpinach13.Core || {};

// declare functions
WebSpinach13.Core.CopyPaste = function ($) {

    return {
        CopyWebPart: CopyWebPart,
        PasteWebPart: PasteWebPart
    };

    function CopyWebPart() {
        
        // get currently selected webpart id
        var _wpId = SP.Ribbon.WebPartComponent.get_activeWebPartId();

        if (_wpId == "") {
            SP.UI.Notify.addNotification(WebSpinach13.Core.Resources.CopyPaste.FailedToCopy);
            return;
        }
        
        // get actual webpart ids

        var _wp = $('#' + _wpId);

        var _wpId_final = _wp.attr("webpartid");
        
        var _pageId = _spPageContextInfo.pageItemId;
        var _startUrl = _spPageContextInfo.webServerRelativeUrl;
        var _webUrl = _spPageContextInfo.webAbsoluteUrl;

        if (_startUrl == "/")
            _startUrl = "";
        
        WebSpinach13.Core.Utils.ShowLoading();

        $.ajax({
            type: 'GET',
            url: _startUrl + '/_layouts/15/WebSpinach13/Core/Handlers/CopyWebPart.ashx',
            data: 'wpid=' + encodeURIComponent(_wpId_final) + 
                  '&pageid=' + encodeURIComponent(_pageId) + '&weburl=' + encodeURIComponent(_webUrl),
            error: function (response) {
                WebSpinach13.Core.Utils.HandleAjaxError(response);
            },
            success: function (data) {
                // check if no error was returned
                if (data == "0") {
                    // Success!
                    WebSpinach13.Core.Utils.HideLoading();
                    SP.UI.Notify.addNotification(WebSpinach13.Core.Resources.CopyPaste.CopySuccessful);
                }
                else {
                    SP.UI.Notify.addNotification(WebSpinach13.Core.Resources.CopyPaste.FailedToCopy);
                    WebSpinach13.Core.Utils.HandleAjaxError(data);
                }

            } // success
        }); // ajax
    }

    function PasteWebPart() {

        // get currently selected webpart zone id
        var _wpZoneId = SP.Ribbon.WebPartComponent.get_activeWebPartZoneId();

        if (_wpZoneId == "") {
            SP.UI.Notify.addNotification(WebSpinach13.Core.Resources.CopyPaste.NoZoneSelected);
            return;
        }

        var _pageId = _spPageContextInfo.pageItemId;
        var _webUrl = _spPageContextInfo.webAbsoluteUrl;
        var _startUrl = _spPageContextInfo.webServerRelativeUrl;

        if (_startUrl == "/")
            _startUrl = "";

        WebSpinach13.Core.Utils.ShowLoading();

        // paste the webpart
        $.ajax({
            type: 'GET',
            url: _startUrl + '/_layouts/15/WebSpinach13/Core/Handlers/PasteWebPart.ashx',
            data: 'wpzoneid=' + encodeURIComponent(_wpZoneId) + '&pageid=' + encodeURIComponent(_pageId) + '&weburl=' + encodeURIComponent(_webUrl),
            error: function (response) { WebSpinach13.Core.Utils.HandleAjaxError(response); },
            success: function (data) {
                
                WebSpinach13.Core.Utils.HideLoading();

                switch (data) {
                    case "0":
                        // Success
                        SP.UI.Notify.addNotification(WebSpinach13.Core.Resources.CopyPaste.PasteSuccessful);

                        // Refresh page in edit mode
                        window.location.href = window.location.href.split('?')[0] + "?ControlMode=Edit&DisplayMode=Design";
                        break;
                    case "1":
                        // General error
                        SP.UI.Notify.addNotification(WebSpinach13.Core.Resources.CopyPaste.PasteFailed);
                        break;
                    case "2":
                        // Destination Checked Out By Different User
                        SP.UI.Notify.addNotification(WebSpinach13.Core.Resources.CopyPaste.DestinationCheckedOutByOtherUser);
                        break;
                    case "3":
                        // No Web Part Was Copied
                        SP.UI.Notify.addNotification(WebSpinach13.Core.Resources.CopyPaste.NoWebPartWasCopied);
                        break;
                    default:
                        // General error
                        SP.UI.Notify.addNotification(WebSpinach13.Core.Resources.CopyPaste.PasteFailed);
                        WebSpinach13.Core.Utils.HandleAjaxError(data);
                        break;
                }
            } // success
        }); // ajax
    }
}(jQuery);
///#source 1 1 /Layouts/WebSpinach13/Core/js/ws-dynamicZones.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="libs\jquery-1.9.1.min.js" />
/// <reference path="libs\jquery-1.8.3.intellisense.js" />
/// <reference path="ws-core-utils.js" />

// declare namespace
var WebSpinach13 = WebSpinach13 || {};
WebSpinach13.Core = WebSpinach13.Core || {};

// declare functions
WebSpinach13.Core.DynamicZones = function ($) {

    var m_pageChecked = false;
    var m_enableRibbon = false;

    var m_cachedContentToRevertTo; // cache for storing content that modal has when a first time opened
    var m_modalLayoutBuilder; // ref to modal window object
    var m_isFirstLoadOfLayoutBuilder = true; // indicates if layout builder was opened more then once 
    var m_builderObject = null; // reference to the layout builder object
    var m_layoutDirection; // save indication of layout direction 'rtl' or 'ltr'
    var m_layoutStructure = []; // saves structure of current available layout
    var m_layoutName; // saves name of current available layout
    
    return {
        OpenModal: OpenModal,
        EnableRibbon: EnableRibbon,
        getLayoutBuilderModalTemplate: getLayoutBuilderModalTemplate,
        closeLayoutEditor: closeLayoutEditor,
        getBuilerObject: getBuilerObject
    };

    function OpenModal() {
        
        // open the layout editor
        openLayoutEditor();
    }

    function EnableRibbon()
    {
        // check if this is the first time we entered this function, if not just return the result
        if (m_pageChecked)
            return m_enableRibbon;

        // get current page id
        var _pageId = _spPageContextInfo.pageItemId;

        // check if this page is of an editable layout type
        $.ajax({
            type: 'GET',
            url: WebSpinach13.Core.Utils.GetHanderUrl('HasPageDynamicZones.ashx'),
            data: '&pageid=' + encodeURIComponent(_pageId),
            error: function (response) {
                WebSpinach13.Core.Utils.HandleAjaxError(response);
                m_pageChecked = true;
            }, // error
            success: function (data) {

                // mark that this page was already checked
                m_pageChecked = true;

                // check if page layout is editable

                if (data == "1") {
                    // Layout editable
                    WebSpinach13.Core.Utils.HideLoading();
                    m_enableRibbon = true; // ribbon button will be enabled
                }
                else {
                    // Layout not editable
                    WebSpinach13.Core.Utils.HideLoading();
                    m_enableRibbon = false; // ribbon button will be enabled
                }

                // refresh sharepoint ribbon so this method will be called again
                RefreshCommandUI();

            } // success
        }); // ajax

        return m_enableRibbon;
    }

    // opens modal dialog of LayoutBuilder editor
    function openLayoutEditor(currentLayoutName) {
        
        if (m_isFirstLoadOfLayoutBuilder) {
            var _pageId = _spPageContextInfo.pageItemId;
            // get necessary data for builder:
            // layout structure + template + direction + builder content
            WebSpinach13.Core.Utils.ShowLoading();
            $.ajax({
                type: 'GET',
                url: WebSpinach13.Core.Utils.GetHanderUrl('PageGetLayoutData.ashx'),
                data: 'pageId=' + escape(_pageId) + '&layoutName=' + (typeof (currentLayoutName) === 'undefined' ? '' : currentLayoutName),
                error: function (response) { WebSpinach13.Core.Utils.HandleAjaxError(response); },
                success: function (data) {
                    m_layoutStructure = data.layoutStructure;
                    m_layoutDirection = data.direction;
                    m_layoutName = data.layoutName;

                    // create modal template content
                    m_cachedContentToRevertTo = WebSpinach13.Core.DynamicZones.getLayoutBuilderModalTemplate(data.builderTemplate, data.direction);
                    WebSpinach13.Core.Utils.HideLoading();

                    // call to delegate for opening                    
                    continueOpenLayoutEditor(data.builderContent);
                    
                } // success
            }); // ajax            
        }
        else {
            // modal content already created from previous opening, just call to delegate for opening
            continueOpenLayoutEditor();
        }
    }

    // invoked after 'openLayoutEditor' method
    function continueOpenLayoutEditor(builderContent) {
        // append modal content
        var _modalContainer = document.createElement('div');
        $(_modalContainer).append($(m_cachedContentToRevertTo).clone());

        // open modal dialog
        m_modalLayoutBuilder = SP.UI.ModalDialog.showModalDialog({
            title: WebSpinach13.Core.Resources.DynamicZones.EditLayoutTitle,
            width: 800,
            allowMaximize: true,
            html: _modalContainer,
            dialogReturnValueCallback: function (result, target) {

                if (result == SP.UI.DialogResult.OK) {
                    // client side update layout -> pass data to handler for saving
                    WebSpinach13.Core.Utils.ShowLoading();
                    var _pageId = _spPageContextInfo.pageItemId;
                    $.ajax({
                        type: 'POST',
                        url: WebSpinach13.Core.Utils.GetHanderUrl('PageSaveLayout.ashx'),
                        data: 'pageId=' + _pageId + '&data=' + WebSpinach13.Core.DynamicZones.getBuilerObject().getSerializedLayout(),
                        error: function (response) { WebSpinach13.Core.Utils.handleAjaxError(response); },
                        success: function (data) {
                            WebSpinach13.Core.Utils.HideLoading();
                            SP.UI.Notify.addNotification(WebSpinach13.Core.Resources.DynamicZones.LayoutUpdatedMessage);

                            // refresh page
                            window.location.reload();
                        } // success
                    }); // ajax                    
                }
                else if (result == SP.UI.DialogResult.cancel) {
                    // do nothing - if modal opened again
                    // it will get content from cache variable
                }
                else {
                    // TODO: handle invalid close
                }
            }
        });

        // add layout to DOM
        if (m_isFirstLoadOfLayoutBuilder) {
            $('#pb-container').append(builderContent);
            $('#pb-container').addClass(m_layoutDirection);

            // init builder object
            m_builderObject = WebSpinach13.Core.LayoutBuilder.getNewBuilder(m_layoutName, m_layoutStructure, m_layoutDirection);

            // update cache var
            m_cachedContentToRevertTo = $(_modalContainer).children().clone();
            m_isFirstLoadOfLayoutBuilder = false;
        }
        else {
            // init builder object
            m_builderObject = WebSpinach13.Core.LayoutBuilder.getNewBuilder(m_layoutName, m_layoutStructure, m_layoutDirection);
        }
    }

    // closes modal dialog of LayoutBuilder editor
    function closeLayoutEditor(dialogResult) {

        // close modal
        m_modalLayoutBuilder.close(dialogResult);
    }

    // gets jQuery object for layout builder HTML structure
    function getLayoutBuilderModalTemplate(builderTemplate, direction) {
        var _container = $('<div id="pb-modalContainer"></div>');
        var _layoutContainer = $('<div id="pb-container" class="pb-layout"></div>');

        if (typeof (builderTemplate) === 'undefined' || builderTemplate === '') {
            // no template provided
            _container.append(_layoutContainer);
        }
        else {
            // place layout inside template
            // create template container and append it to modal container
            var _templateContainer = $('<div id="pb-template" class="' + direction + '"></div>');
            _container.append(_templateContainer);

            if (builderTemplate.indexOf('sidebar') != -1) {
                // create sidebar
                var _sideBar = $('<div id="pb-sidebar"></div>');
                var _sideBarToolbar = $('<div class="pb-mainToolbar"></div>');
                var _sideBarToolbarText = $('<h4>' + WebSpinach13.Core.Resources.DynamicZones.SideBarTitle + '</h4>');
                _sideBar.append(_sideBarToolbar);
                _sideBarToolbar.append(_sideBarToolbarText);
                _templateContainer.append(_sideBar);
            }

            // append builder to template
            _templateContainer.append(_layoutContainer);

            if (builderTemplate.indexOf('oppositeSidebar') != -1) {
                // TODO: add support for opposite sidebar
                throw ('oppositeSidebar is not supported in this version');
            }
        }

        // create builder's main toolbar 
        var _mainToolbar = $('<div class="pb-mainToolbar"></div>');
        _layoutContainer.append(_mainToolbar);
        _mainToolbar.append($('<a href="#" title="' + WebSpinach13.Core.Resources.DynamicZones.InsertRowToolbar + '" onclick="return WebSpinach13.Core.DynamicZones.getBuilerObject().openInsertDialog(this, 0)"></a>'));
        _mainToolbar.append($('<h4>' + WebSpinach13.Core.Resources.DynamicZones.LayoutContainerTitle + '</h4>'));

        // create buttons
        var _buttonContainer = $('<div class="pb-buttonContainer"></div>');
        _container.append(_buttonContainer);
        _buttonContainer.append($('<input type="button" class="ms-ButtonHeightWidth" value="' + WebSpinach13.Core.Resources.General.ButtonOK + '" onclick="WebSpinach13.Core.DynamicZones.closeLayoutEditor(SP.UI.DialogResult.OK);" />'));
        _buttonContainer.append($('<span class="ms-SpaceBetButtons"></span>'));
        _buttonContainer.append($('<input type="button" class="ms-ButtonHeightWidth" value="' + WebSpinach13.Core.Resources.General.ButtonCancelChanges + '" onclick="WebSpinach13.Core.DynamicZones.closeLayoutEditor(SP.UI.DialogResult.cancel); " />'));

        return _container;
    };

    function getBuilerObject()
    {
        return m_builderObject;
    }

}(jQuery);

WebSpinach13.Core.LayoutBuilder = function ($)
{
    var Builder = function (layoutName, availableLayouts, direction) {
        // private variables
        var m_layoutBuilder = this;
        var m_layoutStructure; // array of available layouts
        var m_mainRowsContainer;
        var m_direction; // direction of layout
        var m_layoutName;

        var m_tempReferenceInsertSender; // holds a reference to the sender, which opened insert dialog
        var m_tempSelectedIndices; // array which holds indices of selected rows
        var m_tempDepth; // holds depth of container to which fetched rows

        var m_modalInsert = null; // ref to modal window object

        var initSortable = function (rowsContainer) {
            // rows sorting
            rowsContainer.sortable({
                axis: 'y',
                cursor: 'move',
                forcePlaceholderSize: true,
                handle: '>.pb-rowToolbar>h5',
                placeholder: 'pb-row-placeholder',
                scroll: true,
                opacity: 0.3,
                tolerance: 'intersect'
            });

            // cells sorting
            rowsContainer.children('.pb-row').each(function () {
                var _cells = $(this).children('.pb-cells').sortable({
                    axis: 'x',
                    cursor: 'move',
                    forcePlaceholderSize: true,
                    handle: '>.pb-cellToolbar>h6',
                    placeholder: 'pb-cell-placeholder',
                    scroll: true,
                    opacity: 0.3,
                    tolerance: 'intersect'
                });

                // inner
                _cells.children('.pb-cell').each(function () {
                    initSortable($(this).children('.pb-rows'));
                });
            });
        } // initSortable

        // equalizes width of cells in provided rows,
        // this function runs recursively
        // depth - inner depth of cell
        // optionalMaxCell - passed only when fixing width in "Add rows" dialog window
        var fixCellsWidth = function (rowsCollection, depth, optionalMaxCell) {

            if (rowsCollection.length == 0)
                return;

            var _maxCells;
            if (m_layoutStructure[depth] != '*') {
                // non-dynamic cell, means that number of cells that can be defined in configuration
                // we get here only when depth > 0
                _maxCells = parseInt(m_layoutStructure[depth]);
            }
            else {
                // dynamic number of cells
                if (typeof (optionalMaxCell) !== 'undefined') {
                    // we'll get here from "Add rows" dialog window (fixing width in it)
                    _maxCells = optionalMaxCell;
                }
                else {
                    // number of available layouts is a parent cell size
                    var _sizeEl = $(rowsCollection[0]).closest('.pb-cell').children('.pb-cellToolbar').children('input.cellSize');
                    if (_sizeEl.length == 0) throw ('Size of parent cell cannot be determined');
                    _maxCells = parseInt(_sizeEl.val());
                }
            }

            rowsCollection.each(function (rowIndex) {
                var _cells = $(this).children('.pb-cells').children('.pb-cell'); // only direct childrens (closest cells) of the current row
                _cells.each(function () { $(this).css('width', 'auto'); }); // reset cells width

                // get average width of row's cells
                var _cellsWidth = $(this).children('.pb-cells').width();
                var _singleCellSize = _cellsWidth / _maxCells;

                // set height and width to all cells
                _cells.each(function (cellIndex) {
                    var _cell = $(this);
                    var _cellSize = _cell.children('.pb-cellToolbar').children('.cellSize').val();
                    var _cellBorderMarginPadding =
                        parseInt(_cell.css('margin-right').replace('px', '').replace('auto', '0')) +
                        parseInt(_cell.css('margin-left').replace('px', '').replace('auto', '0')) +
                        getBorderWidth(_cell, 'border-left-width') +
                        getBorderWidth(_cell, 'border-right-width') +
                        parseInt(_cell.css('padding-left').replace('px', '').replace('auto', '0')) +
                        parseInt(_cell.css('padding-right').replace('px', '').replace('auto', '0'));
                    _cell.css('width', Math.floor(_singleCellSize * _cellSize - _cellBorderMarginPadding) + 'px');
                    fixCellsWidth(_cell.children('.pb-rows').children('.pb-row'), depth + 1);
                });
            });
        } // fixCellsWidth

        // gets specified border width
        // element - jQuery object of which element border is
        // borderStyleFullName - the CSS type of border, for instance 'border-left-width'
        var getBorderWidth = function (element, borderStyleFullName) {
            if (element.css('border-style') == 'none')
                return 0;

            var _value = element.css(borderStyleFullName);
            var _clean = parseInt(_value.replace('px', ''));
            if (isNaN(_clean)) {
                if ($.browser.msie && $.browser.version == '7.0') {
                    _clean = parseInt(_value.replace('thin', '2').replace('medium', '4').replace('thick', '6'));
                }
                else {
                    _clean = parseInt(_value.replace('thin', '1').replace('medium', '3').replace('thick', '5'));
                }
            }
            return _clean;
        }

        // equalizes height of cells in provided rows,
        // this function runs recursively
        var fixCellsHeight = function (rowsCollection) {

            rowsCollection.each(function (rowIndex) {
                // find cell with max height
                var _cells = $(this).children('.pb-cells').children('.pb-cell'); // only direct cells of the current row
                var _cellMaxHeight = 50;

                _cells.each(function (cellIndex) {
                    var _cell = $(this);
                    _cell.css('height', 'auto'); // reset height
                    var _currentCellHeight = _cell.height();
                    if (_currentCellHeight > _cellMaxHeight)
                        _cellMaxHeight = _currentCellHeight;
                });


                // set height and width to all cells
                _cells.each(function (cellIndex) {
                    var _cell = $(this);
                    _cell.css('height', _cellMaxHeight + 'px');
                    fixCellsHeight(_cell.find('>.pb-rows > .pb-row'));
                });
            });
        } // fixCellsHeight

        // deletes row
        this.deleteRow = function (sender) {
            sender = $(sender);
            var _row = sender.closest('.pb-row');

            // mark which row to delete
            _row.addClass('ui-selected');

            var _message = WebSpinach13.Core.Resources.DynamicZones.ConfirmRowDelete;
            if (_row.find('.pb-parts').length > 0)
                _message = WebSpinach13.Core.Resources.DynamicZones.ConfirmRowDeleteWithWebParts;

            if (confirm(_message)) {
                _row.slideUp(function () {
                    var _row = $(this);
                    var _rowsContainer = _row.closest('.pb-rows');

                    _row.remove();
                    fixCellsHeight(_rowsContainer.closest('.pb-row'));

                    // if the last row removed -> 
                    // destroy sortable and remove container
                    if (_rowsContainer.children('.pb-row').length == 0) {
                        _rowsContainer.sortable('destroy');
                        _rowsContainer.remove();
                    }
                });
            }
            else
                _row.removeClass('ui-selected');

            return false;
        } // deleteRow

        // gets jQuery object for rows insert HTML structure
        var getInsertRowsModalTemplate = function () {
            var _container = $('<div id="pb-insertRowsDialog"></div>');
            _container.append($('<div id="pb-insertRowsContainer" class="pb-layout ' + m_direction + '"></div>'));

            var _buttonContainer = $('<div class="pb-buttonContainer"></div>');
            _container.append(_buttonContainer);

            _buttonContainer.append($('<input id="btnInsert" type="button" value="' + WebSpinach13.Core.Resources.DynamicZones.ButtonInsertRow + '" onclick="WebSpinach13.Core.DynamicZones.getBuilerObject().insertRow()" class="ms-ButtonHeightWidth" />'));
            _buttonContainer.append($('<span class="ms-SpaceBetButtons"></span>'));
            _buttonContainer.append($('<input id="btnInsertCancel" type="button" value="' + WebSpinach13.Core.Resources.General.ButtonCancel + '" onclick="WebSpinach13.Core.DynamicZones.getBuilerObject().closeInsertDialog()" class="ms-ButtonHeightWidth" />'));

            return _container;
        }

        // open insert row/rows dialog for provided sender container
        // depth - indicates depth of cell, where the row will be inserted
        this.openInsertDialog = function (sender, depth) {

            WebSpinach13.Core.Utils.ShowLoading();

            // check if dynamic cells number
            var _maxCells = 0;
            if (m_layoutStructure[depth] == '*') {
                // get available layouts from current cell size 
                var _sizeEl = $(sender).parent().children('input.cellSize');
                if (_sizeEl.length == 0) throw ('Size of cell cannot be determined');
                _maxCells = parseInt(_sizeEl.val());
            }

            // get layout       
            $.ajax({
                type: 'GET',
                url: WebSpinach13.Core.Utils.GetHanderUrl('GetNewLayout.ashx'),
                data: 'depth=' + depth + "&layoutName=" + m_layoutName + '&maxcells=' + _maxCells,
                success: function (data) {
                    // fetch layout
                    var _modalContainer = document.createElement('div');
                    $(_modalContainer).append(getInsertRowsModalTemplate());
                    $('#pb-insertRowsContainer', $(_modalContainer)).append(data);
                    $('#btnInsert', $(_modalContainer)).attr('disabled', true);

                    // open window
                    m_modalInsert = SP.UI.ModalDialog.showModalDialog({
                        title: WebSpinach13.Core.Resources.DynamicZones.InsertRowsTitle,
                        width: 600,
                        allowMaximize: false,
                        html: _modalContainer,
                        dialogReturnValueCallback: function (dialogResult, returnValue) {
                            // return ability to press enter
                            $(document).unbind('keypress');
                        }
                    });

                    // disable enter - some weird issue, only when insert rows modal is opened, it cause postback
                    $(document).keypress(function (e) {
                        if (e.which == 13) {
                            return false;
                        }
                    });

                    if (_maxCells == 0)
                        fixCellsWidth($('#pb-insertRowsContainer').children('.pb-rows').children('.pb-row'), depth);
                    else
                        fixCellsWidth($('#pb-insertRowsContainer').children('.pb-rows').children('.pb-row'), depth, _maxCells);

                    m_tempReferenceInsertSender = sender;
                    m_tempDepth = depth;

                    // handle selectable
                    $('#pb-insertRowsContainer > .pb-rows').selectable({
                        stop: function () {
                            m_tempSelectedIndices = [];
                            $('#pb-insertRowsContainer').children('.pb-rows').children('.ui-selected').each(function () {
                                var _index = $('#pb-insertRowsContainer').children('.pb-rows').children('.pb-row').index(this);
                                m_tempSelectedIndices.push(_index);
                            });
                            if (m_tempSelectedIndices.length > 0) {
                                $('#btnInsert').removeAttr('disabled');
                            }
                            else {
                                $('#btnInsert').attr('disabled', 'disabled');
                            }
                        }
                    });
                    WebSpinach13.Core.Utils.HideLoading();
                }, // success
                error: function (response) { WebSpinach13.Core.Utils.handleAjaxError(response); }
            }); // ajax
            return false;
        } // openInsertDialog

        // closes dialog of insert new row
        this.closeInsertDialog = function () {
            $('#pb-insertRowsContainer > .pb-rows').selectable('destroy');
            m_modalInsert.close();
        } // closeInsertDialog

        // inserts selected rows
        this.insertRow = function () {

            var _allRows = $('#pb-insertRowsContainer').children('.pb-rows').children('.pb-row');
            var _cell = m_tempDepth != 0 ? $(m_tempReferenceInsertSender).closest('.pb-cell') : $('#pb-container');
            var _innerRowsContainer = _cell.children('.pb-rows');

            for (var i = 0; i < m_tempSelectedIndices.length; i++) {
                var _newRow = $(_allRows[m_tempSelectedIndices[i]]).clone();
                if (_innerRowsContainer.length == 0) {
                    // no rows -> create container element
                    _cell.append('<ul class="pb-rows"></ul>');
                    _innerRowsContainer = _cell.children('.pb-rows');
                    // init sortable on created rows container
                    initSortable(_innerRowsContainer);
                }

                // append row
                _innerRowsContainer.append(_newRow);

                // init inner cells sortable
                _newRow.children('.pb-cells').sortable({
                    axis: 'x',
                    cursor: 'move',
                    forcePlaceholderSize: true,
                    handle: '>.pb-cellToolbar>h6',
                    placeholder: 'pb-cell-placeholder',
                    scroll: true,
                    opacity: 0.3,
                    tolerance: 'intersect'
                });
            }

            // fix width/height
            fixCellsWidth(_innerRowsContainer.children('.pb-row'), m_tempDepth);
            fixCellsHeight(_cell.closest('.pb-row'));

            // animate what was added
            var _affectedElements = _innerRowsContainer.find('ul.ui-selected, li.ui-selected, li.ui-selected li');
            _affectedElements.animate({ backgroundColor: '#fff' }, 600, 'linear', function () {
                _affectedElements.css('background-color', '');
            });
            _affectedElements.removeClass('ui-selected');

            m_tempReferenceInsertSender = null;
            m_layoutBuilder.closeInsertDialog();
        } // insertRow

        // returns stringified JSON of layout structure
        this.getSerializedLayout = function () {
            var _array = getArray(m_mainRowsContainer);
            return JSON.stringify(_array);
        } // getSerializedLayout

        // gets array of serialized cells
        var getArray = function (rowsContainer) {
            var _rows = [];
            rowsContainer.children('.pb-row').each(function (rowIndex) {
                _rows.push([]); // add row        
                var _cells = $(this).children('.pb-cells').children('.pb-cell');

                // running on cells in row
                for (var i = 0; i < _cells.length; i++) {
                    var _cell = $(_cells[i]);

                    _rows[rowIndex].push({
                        id: _cell.attr('id'),
                        size: _cell.children('.pb-cellToolbar').children('.cellSize').val(),
                        childs: getArray(_cell.children('.pb-rows'))
                    });
                }
            });
            return _rows;
        } // getArray

        // initializes builder UI and functionality
        // this function called once, after layout rendered 
        // layoutName - name of layout
        // dataElementId - client id of element where to data will serialized
        var init = function () {
            m_direction = direction;
            m_layoutStructure = availableLayouts;
            m_layoutName = layoutName;
            m_mainRowsContainer = $('#pb-container').children('.pb-rows');

            // set width to modal container (this will prevent incorrect width calculation when scroller is visible)
            var _modalFrame = m_mainRowsContainer.closest('.ms-dlgFrameContainer');
            $('#pb-modalContainer').css('width', (_modalFrame.width() - 30) + 'px');

            fixCellsWidth(m_mainRowsContainer.children('.pb-row'), 0);
            fixCellsHeight(m_mainRowsContainer.children('.pb-row'));

            initSortable(m_mainRowsContainer);

            // fix modal container and layout width on resize of modal        
            $(_modalFrame).watch('width', function () {
                $('#pb-modalContainer').css('width', ($(this).width() - 30) + 'px');
                fixCellsWidth(m_mainRowsContainer.children('.pb-row'), 0);
                fixCellsHeight(m_mainRowsContainer.children('.pb-row'));
            });
        } // init

        init();
    };            // LayoutBuilder      

    return { getNewBuilder: getNewBuilder }

    function getNewBuilder(layoutName, availableLayouts, direction)
    {
        return new Builder(layoutName, availableLayouts, direction);
    }

}(jQuery);
///#source 1 1 /Layouts/WebSpinach13/Core/js/ws-ticker.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="libs\jquery-1.9.1.min.js" />
/// <reference path="libs\jquery-1.8.3.intellisense.js" />
/// <reference path="ws-core-utils.js" />

// declare namespace
var WebSpinach13 = WebSpinach13 || {};
WebSpinach13.Core = WebSpinach13.Core || {};

// declare functions
WebSpinach13.Core.TickerPost = function ($) {
    // locals
    var tickerIndex = -1;
    var tickerPost;

    var ticker_elm = '#wsticker-wrapper';
    var prev_elm = '#wsprev';
    var phone_prev_elm = '#wsphone-prev';
    var phone_next_elm = '#wsphone-next';
    var next_elm = '#wsnext';
    var news_elm = '#wsjs_news';
    var content_elm = '#wsticker_content';
    var first_li_elm = '#wsjs_news li:first';
    var last_li_elm = '#wsjs_news li:last';
    var swipe_elm = '#wsticker-swipe';
    var list_count = $('#wsjs_news li').length;
    var arr = new Array();

    

    var _startUrl = null;


   

    function Init() {

        // in document ready:
        $(function () {
            _startUrl = _spPageContextInfo.webServerRelativeUrl;
            if (_startUrl == "/")
                _startUrl = "";
            if ($(ticker_elm)) {
                $('#wsjs_news li').each(function () {
                    arr.push(this.innerHTML);
                })
                showNext(true);
                // connect the previous and next buttons
                $(next_elm).click(showNext);
                $(phone_next_elm).click(showNext);
                $(prev_elm).click(showPrev);
                $(phone_prev_elm).click(showPrev);
                // start ticker timer
                setInterval(showNext, 14000);
            }
        });
    }

    // private

    function showNext(_firstTime) {
        if (_firstTime == true) {

            $(content_elm).html($(first_li_elm).html());
            tickerIndex++;
        }
        else {
            // fadeout
            $(content_elm).hide();
            //get the next item
            tickerIndex++;
            if (tickerIndex >= arr.length)
                tickerIndex = 0;
            
            $(content_elm).html(arr[tickerIndex]);
           
            //fadein
            $(swipe_elm).stop();
            var _dir = $('html').attr('dir');
            if (_dir == "ltr")
                $(swipe_elm).css('margin-left', '0%');
            else
                $(swipe_elm).css('margin-right', '0%');
            $(swipe_elm).show();
            $(content_elm).show();
            if (_dir == "ltr")
                $(swipe_elm).animate({ 'margin-left': '100%' }, 3000, function () {
                    $(swipe_elm).hide(); $(swipe_elm).css('margin-left', '0%')
                });
            else
                $(swipe_elm).animate({ 'margin-right': '87%' }, 3000, function () {
                    $(swipe_elm).hide(); $(swipe_elm).css('margin-right', '0%')
                });

        }
        return false;
    }

    function showPrev() {
        $(content_elm).hide();
        //get the next item
        if (tickerIndex > 0) {
            tickerIndex--;
        }
        else {
            tickerIndex = arr.length - 1;
        }
        $(content_elm).html(arr[tickerIndex]);
        
        //fadein
        $(swipe_elm).stop();
        var _dir = $('html').attr('dir');
        if (_dir == "ltr")
            $(swipe_elm).css('margin-left', '0%');
        else
            $(swipe_elm).css('margin-right', '0%');
        $(swipe_elm).show();
        // $(swipe_elm).css('display', 'block');
        $(content_elm).show();
        // get the direction of the page

        if (_dir == "ltr")
            $(swipe_elm).animate({ 'margin-left': '87%' }, 3000, function () {
                $(swipe_elm).hide(); $(swipe_elm).css('margin-left', '0%')
            });
        else
            $(swipe_elm).animate({ 'margin-right': '87%' }, 3000, function () {
                $(swipe_elm).hide(); $(swipe_elm).css('margin-right', '0%')
            });
    }

    // public


    return {
        Init: Init,
        showNext: showNext,
        showPrev: showPrev
    };

    
}(jQuery);
  





///#source 1 1 /Layouts/WebSpinach13/Core/js/ws-dynamicContentToolPart.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="libs\jquery-1.9.1.min.js" />
/// <reference path="libs\jquery-1.8.3.intellisense.js" />
/// <reference path="ws-core-utils.js" />

// declare namespace
var WebSpinach13 = WebSpinach13 || {};
WebSpinach13.Core = WebSpinach13.Core || {};

// declare functions
WebSpinach13.Core.DynamicContentToolPart = function ($) {

    function Init(ListElmID, ViewsElmID, FieldsElmID, DisplayTemplateElmID, Data, SelectedData) {
        $(function () {

            // Get $ Elms
            var $ddlLists = $('#' + ListElmID);
            var $ddlViews = $('#' + ViewsElmID);
            var $ddlFields = $('#' + FieldsElmID);
            var $ddlDisplayTemplates = $('#' + DisplayTemplateElmID);

            // Parse Json
            Data = $.parseJSON(Data);
            // Parse SelectedData
            SelectedData = $.parseJSON(SelectedData);

            var _selectedList;
            var _selectedView;
            var _selectedField;
            var _selectedTemplate;
            // set selected List

            SelectedData = (SelectedData == null) ? undefined : SelectedData;
            if (SelectedData) {
                // get first List with Selected ID
                _selectedList = $.grep(Data.Lists,
                    function (item, index) {
                        return (item.ID === SelectedData.List || item.Name === SelectedData.List);
                    })[0];

                _selectedView = SelectedData.View;
                _selectedField = SelectedData.OrderByField;
                _selectedTemplate = SelectedData.Template;
            }

            // get by grep or first
            _selectedList = (_selectedList) ? _selectedList : Data.Lists[0];

            // Static Data
            constructSelect($ddlLists, Data.Lists, 'Name', 'Name', (_selectedList) ? _selectedList.Name : undefined);
            constructSelect($ddlDisplayTemplates, Data.Templates, 'Value', 'Key', _selectedTemplate);

            // build related DDLs
            constructSelect($ddlViews, _selectedList.Views, 'Value', 'Value', _selectedView);
            constructSelect($ddlFields, _selectedList.Fields, 'Value', 'Key', _selectedField);

            // Bind SelectedIDChanged Events On DDLs
            $ddlLists.change(function () {
                var _selected = $(this).val();

                var _list = $.grep(Data.Lists,
                function (item, index) {
                    return (item.ID === _selected || item.Name === _selected);
                })[0];

                // reconstract Views DDL
                reconstructSelect($ddlViews, _list.Views, 'Value', 'Value');
                reconstructSelect($ddlFields, _list.Fields, 'Value', 'Value');
            });
        });
    }

    // Private

    // Helpers

    // reconstructSelect - empty option, add new options
    function reconstructSelect($Select, Arr, TextProp, ValProp) {
        $Select.find('option').remove();

        constructSelect($Select, Arr, TextProp, ValProp);
    }

    // append option to Select Element
    function constructSelect($Select, Arr, TextProp, ValProp, selectedValue) {
        for (var i in Arr) {
            // checking if need to be selected
            var _isSelected = false;
            // provided with value property
            if (ValProp) {
                if (selectedValue)
                    _isSelected = (selectedValue === Arr[i][ValProp]);

                $Select.append(createOption(Arr[i][TextProp], Arr[i][ValProp], _isSelected));
            }
            else {
                // only provided with text property
                if (TextProp) {
                    if (selectedValue)
                        _isSelected = (selectedValue === Arr[i][TextProp]);

                    $Select.append(createOption(Arr[i][TextProp], Arr[i][TextProp], _isSelected));
                }
                else // not provided with properties
                {
                    if (selectedValue)
                        _isSelected = (selectedValue === Arr[i]);

                    $Select.append(createOption(Arr[i], Arr[i], _isSelected));
                }
            }
        }
    }

    // Create Option element
    function createOption(Text, Val, isSelected) {
        var _$option = $("<option></option>");

        if (Val)
            _$option.attr("value", Val);

        if (isSelected)
            _$option.prop("selected", true);

        return _$option.text(Text);
    }

    return {
        Init: Init,
    };

}(jQuery);
///#source 1 1 /Layouts/WebSpinach13/Core/js/ws-mediaPicker.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />
/// <reference path="ws-core-utils.js" />

// declare namespace
var WebSpinach13 = WebSpinach13 || {};
WebSpinach13.Core = WebSpinach13.Core || {};

WebSpinach13.Core.MediaContentPicker = function ($) {

    // locals
    this.controlStates = {
        // enables the control to allow the user only choosing a link
        LinkOnly: "LinkOnly",
        // enables the control to allow the user only choosing an image
        ImageOnly: "ImageOnly",
        /// enables the control to allow the user choosing a link and an image        
        ImageAndLink: "ImageAndLink",
        /// enables the control to allow the user choosing an image or a media, considering when choosing an image allow pick a link also        
        RIA: "RIA"
    }

    // public
    function init(controlState, pickerId, controlId, hiddenUrlId, hiddenMetaId) {
       
        // Register onchanged event
        $('#' + pickerId).change(function () {
            
            WebSpinach13.Core.MediaContentPicker.handleMediaChange(controlId, pickerId, $(this).val(), controlState, hiddenUrlId, hiddenMetaId);
        });
    }

    function handleMediaChange(controlId, pickerId, mediaUrl, controlState, hiddenUrlId, hiddenMetaId)
    {
        if (mediaUrl == "") {
            WebSpinach13.Core.MediaContentPicker.hideAll(controlId);
            WebSpinach13.Core.MediaContentPicker.clearAll(controlId, hiddenUrlId, hiddenMetaId);            
            return;
        }

        // Set hidden url
        $('#' + hiddenUrlId).val(mediaUrl);

        // Make sure url in picker is also updated
        $('#' + pickerId).val(mediaUrl);

        // Check if we need to show links
        if (controlState == WebSpinach13.Core.MediaContentPicker.controlStates.ImageAndLink || 
            controlState == WebSpinach13.Core.MediaContentPicker.controlStates.LinkOnly)
            $('#' + controlId + ' .ws-cp-linkContainer').show(); // Link container 

        // Check if this is supposed to pick images
        if (controlState == WebSpinach13.Core.MediaContentPicker.controlStates.ImageAndLink ||
            controlState == WebSpinach13.Core.MediaContentPicker.controlStates.ImageOnly ||
            controlState == WebSpinach13.Core.MediaContentPicker.controlStates.RIA) {

            $('#' + controlId + ' .ws-mediaPreview').attr('src', WebSpinach13.Core.Utils.GetImageThumbnailUrl(mediaUrl)); // Image src
            $('#' + controlId + ' .ws-mediaPreviewContainer').show(); // Image preview
            $('#' + controlId + ' .ws-image').show(); // Tooltip + alternate text            
        }
    }

    function hideAll(controlId)
    {
        $('#' + controlId + ' .ws-mediaPreviewContainer').hide(); // Image preview
        $('#' + controlId + ' .ws-image').hide(); // Tooltip + alternate text
        $('#' + controlId + ' .ws-cp-linkContainer').hide(); // Link container 
    }

    function clearAll(controlId, hiddenUrlId, hiddenMetaId) {
        $('#' + hiddenUrlId).val("");
        $('#' + hiddenMetaId).val("");
        $('#' + controlId + ' .ws-alternate').val("");
        $('#' + controlId + ' .ws-tooltip').val("");        
    }

    function showPreview(sender) {
        sender = jQuery(sender);
        var _container = sender.closest('.mod-sel');
        var _title = _container.children("input[type='text']").val();
        var _url = jQuery(_container.children("input[type='hidden']")[0]).val();

        ExecuteOrDelayUntilScriptLoaded(function () {
            SP.UI.ModalDialog.showModalDialog({
                url: m_selector.config.repo + _url,
                title: _title,
                allowMaximize: true,
                showClose: true,
                width: 640,
                height: 480
            });
        }, "sp.js");
    }

    return {
        Init: init,
        showPreview: showPreview,
        handleMediaChange: handleMediaChange,
        controlStates: controlStates,
        hideAll: hideAll,
        clearAll: clearAll        
    };
}(jQuery);
///#source 1 1 /Layouts/WebSpinach13/Core/js/ws-RTE.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />
/// <reference path="ws-core-utils.js" />

// declare namespace
var WebSpinach13 = WebSpinach13 || {};
WebSpinach13.Core = WebSpinach13.Core || {};

WebSpinach13.Core.RTE = function ($) {

    // locals
    function setPrefix(prefix) {

        $(".ms-rtestate-write").attr({
            PrefixStyleSheet: prefix
        });
        
    }

    return {
        SetPrefix: setPrefix
    };
}(jQuery);
///#source 1 1 /Layouts/WebSpinach13/Core/js/ws-noCaptcha.js
// declare namespace
var WebSpinach13 = WebSpinach13 || {};
WebSpinach13.Core = WebSpinach13.Core || {};

WebSpinach13.Core.NoCaptcha = function ($) {

    var _publicKey;

    function init(key) {
        _publicKey = key;
    }
   
    function renderNoCaptcha() {
        $('.g-recaptcha').each(function () {
            var _id = $(this).attr('id');
            grecaptcha.render(_id, {
                'sitekey': _publicKey,
                'theme': 'light'
            });
        });
    }

    return {
        Init: init,
        RenderNoCaptcha: renderNoCaptcha
    };
}(jQuery);
