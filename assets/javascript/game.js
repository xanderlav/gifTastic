var txtSearch = "";
var idBtn= "gifSrch_";
var arrBotns = [];
var cont = 0;


$('#buttons').on("click", function() {
    console.log("ahora esto " + $(this).attr("outerText"));
});


$('#gifBtn').on("click", function() {
    if(txtSearch = $("#mySearch").val().trim()){
        cont++;
        var btn = $("<button>");
        btn.attr("type", "button");
        btn.attr("class", "btn btn-primary btn-lg");
        btn.attr("id", idBtn + cont);
        // btn.attr("value", txtSearch);
        $(btn).html(txtSearch);
        $('#buttons').prepend(btn);
        arrBotns.push(txtSearch);
        // console.log("<--" + arrBotns);
        $("#mySearch").empty();
    };
});

