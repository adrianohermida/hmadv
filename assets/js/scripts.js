function showMenuTopBar() {
    let menu = document.querySelector('.menu-suspenso');
    menu.style.display = "flex";

    document.querySelector("body").addEventListener('click', () => {
        menu.style.display = "none";
    });
}

if ($(window).width() > 991) {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 100) {
            $('.site-header').addClass('sticky-header');
        }
        else {
            $('.site-header').removeClass('sticky-header');
        }
        
    });

}

function showMenuCadastrar() {
    let areaCli = document.querySelector('.menu-suspenso--mobile');
    
    if (areaCli.style.display == "flex") {
        areaCli.style.display = "none";
        
    }else{
        areaCli.style.display = "flex";
    }
}

// Abre e fecha o menu mobile
function menuToggle() {
    let menuArea = document.querySelector(".menu-lateral");
    
    if (menuArea.style.width == "315px") {
        menuArea.style.width = "0px";
        console.log(menuArea.style.width);
    } else {
        menuArea.style.width = "315px";
    }

}
//reajusta o menu ao sair do menu mobile
window.addEventListener('resize', function () {
    var largura = window.innerWidth;

    if (largura >= 992)
        document.querySelector(".menu-lateral").removeAttribute('style');
});

