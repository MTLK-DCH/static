RequestsURL="https://prod-01.uksouth.logic.azure.com/workflows/bbdb5f7d8d264bc3a77abefb491b1bec/triggers/manual/paths/invoke/api/v1_0/requests?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=We-6YwgW_ZGQfsYoFSAQ7pb-gO-3d7_phzplX9L_Nz8"
SubmitURL="https://prod-13.uksouth.logic.azure.com/workflows/b0aa79dc929b4d68bc30b513acd97af5/triggers/manual/paths/invoke/api/v1_0/uploadmovie?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rvC2FGHsRqHUgtPt3tyMgweXJjgj5bL1kXe_tFLu-hU"
loadMovies="https://prod-08.uksouth.logic.azure.com/workflows/e9c002bdc9de4de68685b781b17a2a6c/triggers/manual/paths/invoke/api/v1_0/loadmovies?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=QNUDmnloGuxodWIlwZlPnYKVw6gRp2sNzkkiZeAQil0"
BlobURL = "https://mtlkmovies.blob.core.windows.net"

$(document).ready(function(){

    $("#sv").click(function(){
        data = new FormData();
        data.append("name", $("#name").val());
        data.append("director", $("#director").val());
        data.append("writer", $("#writer").val());
        data.append("genre", $("#genre").val());
        data.append("age_rating", $("#age_rating").val());
        data.append('file', $("#file")[0].files[0]);
        $.ajax({
            url: SubmitURL,
            data: data,
            cache: false,
            enctype: 'multipart/form-data',
            contentType: false,
            processData: false,
            type: 'POST',
            seccess: function(){
                alert("sucess!");
            }
        });
    })

    

    $.get(loadMovies, function(data){
        console.log(data.value)
        var table = "<thead>"+ 
        "<tr>"+
          "<th scope=\"col\">#</th>"+
          "<th scope=\"col\">name</th>"+
          "<th scope=\"col\">director</th>"+
          "<th scope=\"col\">writer</th>"+
          "<th scope=\"col\">genre</th>"+
          "<th scope=\"col\">age_rating</th>"+
          "<th scope=\"col\">URL</th>"+
        "</tr>"+
      "</thead>"+
      "<tbody>";
        for (var key in data.value) {
            console.log(data.value[key]);
            table += ("<tr><td>" +
                data.value[key].id + 
                "</td><td>" +
                data.value[key].name + 
                "</td><td>" +
                data.value[key].director + 
                "</td><td>" +
                data.value[key].writer + 
                "</td><td>" + 
                data.value[key].genre + 
                "</td><td>" +
                data.value[key].age_rating + 
                "</td><td>" +
                "<a href=\""+ BlobURL + data.value[key].url + "\">" + BlobURL + data.value[key].url + "</a>" + 
                "</td></tr>"
                )
        };
        $("#tb").append(table);
    });

    

})