var txtSearch = "";
var idBtn= "gifSrch_";
var arrBotns = [];
var cont = 0;
var apiKy = "2duYbYAookqwoNvzsKeis23nvpvStsJV";
var limite = 10;
var qrySearch = "";


$('#buttons').on("click", function() {
    console.log("ahora esto " + $(this).attr("outerText"));
});


$('#gifBtn').on("click", function() {
    // if(txtSearch = $("#mySearch").val().trim()){
    //     cont++;
    //     var btn = $("<button>");
    //     btn.attr("type", "button");
    //     btn.attr("class", "btn btn-primary btn-lg");
    //     btn.attr("id", idBtn + cont);
    //     // btn.attr("value", txtSearch);
    //     $(btn).html(txtSearch);
    //     $('#buttons').prepend(btn);
    //     arrBotns.push(txtSearch);
    //     // console.log("<--" + arrBotns);
    //     $("#mySearch").empty();
    // };
    getGiphy();
});

function getGiphy(){

//javascript, jQuery
qrySearch = $("#mySearch").val().trim();

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + qrySearch + "&api_key=" + apiKy + "&limit" + limite);
console.log("your request was: " + xhr);

xhr.done(function(response) { console.log("Success got answer: ", response); });
}