$(document).ready(function () {
    var defaultLang = 'en';
    function getLang() {
        if (document.cookie.indexOf('buy.kk.bLang') != -1) {
            var arrCookie = document.cookie.split(';')
            for (let i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split('=');
                if ('buy.kk.bLang' == arr[0].trim()) {
                    defaultLang = arr[1];
                    languageSelect(defaultLang);
                    break;
                }
            }
        }
    }
    getLang();
    function languageSelect(defaultLang) {
        $("[i18n]").i18n({
            defaultLang: defaultLang,
            filePath: "/public/js/i18n/",
            filePrefix: "i18n_",
            fileSuffix: "",
            forever: true,
            callback: function (res) {

            }
        });
    }
    languageSelect(defaultLang)
    function setLang(name, value, path) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        var paths = ";path=" + path;
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + paths;
    }
    $(".langwrap").click(function (e) {
        e.preventDefault();
        var classes = $(this).attr('class').split(" ").toString();
        var lang = classes.substr(classes.length - 2);
        if (defaultLang != lang && lang.match(/^[a-z]{2}$/)) {
            setLang('buy.kk.bLang', lang, '/')
        }
        getLang();
        return false
    });
})