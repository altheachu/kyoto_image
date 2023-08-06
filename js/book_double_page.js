function loadApp() {
        
    var flipbook = $('.flipbook');

    console.log('flipbook', flipbook);

     // Check if the CSS was already loaded
    
    if (flipbook.width()==0 || flipbook.height()==0) {
        setTimeout(loadApp, 10);
        return;
    }

    $('.flipbook .double').scissor();

    // Create the flipbook

    $('.flipbook').turn({
            // Elevation

            elevation: 50,
            
            // Enable gradients

            gradients: true,
            
            // Auto center this flipbook

            autoCenter: true,

    });

    // show reminder info
    $("#book").hover(function(){
        $("#description").show();
        $("#description_ch").show();
    },function(){
        $("#description").hide();
        $("#description_ch").hide();
    });

    // If hovering over corner change cursor to Grab
    $("#book").bind("start", function(event, pageObject, corner) {
        if (corner=="tr" || corner=="br" || corner=="tl" || corner=="bl" || corner=="l" || corner=="r") {
            $('#book').removeClass("grabbing");
            $('#book').removeClass("notgrab");
            $('#book').addClass("grab");
            $("#description").hide();
            $("#description_ch").hide();
        }else{
            $('#book').removeClass("grabbing");
            $('#book').removeClass("grab");
            $('#book').addClass("notgrab");   
        }
    });
    // If mouse down while in Grab state, change to Grabbing
    $("#book").mousedown(function(){
        if($('#book').hasClass("grab")){
            $('#book').removeClass("grab");
            $('#book').removeClass("notgrab");
            $('#book').addClass("grabbing");     
        }
    })
    // If mouse up while over book kill Grab
    $("#book").mouseup(function(){
        $('#book').removeClass("grabbing");
        $('#book').removeClass("grab");
        $('#book').addClass("notgrab");      
    })
    
    // If transition of book ends, kill Grab
    $("#book").bind("end", function(event, pageObject, turned){
        $('#book').removeClass("grabbing");
        $('#book').removeClass("grab");
        $('#book').addClass("notgrab"); 
    });

    $("#flipbook_mobile").turn({
        height: 500,
        autoCenter: true
      });

    $("#flipbook_mobile").turn("display","single");

    // If hovering over corner change cursor to Grab
    $("#flipbook_mobile").bind("start", function(event, pageObject, corner) {
        if (corner=="tr" || corner=="br" || corner=="tl" || corner=="bl" || corner=="l" || corner=="r") {
            $('#flipbook_mobile').removeClass("grabbing");
            $('#flipbook_mobile').removeClass("notgrab");
            $('#flipbook_mobile').addClass("grab");
        }else{
            $('#flipbook_mobile').removeClass("grabbing");
            $('#flipbook_mobile').removeClass("grab");
            $('#flipbook_mobile').addClass("notgrab");   
        }
    });
    // If mouse down while in Grab state, change to Grabbing
    $("#flipbook_mobile").mousedown(function(){
        if($('#flipbook_mobile').hasClass("grab")){
            $('#flipbook_mobile').removeClass("grab");
            $('#flipbook_mobile').removeClass("notgrab");
            $('#flipbook_mobile').addClass("grabbing");     
        }
    })
    // If mouse up while over book kill Grab
    $("#flipbook_mobile").mouseup(function(){
        $('#flipbook_mobile').removeClass("grabbing");
        $('#flipbook_mobile').removeClass("grab");
        $('#flipbook_mobile').addClass("notgrab");      
    })
    
    // If transition of book ends, kill Grab
    $("#flipbook_mobile").bind("end", function(event, pageObject, turned){
        $('#flipbook_mobile').removeClass("grabbing");
        $('#flipbook_mobile').removeClass("grab");
        $('#flipbook_mobile').addClass("notgrab"); 
    });

}

// Load the HTML4 version if there's not CSS transform

yepnope({
    test : Modernizr.csstransforms,
    yep: ['../../js/turnjs4/lib/turn.min.js'],
    nope: ['../../js/turnjs4/turn.html4.min.js'],
    both: ['../../js/turnjs4/lib/scissor.min.js', '../../css/turnjs4/double-page/double-page.css'],
    complete: loadApp
});