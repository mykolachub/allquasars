"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    console.log('welcome to my console');

    let profileAccount = document.getElementById('profileAccount'),
        profileAccountIcon = document.getElementById('profileAccountIcon');

    profileAccount.addEventListener('click', ()=>{
        profileAccountIcon.classList.toggle("profile__nav-account-btn--clicked");
    });

});