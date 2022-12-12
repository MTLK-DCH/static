registerURL = "https://prod-11.uksouth.logic.azure.com/workflows/4c1443eb3ce14c3daad8a886d97fa16a/triggers/manual/paths/invoke/api/v1_0/register?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=_-jc-mxt3LDL-ypbMBSvBwcidNG3esH9p12BOBgoPWA"
loginURL="https://prod-15.centralus.logic.azure.com/workflows/15906bebf43c41cc9b3523f0f30d3318/triggers/manual/paths/invoke/api/v1_0/login?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=iiAOjwcpydR0zPuOdjTocZX8L6Mg0eEGmrTbdTZ4g74"

$(document).ready(function(){
    $("#login").click(function(){
        var data = {
            username: $("#username").val()
        };
        data = JSON.stringify(data)
        $.post({
            url: loginURL,
            data:data,
            contentType:  'application/json'
        }, function(response){
            password = response.ResultSets.Table1[0].password
            if ($("#password").val() == password){
                window.location.replace("index.html");
            }
        })
    })

    $("#su").click(function(){
        data = {
            username: $("#movify_user_login").val(),
            password:$("#movify_password").val(),
            email: $("#movify_user_email").val(),
        };
        data = JSON.stringify(data)


        $.ajax({
            type: "post",
            url: registerURL,
            data:data,
            contentType:  'application/json',
            success: function(response){
                window.location.replace("login-register.html");
            }
        })
    })

    
})