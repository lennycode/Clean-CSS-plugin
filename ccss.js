//Licence: Use as you wish at your own risk!
(function ($) {
    $.fn.cCSS = function (css) {
        return this.each(function () {
            var css_obj = {};
            var tmx = "";
            var ocss = css.split(";");

            $.each(ocss, function (index, elem) {
                tmx = elem.trim().split(':');
                if (tmx[0].length > 0) css_obj[tmx[0]] = tmx[1].trim();

            });
            $(this).css(css_obj);
        });
    };

})($);
