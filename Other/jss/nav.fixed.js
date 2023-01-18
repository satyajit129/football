
document.addEventListener("DOMContentLoaded", function(){

    window.addEventListener('scroll', function() {

        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            document.getElementById("navbar_top").style.backgroundColor = "rgb(3,82,187,0.9)";
            
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
            document.getElementById("navbar_top").style.backgroundColor = "rgb(231,228,228,0)";
        }
    });
});
