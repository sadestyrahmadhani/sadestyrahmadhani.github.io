$(function(){
    navbarFixed()
    navbarActive()
    ballAnimation()
    
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

function ballAnimation() {
    var canvas = document.getElementById('ballsAnimation')
    canvas.width = document.getElementById('education').offsetWidth - 5
    canvas.height = document.getElementById('education').offsetHeight
    var ctx = canvas.getContext('2d')

    var balls = [
        new balls(100, 200, 4, .5, 50, 'rgb(250, 200, 60)'),
        new balls(300, 300, 1, 2, 70, 'rgb(50, 200, 160)'),
        new balls(200, 100, 3, 1, 90, 'rgb(80, 100, 200)'),
        new balls(100, 200, -5, 2, 30, 'rgb(110, 200, 210)'),
        new balls(100, 200, 1, -5, 50, 'rgb(50, 200, 160)'),
        new balls(300, 300, 2, 3, 70, 'rgb(250, 90, 60)'),
        new balls(200, 100, 3, 1, 90, 'rgb(80, 100, 200)'),
        new balls(100, 200, -1, -2, 30, 'rgb(215, 110, 50)'),
    ]

    function draw() {
        ctx.save()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = .5
    
        for(ball of balls) {
            ball.animasi()
        }
    
        ctx.restore()
    }
    
    setInterval(draw, 10)
    
    function balls(x, y, dx, dy, r, color)
    {
        this.animasi = function() {
            ctx.beginPath()
            ctx.fillStyle = color
            ctx.arc(x, y, r, 0, Math.PI * 2, true)
            ctx.fill()
            ctx.closePath()
    
            x += dx
            y += dy
    
            if(x + r > canvas.width){
                dx--
            }
    
            if(x < r){
                dx++
            }
    
            if(y + r > canvas.height){
                dy--
            }
    
            if(y < r){
                dy++
            }
        }
    }
}

$(window).on('load', function(){
    $('.loader .hide1').addClass('hideDown')
    $('.loader .hide2').addClass('hideUp')
    $('.loader').addClass('hide')
})