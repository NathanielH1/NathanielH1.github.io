$(document).ready(function(){

});

var loadJson = function() {
    for(var i = 0; i<100; i++){
        s.get("data/" + i.toString() + ".json", function(data){
            var jsonObj = JSON.parse(data);
            var attributes = jsonObj.attributes;
            var htmlString = "<ul>";
            for(var j = 0; j < attributes.length; j++){
                htmlString += "<li id='"+ attributes[j].trait_type + "'>" + attributes[j].trait_type+"<ul id='"+ attributes[j].trait_type>"'></ul></li>"
            }
            htmlString += "</ul>";
            $("#leftbox").html(htmlString);
        });
    }
    for(var i = 0; i<100; i++){
        s.get("data/" + i.toString() + ".json", function(data){
            var jsonObj = JSON.parse(data);
            var attributes = jsonObj.attributes;
            for(var j = 0; j < attributes.length; j++){
                var oldhtml = $("#".attrivutes[j].trait_type).html();
                $("#".attributes[j].trait_type).html(oldhtml + "<li>"+attributes[j])
            }
           
    }

    }
}