///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-utils.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />

// declare prototype methods
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
        if (m == "{{") { return "{{"; }
        if (m == "}}") { return "}}"; }
        return args[n];
    });
};

//shared functions
function currentWebUrl() {
    var _startUrl = _spPageContextInfo.webAbsoluteUrl;

    if (_startUrl.startsWith("/"))
        _startUrl = _startUrl.slice(1);

    return _startUrl;
}


// declare namespace
var Kenes = Kenes || {};
Kenes.Core = Kenes.Core || {};

Kenes.Core.Utils = function ($) {

    // locals
    var _startUrl = null;

    // private
    function setupFacebookSDK() {
        $('<div id="fb-root"></div>').prependTo('body');
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    // public
    function Init() {
        $(function () {
            _startUrl = _spPageContextInfo.webServerRelativeUrl;
            if (_startUrl == "/")
                _startUrl = "";
            setupFacebookSDK();
        });
    }

    return {
        Init: Init,
    }

}(jQuery)
///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-ticker.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.min.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />
/// <reference path="bootstrap.js" />

// declare namespace
var Kenes = Kenes || {};
Kenes.Post = Kenes.Post || {};

// declare functions


// locals

// consts

// when the script loads:
Kenes.Post.Ticker = function ($) {

    // locals
    var tickerIndex = -1;
    var tickerPost;

    var ticker_elm = '#ticker-wrapper';
    var prev_elm = '#prev';
    var phone_prev_elm = '#phone-prev';
    var phone_next_elm = '#phone-next';
    var next_elm = '#next';
    var news_elm = '#js_news';
    var content_elm = '#ticker_content';
    var first_li_elm = '#js_news li:first';
    var last_li_elm = '#js_news li:last';
    var swipe_elm = '#ticker-swipe';

    var _startUrl = null;


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
            var nextLi = 'li#' + tickerIndex;
            if ($(nextLi).length > 0) {
                $(content_elm).html($(nextLi).html());
            }
            else {
                tickerIndex = 0;
                nextLi = 'li#' + tickerIndex;
                $(content_elm).html($(nextLi).html());
            }
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
            tickerIndex = $(last_li_elm).attr('id');
        }
        var nextLi = 'li#' + tickerIndex;
        if ($(nextLi).length > 0) {
            $(content_elm).html($(nextLi).html());
        }
        else {
            tickerIndex = 0;
            nextLi = 'li#' + tickerIndex;
            $(content_elm).html($(nextLi).html());
        }
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
    function Init() {

        // in document ready:
        $(function () {
            _startUrl = _spPageContextInfo.webServerRelativeUrl;
            if (_startUrl == "/")
                _startUrl = "";
            if ($(ticker_elm)) {
                showNext(true);
                // connect the previous and next buttons
                $(next_elm).click(Kenes.Post.Ticker.ShowNext);
                $(phone_next_elm).click(Kenes.Post.Ticker.ShowNext);
                $(prev_elm).click(Kenes.Post.Ticker.ShowPrev);
                $(phone_prev_elm).click(Kenes.Post.Ticker.ShowPrev);
                // start ticker timer
                setInterval(showNext, 14000);
            }
        });
    }

    // return object with function calls:
    return {
        //GetTickerList: getTickerList,
        ShowNext: showNext,
        ShowPrev: showPrev,
        Init: Init
    };
}(jQuery);


///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-slider.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />

// declare namespace
var Kenes = Kenes || {};
Kenes.Sliders = Kenes.Sliders || {};

Kenes.Sliders.Extended = function ($) {
    // locals

    // classes
    var ACTIVE = 'active';

    // private

    // public
    function Init() {
        $(function () {
            // 
            $('.wp-ExtendedSlider .carousel').carousel()
                .bind('slide', function (e) { // This event fires immediately when the slide instance method is invoked.
                    
                })
                .bind('slid', function (e) { // This event is fired when the carousel has completed its slide transition.
                    var $thumbnailsWrapper = $('+ .imgCycleThumbnailsNav-wrapper', this);
                    var $thumbnailsViewPort = $('.imgCycleNavThumbnails-wrapper', $thumbnailsWrapper);
                    var $thumbnailsWrapperInner = $('.carousel-indicators', $thumbnailsWrapper);

                    var activeSlideIndex = $('.item.active', this).index();

                    // sync the thumbnail
                    var thumbnailsViewPortWidth = $thumbnailsViewPort.width();
                    var thumbWidth = $('li[data-target]', $thumbnailsWrapperInner).outerWidth(true);
                    var thumbCount = $('li[data-target]', $thumbnailsWrapperInner).length;
                    var thumbControlsWidth = thumbCount * thumbWidth;

                    if (thumbControlsWidth > thumbnailsViewPortWidth) {
                        $thumbnailsWrapperInner.css('transform', function (index, value) {
                            var data = value.replace(')', '').split(',');//X data[4]='100px', Y data[5]='0px'
                            var x1 = Math.abs(data[4]);

                            // TODO: calc by active thumbnail index - fix
                            // TODO: add compatibility to all vendors
                            if (x1 < (thumbControlsWidth - thumbnailsViewPortWidth))
                                return 'translate3d(' + -1 * (thumbWidth * 1) + 'px,0,0)';
                            if (activeSlideIndex == 0)
                                return 'translate3d(0,0,0)';
                        });
                    }

                    // update active in thumbnail
                    $('li', $thumbnailsWrapperInner).removeClass(ACTIVE).eq(activeSlideIndex).addClass(ACTIVE);

                });

            // custom pager, fix active pager item
            $('.wp-ExtendedSlider .carousel-indicators li').click(function (e) {
                $(this).addClass(ACTIVE).siblings().removeClass(ACTIVE);

            });
        });
    }

    return {
        Init: Init,
    };
}(jQuery);

Kenes.Sliders.Minimal = function ($) {
    // locals

    // classes

    // private

    // public
    function Init() {
        $(function () {
            $('.wp-MinimalSlider .carousel').carousel();
        });
    }

    return {
        Init: Init,
    }
}(jQuery);


Kenes.Sliders.SliderFullWidth = function ($) {
    // locals

    // classes

    // private

    // public
    function Init() {
        $(function () {
            $($('.wp-SliderFullWidth .carousel .slides .item')[0]).addClass('active');
            $('.wp-SliderFullWidth .carousel').carousel();
        });
    }

    return {
        Init: Init,
    }
}(jQuery);




Kenes.Sliders.Countdown = function ($) {
    // locals

    // classes

    // private

    // public
    function Init() {
        $(function () {
            $('.wp-CountdownSlider .carousel').carousel();
        });
    }

    function ValidateRegistration()
    {
        window.setTimeout(function() { 
            if (Page_IsValid) {
                $(this).button('loading').closest('.control-group')
                    .removeClass('error').removeClass('warning');
            } 
            else {
                
                $(this).closest('.control-group').addClass('error').find('.newsletterMessage-success').hide();
            }
        });
    }

return {
    Init: Init,
    ValidateRegistration: ValidateRegistration
}
}(jQuery);
///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-tellAFriend.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.min.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />
/// <reference path="bootstrap.js" />

// declare namespace
var Kenes = Kenes || {};
Kenes.Share = Kenes.Share || {};

// declare functions


// locals

// consts

// when the script loads:
Kenes.Share.TellAfriend = function ($) {

    // locals
    var analytics_thankyou_elm = '#thankYou';
    var thankyou_src = '/Pages/ThankYou.aspx?type=tellafriend';
    var emailThanks_elm = '#ct_Thanks_div';
    var emailField_elm = '#ct_modalEmails_tb';
    var msgField_elm = '#ct_modalMessage_tb';
    var sendBtn_elm = '#ct_modalSend_btn';
    var cancelBtn_elm = '#ct_modalCancel_btn';
    var emailForm_elm = '#ct_TellAFriend_div';
    var modal_header = '#ct_modal_header_title';
    var modal_elm = '#ct_Modal';
    var thanks_close_elm = '#ct_thanksModalClose_btn';
    var thanks_modal_elm = '#ct_ThanksModal';
    var thanks_msg_elm = '#ct_thanks_modal';
    var validation_label_eml = '#ct_validation_label';
    var _startUrl = null;

    // private
    function closeModal() {
        $(emailField_elm).val('');
        $(modal_elm).modal('hide');
    }

    function closeThanks() {
        $(thanks_modal_elm).modal('hide');
    }
    function sendToFriend() {

        //Executes the validation logic of all the validation controls in a page. 
        if (doValidation()) {
            $(validation_label_eml).html('');
            $(this).button('loading');

            $.ajax({
                type: 'POST',
                dataType: "json",
                data: {
                    emailList: $(emailField_elm).val(),
                    MSG: $(msgField_elm).val(),
                    "g-recaptcha-response": $("#g-recaptcha-response").val()
                },
                cache: false,
                url: _startUrl + '/_layouts/15/Kenes.SharePoint/Base/Handlers/TellAFriend.ashx',
                error: function () {
                    alert('error on ajax call');
                },
                success: function (data) {
                    if (data.Status == "success") {
                        $(emailField_elm).val('');
                        $(msgField_elm).val('');
                        $(sendBtn_elm).button('reset');
                        $(modal_elm).modal('hide');
                        $(thanks_msg_elm).html(data.Description);
                        $(analytics_thankyou_elm).attr('src', _startUrl + thankyou_src);
                        $(thanks_modal_elm).modal('show');
                        setTimeout(closeThanks, 5000);
                    }
                    else
                        if (data.Status == 'fail') {
                            $(emailField_elm).val('');
                            $(msgField_elm).val('');
                            $(sendBtn_elm).button('reset');
                            $(modal_elm).modal('hide');
                            $(thanks_msg_elm).html(data.Description);
                            $(thanks_modal_elm).modal('show');
                            setTimeout(closeThanks, 5000);
                        }
                    if (grecaptcha != null) grecaptcha.reset(); //reset new google recaptcha
                }
            });
        }
    }

    function doValidation() {
        $(validation_label_eml).val('');
        if ($(emailField_elm).val() == '') {
            $(validation_label_eml).html(Kenes.Share.Resources.TellAFriend.EmailRequired);
            $(emailField_elm).focus();
            return false;
        }
        else {
            var emailFieldText = $(emailField_elm).val();

            var regex_email = new RegExp(Kenes.Share.Resources.TellAFriend.EmailWithComma);

            if (!regex_email.test(emailFieldText)) {
                $(validation_label_eml).html(Kenes.Share.Resources.TellAFriend.EmailWrongInput);
                $(emailField_elm).focus();
                return false;
            }
        }
        return true;
    }

    // public
    function Init() {

        // in document ready:
        $(function () {
            _startUrl = _spPageContextInfo.webServerRelativeUrl;
            if (_startUrl == "/")
                _startUrl = "";
            // connect the modal clicks to its use
            $(sendBtn_elm).click(Kenes.Share.TellAfriend.SendToFriend);
            $(cancelBtn_elm).click(Kenes.Share.TellAfriend.CloseModal);
            $(thanks_close_elm).click(Kenes.Share.TellAfriend.CloseThanks);
        });
    }

    // return object with function calls:
    return {
        SendToFriend: sendToFriend,
        CloseModal: closeModal,
        CloseThanks: closeThanks,
        Init: Init,
    };
}(jQuery);


///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-MediaGalleries.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />

// declare namespace
var Kenes = Kenes || {};
Kenes.MediaGalleries = Kenes.MediaGalleries || {};

Kenes.MediaGalleries.MediaGalleryThumbnail = function ($) {
    // locals

    // classes

    // private

    // public
    function Init(GalleryElmID, options) {
        $(function () {
            // 
            // Load the classic theme
            Galleria.loadTheme('/_catalogs/masterpage/Kenes/libs/galleria/themes/kenes/galleria.kenes.min.js');

            // Initialize Galleria
            Galleria.run('#' + GalleryElmID, options);
        });
    }

    return {
        Init: Init,
    };
}(jQuery);

Kenes.MediaGalleries.PagedMediaGallery = function ($) {
    // locals

    // classes

    // private

    // public
    function Init(GalleryElmID, ListUrl, options) {
        $(function () {
            // 

            var _$gallery = $('#' + GalleryElmID + ' .media-gallery');
            var _$loader = $('#' + GalleryElmID + ' .media-gallery-loader');

            _$gallery.scrollPagination({
                'contentPage': currentWebUrl() + "/_layouts/15/Kenes.SharePoint/Base/Handlers/MediaGalley.ashx",
                'contentData': { 'ListUrl': ListUrl, 'skip': function () { return _$gallery.children().size() } },
                'scrollTarget': $(window),
                'heightOffset': $('body').height() - (_$gallery.offset().top + _$gallery.height()) + 10, //10
                'beforeLoad': function () {
                    _$loader.fadeIn();
                    this.itemsCount = _$gallery.children().size();
                },
                'afterLoad': function (elementsLoaded) {
                    _$loader.fadeOut();
                    if (this.itemsCount == _$gallery.children().size()) {
                        _$gallery.stopScrollPagination();
                    }
                }
            });
        });
    }

    return {
        Init: Init,
    };
}(jQuery);
///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-speakerModal.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.min.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />
/// <reference path="bootstrap.js" />

// declare namespace
var Kenes = Kenes || {};
Kenes.Speakers = Kenes.Speakers || {};

// declare functions


// locals

// consts

// when the script loads:
Kenes.Speakers.SpeakerModal = function ($) {

    // locals
    var speaker_modal_elm = '#ct_SpeakerModal';
    var speaker_name_elm = '#ct_speaker_name';
    var speaker_image_elm = '#ct_speaker_img';
    var speaker_text_elm = '#ct_speaker_text';

    // private

    function openSpeakerModal(_id) {

        $.ajax({
            type: 'POST',
            dataType: "json",
            data: {
                id: _id,
            },
            cache: false,
            url: currentWebUrl() + '/_layouts/15/Kenes.SharePoint/Base/Handlers/Speakers.ashx',
            error: function () {
                // turn the span into alert class and fill it with the error
                $(speaker_text_elm).addClass('alert alert-error');
                $(speaker_text_elm).html('Could not load Speaker information');
                $(speaker_modal_elm).modal('show');
            },
            success: function (data) {
                if (data.Status == "success") {
                    $(speaker_text_elm).removeClass('alert alert-error');
                    $(speaker_name_elm).html(data.FullName);
                    $(speaker_image_elm).attr('src', data.ImgSrc);
                    $(speaker_text_elm).html(data.SpeakerText);
                    $(speaker_modal_elm).modal('show');
                }
                else
                    if (data.Status == 'fail') {
                        // turn the span into alert class and fill it with the error
                        $(speaker_text_elm).addClass('alert alert-error');
                        $(speaker_text_elm).html(data.Description);
                        $(speaker_modal_elm).modal('show');

                    }
            }
        });
    }


    // public

    // return object with function calls:
    return {
        OpenSpeakerModal: openSpeakerModal
    };
}(jQuery);


///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-survey.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.min.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />
/// <reference path="bootstrap.js" />

// declare namespace
var Kenes = Kenes || {};
Kenes.Survey = Kenes.Survey || {};

// declare functions


// locals

// consts

// when the script loads:
Kenes.Survey.SurveyVote = function ($) {

    // locals
    var analytics_thankyou_elm = '#thankYou';
    var thankyou_src = '/Pages/ThankYou.aspx?type=survey';
    var survey_answers_elm = ' #Survey_answers_wrapper';
    var survey_button_elm = ' #Survey_answers_button_wrapper';
    var survey_error_elm = ' #Survey_error_div';
    var survey_ajax_results_elm = ' #survey-ajax-results';
    var survey_button_elm = ' #vote_btn';

    // private

    function vote(_containerID) {

        // container id element selector variable
        var _container_elm = '[data-SurveyID="' + _containerID + '"]';
        // get the choosen answer by part of the id.
        var _choice = $(_container_elm + ' input[id*="ct_SurveyAnswersRadioButtons"]:checked').val();
        $(_container_elm + survey_error_elm).hide();
        $(_container_elm + survey_button_elm).button('loading');

        $.ajax({
            type: 'POST',
            dataType: "json",
            data: {
                choice: _choice,
            },
            cache: false,
            url: currentWebUrl() + '/_layouts/15/Kenes.SharePoint/Base/Handlers/Survey.ashx',
            error: function () {
                // turn the span into alert class and fill it with the error
                $(_container_elm + survey_error_elm).html('Error on processing the vote!');
                $(_container_elm + survey_error_elm).show();
                $(_container_elm + survey_button_elm).button('reset')
            },
            success: function (data) {
                if (data.Status == "success") {
                    // hide the answers and button
                    $(_container_elm + survey_answers_elm).hide();
                    $(_container_elm + survey_button_elm).hide();
                    // fill and show the results
                    $.each(data.Answers, function (i, item) {
                        var _result_elm = '<div class="survey-answers-prog"><b>' + item.Answer + '</b></div>';
                        _result_elm += '<div class="progress ' + item.ProgressColor + '" ><div class="bar" style="' + item.PercentageWidth + '"></div></div>';
                        _result_elm += '<div class="pull-right">' + item.Percentage + '</div><br />';
                        $(_container_elm + survey_ajax_results_elm).append(_result_elm);
                    });
                    $(_container_elm + survey_ajax_results_elm).show();
                    $(analytics_thankyou_elm).attr('src', currentWebUrl() + thankyou_src);
                }
                else
                    if (data.Status == 'fail') {
                        $(_container_elm + survey_error_elm).html('Error on processing the vote! ' + data.Description);
                        $(_container_elm + survey_error_elm).show();
                        $(_container_elm + survey_button_elm).button('reset')
                    }
            }
        });
    }


    // return object with function calls:
    return {
        Vote: vote
    };
}(jQuery);


///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-footerIndex.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.min.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />
/// <reference path="bootstrap.js" />

// declare namespace
var Kenes = Kenes || {};
Kenes.Responsive = Kenes.Responsive || {};

// declare functions


// locals

// consts

// when the script loads:
Kenes.Responsive.FooterIndex = function ($) {

    // locals
    var header_elm = ".linksGroup .header";

    // private
    function OpenOrClose(elm) {
        if ($(elm).hasClass("closed")) {
            $(elm).removeClass("closed");
            $(elm).addClass("open");
            $(elm).parent().children('.item').show();
        }
        else {

            $(elm).removeClass("open");
            $(elm).addClass("closed");
            $(elm).parent().children('.item').hide();
        }
    }
    // public
    function Init() {

        // in document ready:
        $(function () {
            if ($(window).width() < 767) {
                $(header_elm).addClass("closed");
                $(header_elm).click(function () {
                    Kenes.Responsive.FooterIndex.OpenOrClose(this);
                });
            }
        });

        //window.onresize() = function () {
        //    if ($(window).width() < 767) {
        //        $(header_elm).addClass("closed");
        //        $(header_elm).click(OpenOrClose());
        //    }
        //};
    }

    // return object with function calls:
    return {
        Init: Init,
        OpenOrClose: OpenOrClose
    };
}(jQuery);


///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-thankyou.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.min.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />
/// <reference path="bootstrap.js" />

// declare namespace
var Kenes = Kenes || {};

// when the script loads:
Kenes.ThankYou = function ($) {

    // locals
    var analytics_thankyou_elm = '#thankYou';
    var thankyou_src = '/Pages/ThankYou.aspx?type=';


    function Init(sourceAction) {

        // in document ready:
        $(function () {
            _startUrl = _spPageContextInfo.webServerRelativeUrl;
            if (_startUrl == "/")
                _startUrl = "";
            $(analytics_thankyou_elm).attr('src', _startUrl + thankyou_src + sourceAction);
        });
    } 

    return {
        Init: Init
    };
}(jQuery)
///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-search.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.min.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />
/// <reference path="bootstrap.js" />

// declare namespace
var Kenes = Kenes || {};

// when the script loads:
Kenes.Search = function ($) {

    var search_input_elm = '#ct_search_input';
    var search_btn_elm = '#ct_search_btn';
    var search_cnfig_val_elm = '#ct_search_cnfg_hdn';
    var search_in_page_input_elm = '#ct_search_inPage_input';
    var search_in_page_btn_elm = '#ct_search_inPage_btn';

    var _startUrl = null;
    var _query = '';

    function goSearch() {

        var _search_string = $(search_input_elm).val();
        var _searchCnfgUrl = $(search_cnfig_val_elm).val();
        var _search_url = _startUrl + _searchCnfgUrl + _search_string;

        window.location = _search_url;
        return false;
    }

    function goSearchInSearchPage(searchVal) {

        var _searchCnfgUrl = $(search_cnfig_val_elm).val();
        var _search_url = _startUrl + _searchCnfgUrl + searchVal;

        window.location = _search_url;
        return false;
    }

    function checkEnterInPage () {
        if (event.keyCode == 13) {
            $(search_in_page_btn_elm).click();
        }
        return false;
    }

    function checkEnter() {
        if (event.keyCode == 13) {
            $(search_btn_elm).click();
        }
        return false;
    }

    function searchInPage() {
        goSearchInSearchPage($(search_in_page_input_elm).val());
        return false;
    }


    function getValue() {
        $(search_in_page_input_elm).val(_query);
        return false;
    }

    function Init() {

        // in document ready:
        $(function () {
            _startUrl = _spPageContextInfo.webServerRelativeUrl;
            if (_startUrl == "/")
                _startUrl = "";
            
            $(search_btn_elm).click(Kenes.Search.GoSearch);
            $(search_in_page_input_elm).load(getValue);
        });
    }



    // return object with function calls:
    return {
        GoSearch: goSearch,
        GoSearchInSearchPage: goSearchInSearchPage,
        CheckEnter: checkEnter,
        CheckEnterInPage: checkEnterInPage,
        SearchInPage: searchInPage,
        GetValue: getValue,
        Init: Init
    };
}(jQuery);
///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-newsletter.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.min.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />
/// <reference path="bootstrap.js" />

// declare namespace
var Kenes = Kenes || {};
Kenes.News = Kenes.News || {};

// declare functions


// locals

// consts

// when the script loads:
Kenes.News.Newsletter = function ($) {

    // locals
    var analytics_thankyou_elm = '#thankYou';
    var thankyou_src = '/Pages/ThankYou.aspx?type=newsletter';
    var emailThanks_elm = '#ct_Thanks_div';
    var emailField_elm = '#txt_Newsletter_email';
    var sendBtn_elm = '#btn_Newsletter_subscribe';
    var validation_label_eml = '#ltr_Newsletter_Error_text';
    var error_wrapper_elm = '#div_KeepMeUpdate_error_wrapper';
    var captcha_count = '#captcha_hidden_counter';
    var captcha_elm = '#ct_newsletter_captcha';
    var config_val = $('#config_captcha_hdn').val();
    var thanks_msg_elm = '#ltr_Newsletter_thankyou_text';
    var thanks_div_elm = '#div_KeepMeUpdate_message_wrapper';
    var _startUrl = null;

    // private



    function addMeToNewsletter() {

        //Executes the validation logic of all the validation controls in a page. 
        if (doValidation()) {
            $(error_wrapper_elm).hide();
            $(thanks_div_elm).hide();
            $(validation_label_eml).html('');
            $(sendBtn_elm).button('loading');
            var _challenge;
            var _response;
            if ($(captcha_count).val() < config_val || typeof (Recaptcha) == 'undefined')
                _challenge = '';
            else {
                _challenge = Recaptcha.get_challenge();
                $(captcha_elm).show();
                $(sendBtn_elm).button('reset');

                return false;
            }
            if (typeof (Recaptcha) == 'undefined') {
                _response = '';
            }
            else
                _response = Recaptcha.get_response();

            $.ajax({
                type: 'POST',
                dataType: "json",
                data: {
                    email: $(emailField_elm).val(),
                    challenge: _challenge,
                    response: _response
                },
                cache: false,
                url: _startUrl + '/_layouts/15/Kenes.SharePoint/Base/Handlers/Newsletter.ashx',
                error: function () {
                    if (typeof (Recaptcha) != 'undefined')
                        Recaptcha.reload();
                    $(validation_label_eml).html('error on ajax call');
                    $(error_wrapper_elm).show();

                },
                success: function (data) {
                    if (data.Status == "success") {
                        $(emailField_elm).val('');
                        $(sendBtn_elm).button('reset');
                        $(thanks_div_elm).show();
                        $(captcha_count).val(data.CaptchaCount);
                        if ($(captcha_count).val() >= config_val)
                            $(captcha_elm).show();
                        if (typeof (Recaptcha) != 'undefined')
                            Recaptcha.reload();
                        $(analytics_thankyou_elm).attr('src', _startUrl + thankyou_src);
                    }
                    else
                        if (data.Status == 'fail') {
                            $(emailField_elm).val('');
                            $(sendBtn_elm).button('reset');
                            $(validation_label_eml).html(data.Description);
                            $(captcha_count).val($(captcha_count).val() + 1);
                            if ($(captcha_count).val() >= config_val)
                                $(captcha_elm).show();
                            if (typeof (Recaptcha) != 'undefined')
                                Recaptcha.reload();
                            $(error_wrapper_elm).show();

                        }
                }
            });
        }
    }

    function doValidation() {
        $(validation_label_eml).val('');
        $(error_wrapper_elm).hide();
        if ($(emailField_elm).val() == '') {
            $(validation_label_eml).html(Kenes.News.Resources.Newsletter.EmailRequired);
            $(emailField_elm).focus();
            $(error_wrapper_elm).show();

            return false;
        }
        else {
            var emailFieldText = $(emailField_elm).val();

            var regex_email = new RegExp(Kenes.News.Resources.Newsletter.EmailRegex);

            if (!regex_email.test(emailFieldText)) {
                $(validation_label_eml).html(Kenes.News.Resources.Newsletter.EmailWrongInput);
                $(emailField_elm).focus();
                $(error_wrapper_elm).show();

                return false;
            }
        }
        return true;
    }


    // public
    function Init() {

        // in document ready:
        $(function () {
            _startUrl = _spPageContextInfo.webServerRelativeUrl;
            if (_startUrl == "/")
                _startUrl = "";
            // connect the modal clicks to its use
            $(sendBtn_elm).click(Kenes.News.Newsletter.AddMeToNewsletter);
            config_val = $('#config_captcha_hdn').val();
            if ($(captcha_count).val() >= config_val)
                $(captcha_elm).show();
            else
                $(captcha_elm).hide();
            $(validation_label_eml).html('');
            $(error_wrapper_elm).hide();
            $(thanks_div_elm).hide();

        });
    }

    function InitCaptcha(PublicKey) {

        // in document ready:
        $(function () {
            config_val = $('#config_captcha_hdn').val();
            if ($(captcha_count).val() >= config_val) {
                $(captcha_elm).show();
                Recaptcha.create(PublicKey, captcha_elm.replace('#', ''), {
                    tabindex: 0,
                    theme: "clean",
                    custom_theme_widget: "tellAFriend_captcha_widget",
                    //callback: function () { }
                });

            }
            else
                $(captcha_elm).hide();
        });
    }

    // return object with function calls:
    return {
        AddMeToNewsletter: addMeToNewsletter,
        Init: Init,
        InitCaptcha: InitCaptcha

    };
}(jQuery);


///#source 1 1 /Layouts/Kenes.SharePoint/Base/js/kenes-speakersCarousel.js
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\MicrosoftAjax.js" />
/// <reference path="C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\SP.debug.js" />
/// <reference path="jquery-1.8.3.min.js" />
/// <reference path="jquery-1.8.3.intellisense.js" />
/// <reference path="bootstrap.js" />

// declare namespace
var Kenes = Kenes || {};
Kenes.SpeakersCarousel = Kenes.SpeakersCarousel || {};

// when the script loads:
Kenes.SpeakersCarousel = function ($) {

    // private
    function init(numberOfItems) {

        jQuery('#flexiselMain').flexisel({
            visibleItems: numberOfItems,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1
                },
                landscape: {
                    changePoint: 640,
                    visibleItems: 2
                },
                tablet: {
                    changePoint: 768,
                    visibleItems: 3
                }
            }
        });
    }

    // return object with function calls:
    return {
        Init: init
    };
}(jQuery);
