const btn =document.querySelector('button')



$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();


    // typing text animation script
    var typed = new Typed(".typing", {
    strings: ["UI Designer", "Developer","Front-End Develper", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    }
    );

    const inputs = document.querySelectorAll(".input");

        function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
        }

        function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
        }

        inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
        });




});


// Stmjs

const inputs =document.querySelector('form')
btn.addEventListener('click', () => {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "a8c0d29c94ea58",
        Password : "9e427d80466495",
        To : 'them@website.com',
        From : inputs.elements["email"].value,
        Subject : "This is the subject",
        Body : inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value
    }).then(msg=>alert("the email was successfull sent "));
})