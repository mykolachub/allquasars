"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');

    let profileAccount = document.getElementById('profileAccount'),
        profileAccountIcon = document.getElementById('profileAccountIcon');

    profileAccount.addEventListener('click', ()=>{
        profileAccountIcon.classList.toggle("profile__nav-account-btn--clicked");
    });

    // name & surname
    let nameWrapper = document.getElementById('nameWrapper'),
        inputName = document.getElementById('inputName'),
        surnameWrapper = document.getElementById('surnameWrapper'),
        inputSurname = document.getElementById('inputSurname');

    // date
    let dateWrapper = document.getElementById('dateWrapper'),
        inputDate = document.getElementById('inputDate');

    // mail
    let typeWrapper = document.getElementById('typeWrapper');

    // textarea
    let inputBio = document.getElementById('inputBio'),
        BioCounter = document.getElementById("BioCounter");

    // mail
    let mailWrapper = document.getElementById('mailWrapper'),
        inputMail = document.getElementById('inputMail');

    //
    inputName.addEventListener('focus', ()=>{
        inputFocused(nameWrapper);
    });

    inputName.addEventListener('blur', ()=>{
        inputBlured(nameWrapper);
    });

    //
    inputSurname.addEventListener('focus', ()=>{
        inputFocused(surnameWrapper);
    });

    inputSurname.addEventListener('blur', ()=>{
        inputBlured(surnameWrapper);
    });

    //
    inputDate.addEventListener('focus', ()=>{
        inputFocused(dateWrapper);
    });

    inputDate.addEventListener('blur', ()=>{
        inputBlured(dateWrapper);
    });

    inputBio.addEventListener('input', ()=>{
        BioCounter.innerText = inputBio.textLength;
    });

    // вот этот бред нужен для инпутов с value
    // иначе подсказка наезжает на текст
    // попробуй убрать то что ниже и поймешь о чем я;
    // я "включил" сразу те инпуты что были в регистрации
    // новые будет как и раньше. 
    inputFocused(nameWrapper);
    inputFocused(surnameWrapper);
    inputFocused(dateWrapper);
    inputFocused(typeWrapper);

    // main functions
    function inputFocused(e) {
        if (!e.classList.contains('form__clue--clicked')) {
            e.classList.add('form__clue--clicked');
            console.log('focused');
        }
    };

    function inputBlured(e) {
        if (e.classList.contains('form__clue--clicked') && e.firstElementChild.value == '') {
            e.classList.remove('form__clue--clicked'); 
            console.log('blured');
        }
        //console.log(e.firstElementChild.value);
    };
});