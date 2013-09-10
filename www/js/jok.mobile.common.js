
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

    $.ajax({
        url: url,
        type: "GET",
        headers: {
            "jok": "ge"
        },
        success: function (data) {
            $('#MobileSiteContentContainer').html(data);
        },
        error: function (err) {
            alert(err);
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
