$(function(){


    $('.product-item img').on("mouseover",function () {
        var $src = $(this).attr('data-hover');
        $(this).fadeTo(200,0.30, function() {
            $(this).attr("src",$src);
        }).fadeTo(200,1);

    });

    $('.product-item img').on("mouseout",function () {
        var $src = $(this).attr('data-src');
        $(this).fadeTo(100,0.70, function() {
            $(this).attr("src",$src);
        }).fadeTo(100,1);

    });

    $(".mini-cart-container").on("click", function(event) {
        event.stopPropagation();
    });
    $('#shopping-hover').on("click",function () {
        $("#mini-cart").toggle("fade",200);
    });
    $(".close-mini-cart").on("click", function(event) {
        event.stopPropagation();
        $("#mini-cart").toggle("fade",200);
    });

    $('#mini-cart').on("click",function (event) {
        if (event.target === this) {
            $(this).toggle("fade", 200);
        }
    });


    $("#toggle-mobile-menu").click(function(){
        $(".menu").toggle();
    })
    $(".menu-item.has-children").click(function(){
        $(this).find(".submenu").toggle();
    })
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
})