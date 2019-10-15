// Declares variables
var txtSearch = "";
var idBtn= "gifSrch_";
var arrBotns = [];
var txtQrys = [];
var apiKy = "2duYbYAookqwoNvzsKeis23nvpvStsJV";
var limit = 10;
var qrySearch = "";

$(document).ready(function(){
    $("#gifBtn").on("click", function(){
        event.preventDefault();
        addNewButton($("#mySearch").val().trim());
        $("#mySearch").val("");
    })
});

// Creates a new button
function addNewButton(qry){
    if(txtQrys.indexOf(qry) === -1) {
		txtQrys.push(qry);
		$("#buttons").empty();
		qryTxtBtns();
	}
}

// According to button push will call API w/text to search
function qryTxtBtns() {
    for(var i = 0; i < txtQrys.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("btn");
        newButton.addClass("qryButton");
        newButton.text(txtQrys[i]);
        $("#buttons").append(newButton);
    }
        $(".qryButton").unbind("click");
    
        $(".qryButton").on("click", function(){
            $(".gif-image").unbind("click");
            $("#gifsHere").empty();
            $("#gifsHere").removeClass("dotted-border");
            getsGifs($(this).text());
        });    
}

// This function calls API to retrieve gifs related with text typed
function getsGifs(qryTxt){
	$.ajax({
		url: "https://api.giphy.com/v1/gifs/search?q=" + qryTxt + 
		"&api_key=" + apiKy + "&limit=10",
		method: "GET"
	}).then(function(response){
		response.data.forEach(function(element){
		newDiv = $("<div>");
		newDiv.addClass("gifDiv");
        var newImage = $("<img src = '" + element.images.fixed_height_still.url + "' style='height:250px; width:250px'" + "/>");
		newImage.addClass("gif-image");
        newImage.attr("state", "still");
        newImage.attr("class", "");
		newImage.attr("still-data", element.images.fixed_height_still.url);
		newImage.attr("animated-data", element.images.fixed_height.url);
		newDiv.append(newImage);
		$("#gifsHere").append(newDiv);
		});
		
		$("#gifsHere").addClass("dotted-border");
		$(".gif-image").unbind("click");
		$(".gif-image").on("click", function(){
			if($(this).attr("state") === "still") {
				$(this).attr("state", "animated");
				$(this).attr("src", $(this).attr("animated-data"));
			}
			else {
				$(this).attr("state", "still");
				$(this).attr("src", $(this).attr("still-data"));
			}
		});
	});
}
