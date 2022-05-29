$(function(){
    navbarFixed()
    navbarActive()
    
    $(window).scroll(function(){
        navbarFixed()
        navbarActive()
    })
    
    $('.navbar a.nav-link').on('click', function(e){
        e.preventDefault()
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 130
        })
    })
})

function navbarFixed() {
    if($(this).scrollTop() > 100){
        $('.navbar').addClass('navbar-fixed shadow')
    } else {
        $('.navbar').removeClass('navbar-fixed shadow')
    }
}

function navbarActive() {
    if($(this).scrollTop() > $('#about').offset().top - 130){
        $('.navbar').find('.active').removeClass('active')
        $('a[href="#about"]').parent().addClass('active')
    }

    if($(this).scrollTop() > $('#education').offset().top - 130){
        $('.navbar').find('.active').removeClass('active')
        $('a[href="#education"]').parent().addClass('active')
    }
    
    if($(this).scrollTop() > $('#skill').offset().top - 130){
        $('.navbar').find('.active').removeClass('active')
        $('a[href="#skill"]').parent().addClass('active')
    }

    if($(this).scrollTop() > $('#project').offset().top - 130){
        $('.navbar').find('.active').removeClass('active')
        $('a[href="#project"]').parent().addClass('active')
    }

    if($(this).scrollTop() > $('#contact').offset().top - 130){
        $('.navbar').find('.active').removeClass('active')
        $('a[href="#contact"]').parent().addClass('active')
    }

    if($(this).scrollTop() < $('#about').offset().top - 130){
        $('.navbar').find('.active').removeClass('active')
        $('a[href="#home"]').parent().addClass('active')
    }
}

var i = 0, idx = 0;
var text = ["Graphich Designer", "Video Editor"];
var speed = 50;
function typingText(){
    if(idx >= text.length) idx = 0;

    document.getElementById("typingText").innerHTML += text[idx].charAt(i);
    i++;
    
    if(i > text.length + 50){
        document.getElementById("typingText").innerHTML = "";
        i = 0;
        idx++;
    }
   
    setTimeout(typingText, 50);
}
 
 setTimeout(typingText, 200);