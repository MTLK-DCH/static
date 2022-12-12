loginURL="https://prod-05.uksouth.logic.azure.com/workflows/9fc985a0edce49dc8be516821a6b4c37/triggers/manual/paths/invoke/api/v1_0/adminlogin?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=90u4VZFmABu4lzhBEzjTd70epYM3CGrQJa9ccEhgFOw"
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
                window.location.replace("upload.html");
            }
        })
    }) 
})