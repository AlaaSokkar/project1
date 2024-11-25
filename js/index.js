let aboutOffset = $("#about").offset().top;
$(window).scroll(()=>{
    let windowScroll = $(window).scrollTop();
    if(windowScroll > aboutOffset -50)
    {
        $("#main-nav").css("backgroundColor", "rgba(0 , 0 , 0 ,0.6)");
        $("#btnUp").fadeIn(500);
        
    }
    else
        {
            $("#main-nav").css("backgroundColor", "transparent"); 
            $("#btnUp").fadeOut(500);
        }
})
$("#btnUp").click(()=>
{
    $("html,body").animate({scrollTop: '0'} , 2000)
})
$("a").click(function(e){
let linkHref=$(e.target).attr("href");//htragaa #home #services ....
let sectionOffSet=$(linkHref).offset().top; //bod el section an eltop
$("html,body").animate({scrollTop:sectionOffSet},2000)
});
