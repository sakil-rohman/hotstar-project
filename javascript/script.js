
const changeMode = () => {
    let mybody = document.body;
    let mynav = document.getElementsByClassName('navcolor')[0];
    let navlink = document.getElementsByClassName('nav-link')[0];
    let navlink2 = document.getElementsByClassName('nav-link')[1];
    let navlink3 = document.getElementsByClassName('nav-link')[2];
    let navlink4 = document.getElementsByClassName('nav-link')[3];
    let navlink5 = document.getElementsByClassName('nav-link')[4];
    let navlink6 = document.getElementsByClassName('nav-link')[5];
    let navlink7 = document.getElementsByClassName('nav-link')[5];
    let navlink8 = document.getElementsByClassName('nav-link')[6];
    let navlink9 = document.getElementsByClassName('nav-link')[7];
    let navcolor = document.getElementsByClassName('about-footer')[0];
    let navcolor2 = document.getElementsByClassName('navbar')[0];
    // let footercolor= document.getElementsByTagName('footer')[0];
    mybody.classList.toggle('body2');
    mynav.classList.toggle('navcolor2');
    navlink.classList.toggle('nav-link2');
    navlink2.classList.toggle('nav-link2');
    navlink3.classList.toggle('nav-link2');
    navlink4.classList.toggle('nav-link2');
    navlink5.classList.toggle('nav-link2');
    navlink6.classList.toggle('nav-link2');
    navlink7.classList.toggle('nav-link2');
    navlink8.classList.toggle('nav-link2');
    navlink9.classList.toggle('nav-link2');
    navcolor.classList.toggle('about-footer2');
    navcolor2.classList.toggle('about-footer2');
    // mybody.classList.toggle('mydark2')
    
}