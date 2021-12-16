

$("#accordion button").click(function() {
    $("#accordion p").stop().slideUp()
    $(this).next().stop().slideToggle()
})


$("#tabMenu button").click(function(){
    const ind = ($(this).index())
    $("#tabMenu p").stop().slideUp()
    $("#tabMenu p").eq(ind).stop().slideToggle()
})
