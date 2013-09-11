
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
    
    console.log('1')
    //navigator.splashscreen.show();

    $.ajax({
        url: url,
        type: "GET",
        headers: {
            "jok": "ge"
        },
        success: function (data) {
            console.log('2')
            $('#MobileSiteContentContainer').html(data);
            //navigator.splashscreen.hide();
        },
        error: function (err) {
            console.log('3')
            alert(err);
            //navigator.splashscreen.hide();
        }
    });
}


$(document).on(clickEvent, 'a', function () {
    var url = $(this).attr('href');

    if (url.indexOf('/') == 0) {
        navigate(url);

        return false;
    }
});
