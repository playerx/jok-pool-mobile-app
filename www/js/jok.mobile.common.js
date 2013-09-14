
function onLoad() {
    document.addEventListener('deviceready', onDeviceReady, false);
}
            
function onDeviceReady() {
                
    $('#Buttons').show();
                
    try {
        FB.init({ appId: "appid", nativeInterface: CDV.FB, useCachedDialogs: false });
    } catch (e) {
        alert(e);
    }
}


function navigate(url) {

    if (!url) return;
    
    // ჩატვირთვის ანიმაციის გამოჩენა
    $('#MobileSiteContentLoadingBox').show();
    
    // ყველა შემდგომ დამატებული სტილის წაშლა
    $('head link:not([href^="css/"])').remove();
    
    // თუ შიდა ნავიგაციაა, მივუწეროთ თავში სრული მისამართი
    if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
        url = ROOT_LOCATION + url;
    }
    
    
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            "jok": "ge"
        },
        success: function (data) {
            
            $('#MobileSiteContentContainer').html(data);
            $('#MobileSiteContentLoadingBox').hide('fast');
        },
        error: function (err) {
            $('#MobileSiteContentLoadingBox').hide();
            
            // navigator.notification.confirm(
            //     'Can''t load data, please check internet connection. Try again?', // message
            //      onConfirm,             // callback to invoke with index of button pressed
            //     'Oops',                 // title
            //     'No,Yes'                // buttonLabels
            // );
        }
    });
    
    // function onConfirm(buttonIndex) {
    //     if (buttonIndex != 2) return;
        
    //     navigate(url);
    // }
}

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
        document.createTextNode(
            "@@-ms-viewport{width:auto!important}"
        )
    );
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
}

$(function () {
    FastClick.attach(document.body);
});

$(document).on(clickEvent, 'a', function () {
    var url = $(this).attr('href');

    console.log('navigating: ' + url)
    
    if (url.indexOf('/') == 0) {
        navigate(url);

        return false;
    }
});

$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
            this.url = ROOT_LOCATION + this.url;
        }
        
        console.log(this.url);
    },
    error: function (xhr, status, error) {
        console.error("An AJAX error occured: " + status + "\nError: " + error + "\nUrl: " + this.url);
    }
});
    





