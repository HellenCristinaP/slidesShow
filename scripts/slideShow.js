$(function(){
    $("#op1").click(function(){
        $("#img1").fadeIn('slow');
        $("#img2").hide();
        $("#img3").hide();
        $("#img4").hide();
    });

     $("#op2").click(function(){
        $("#img2").removeClass("hidden")
        $("#img2").fadeIn('slow');
        $("#img1").hide();
        $("#img3").hide();
        $("#img4").hide();
    });

        $("#op3").click(function(){
        $("#img3").removeClass("hidden")
        $("#img3").fadeIn('slow');
        $("#img2").hide();
        $("#img1").hide();
        $("#img4").hide();
        
    });
    
        $("#op4").click(function(){
        $("#img4").removeClass("hidden")
        $("#img4").fadeIn('slow');
        $("#img2").hide();
        $("#img1").hide();
        $("#img3").hide();
        
    });
})