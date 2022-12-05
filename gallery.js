$(document).ready(function(){
    for(var i = 0; i<50; i++){
        $.getJSON("data/" + i.toString() + ".json", function(data){
            $("#images").append('<img src="https://s7nspfp.mypinata.cloud/ipfs/' + data.image + '">');
        }
    )}
    $("images").click(function(evt) {
		evt.preventDefault();
        alert("test");
		
	});
    
});
