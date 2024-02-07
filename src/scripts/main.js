(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
        }
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Latest-news-carousel
    $(".latest-news-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // What's New carousel
    $(".whats-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });



    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const closeButton = document.getElementById('closeButton');
    const sideBlock = document.getElementById('sideBlock');

    toggleButton?.addEventListener('click', function () {
        // Toggle la classe 'active' sur le bloc latéral
        sideBlock.classList.toggle('active');

        // Si le bloc latéral est actif, déplace-le vers la droite, sinon, ramène-le à sa position initiale
        if (sideBlock.classList.contains('active')) {
            sideBlock.style.right = '0';
        } else {
            sideBlock.style.right = "-300px";
        }
    });
    closeButton.addEventListener('click', function() {
        sideBlock.style.right = "-300px";
        sideBlock.classList.remove('active');
    });
});

function checkIfElementExists(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        return true; // L'élément existe
    } else {
        return false; // L'élément n'existe pas
    }
}

// Utilisation de la fonction pour vérifier si un élément avec l'ID "monElement" existe
var idExist = checkIfElementExists("category__Block");

// Vérifie si l'élément existe
if (idExist) {
    const Blog_Link = document.getElementById("blog__Link");
    Blog_Link.classList.add("active");
} else {
    console.log("");
}
