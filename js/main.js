"use strict";

document.addEventListener('DOMContentLoaded', () => {
    console.log('welcome to my console');

    // *
    // * формы и все что с ними связано
    // *

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

    // nickname
    let nicknameWrapper = document.getElementById('nicknameWrapper'),
        inputNickname = document.getElementById('inputNickname');

    // nickname
    let passwordWrapper = document.getElementById('passwordWrapper'),
        inputPassword = document.getElementById('inputPassword');

    // nickname
    let passwordcheckWrapper = document.getElementById('passwordcheckWrapper'),
        inputPassworCheck = document.getElementById('inputPassworCheck');

    // name
    inputName.addEventListener('focus', () => {
        inputFocused(nameWrapper);
    });

    inputName.addEventListener('blur', () => {
        inputBlured(nameWrapper);
    });

    // surname
    inputSurname.addEventListener('focus', () => {
        inputFocused(surnameWrapper);
    });

    inputSurname.addEventListener('blur', () => {
        inputBlured(surnameWrapper);
    });

    // data
    inputDate.addEventListener('focus', () => {
        inputFocused(dateWrapper);
    });

    inputDate.addEventListener('blur', () => {
        inputBlured(dateWrapper);
    });

    // text area for bio
    inputBio.addEventListener('input', () => {
        BioCounter.innerText = inputBio.textLength;
    });

    // mail
    inputMail.addEventListener('focus', () => {
        inputFocused(mailWrapper);
    });

    inputMail.addEventListener('blur', () => {
        inputBlured(mailWrapper);
    });

    // nickname
    inputNickname.addEventListener('focus', () => {
        inputFocused(nicknameWrapper);
    });

    inputNickname.addEventListener('blur', () => {
        inputBlured(nicknameWrapper);
    });

    // password
    inputPassword.addEventListener('focus', () => {
        inputFocused(passwordWrapper);
    });

    inputPassword.addEventListener('blur', () => {
        inputBlured(passwordWrapper);
    });

    // password check
    inputPassworCheck.addEventListener('focus', () => {
        inputFocused(passwordcheckWrapper);
    });

    inputPassworCheck.addEventListener('blur', () => {
        inputBlured(passwordcheckWrapper);
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
    inputFocused(mailWrapper);
    inputFocused(nicknameWrapper);
    inputFocused(passwordWrapper);

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

    // *
    // * account avatar
    // *
    let avatarImage = document.getElementById('avatarImage'),
        avatarWrapper = document.getElementById('avatarWrapper'),
        inputAvatarUpload = document.getElementById('inputAvatarUpload'),
        avatarChangeWrapper = document.getElementById('avatarChangeWrapper'),
        inputAvatarChange = document.getElementById('inputAvatarChange');

    function uploadAvatarImage(target) {
        const file = target.files[0];

        // если файл был выбран
        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', function (e) {

                avatarImage.removeAttribute('src');

                // удаление класса --unset у фотографии и загрузка аватара
                avatarWrapper.classList.remove('profile__avatar-wrapper--unset');
                avatarImage.setAttribute('src', this.result);

                // удаление класса --disabled у кнопки поменять аватар
                avatarChangeWrapper.classList.remove('profile__avatar-button--disabled');
            });

            reader.readAsDataURL(file);
        }
    }

    inputAvatarUpload.addEventListener('change', function (e) {
        uploadAvatarImage(inputAvatarUpload);
    });

    inputAvatarChange.addEventListener('change', function (e) {
        uploadAvatarImage(inputAvatarChange);
    });

    // *
    // * gallery
    // *
    let galleryInputWrapper = document.getElementById('galleryInputWrapper'),
        inputGallery = document.getElementById('inputGallery'),
        galleryCounter = document.getElementById('galleryCounter'),
        imageCounter;

    function removingGalleryImages() {
        let galleryDelete = document.querySelectorAll('.portfolio__gallery-delete');

        galleryDelete.forEach(element => {
            element.addEventListener('click', function (e) {
                this.parentNode.remove();
                countOfGalleryImages();
            });
        });

    };

    function countOfGalleryImages() {
        let galleryItems = document.querySelectorAll(".portfolio__gallery-item").length - 1;
        console.log('galleryItems: ', galleryItems);

        if (galleryItems <= 10) {

            galleryCounter.innerText = galleryItems;
            galleryInputWrapper.classList.remove('portfolio__gallery-item--disabled');
            galleryCounter.style.color = '#8b8b8b';

            if (galleryItems == 10) {

                galleryCounter.style.color = 'red';
                galleryInputWrapper.classList.add('portfolio__gallery-item--disabled');

            }
        } else {
            galleryCounter.style.color = '#8b8b8b';
        }
    }

    function uploadGalleryImages(target) {
        const file = target.files[0];

        // если файл был выбран
        if (file) {
            const reader = new FileReader();
            console.log(galleryWrapper);

            reader.addEventListener('load', function (e) {

                // создание картинки и добавление ее в поток
                galleryInputWrapper.insertAdjacentHTML('afterend', `<div class="portfolio__gallery-item"> <img src="${this.result}" alt="image"> <span class="portfolio__gallery-delete"></span> </div>`);

                // удаление изображений если нужно
                removingGalleryImages();
                countOfGalleryImages();
            });

            reader.readAsDataURL(file);
        }
    }

    // получение и загрузка картинок в галерее
    inputGallery.addEventListener('change', function (e) {
        uploadGalleryImages(inputGallery);
    });

});