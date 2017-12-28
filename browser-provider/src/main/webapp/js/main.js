
// Fix menus
var $j = jQuery;

$j(function () {
    BindTopNav();
    BindBodySpans();
});
/*top nav*/
function BindTopNav() {
    var sn = $j('.s4-tn').eq(0);
    if (sn.length > 0)
        sn.addClass('nav').removeClass('s4-tn');
    var u = $j('#topnavbar ul.root');
    if (u.length > 0) {
        u.find('a.dynamic-children').each(function () {
            //if hover events, then try
            var l = $j(this).parent('li');
            var s = $j(this).children('span').eq(0);
            l.hover(
				function () { HoverTopNav($j(this)); },
				function () { HoverTopNav($j(this)); }
			);
            //trap link clicked
            $j(this).bind('click', function (e) {
                var w = $j(this).outerWidth(true);
                var s = $j(this).children('span').eq(0);
                var rs = parseInt($j(this).css("padding-right")) + parseInt($j(this).css("margin-right")) + parseInt(s.css("padding-right")) + parseInt(s.css("margin-right"));
                var x = e.pageX - $j(this).offset().left;
                if (x > (w - rs))
                    DropTopNav($j(this));
                else
                    return true;
                return false;
            });
            //need to trap span too for some browsers
            s.bind('click', function (e) {
                var w = $j(this).outerWidth(true);
                var rs = parseInt($j(this).css("padding-right")) + parseInt($j(this).css("margin-right"));
                var x = e.pageX - $j(this).offset().left;
                if (x > (w - rs))
                    DropTopNav($j(this).parent('a').eq(0));
                else
                    window.location.href = $j(this).parent('a').eq(0).attr('href');
                return false;
            });
        });
    }
}
function HoverTopNav(l) {
    if (l.length > 0) {
        var m = $j('.navbar .btn-navbar');
        if (m.length > 0) {
            if (m.css('display') != 'block')
                DropTopNav(l.children('a.dynamic-children').eq(0));
        }
    }
}
function DropTopNav(l) {
    if (l.length > 0) {
        var u = l.siblings('ul').eq(0);
        if (u.length > 0) {
            if (u.css('display') != 'block') {
                u.css('display', 'block');
                l.addClass('selected');
            }
            else {
                u.css('display', 'none');
                l.removeClass('selected');
            }
        }
    }
}
/*end top nav*/

/*body spans*/
/*used to hide left nav bar if empty, or to ensure that primary content span set to span12 if not left nav*/
function BindBodySpans() {
    var bHideLeftNav = false;
    if (($j('#sideNavBox').length > 0) && ($j('#mainbody').length > 0)) {
        if ($j('#sideNavBox').css('display') == 'none') {
            bHideLeftNav = true;
        }
        if (!bHideLeftNav) {
            if ($j('#sideNavBox .ms-core-navigation').length > 0) {
                if ($j.trim($j('#sideNavBox .ms-core-navigation').html()).length < 10)
                    bHideLeftNav = true;
            }
        }
    }
    if (bHideLeftNav) {
        $j('#mainbody').removeClass('span9').addClass('span12').css({ 'margin-left': '0px' });
        $j('#sideNavBox').css({ 'display': 'none' });
    }
}
/*end body spans*/