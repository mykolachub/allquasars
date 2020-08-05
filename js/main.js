"use strict";

document.addEventListener('DOMContentLoaded', () => {
    console.log('welcome to my console');

    let profileAccount = document.getElementById('profileAccount'),
        profileAccountIcon = document.getElementById('profileAccountIcon');

    profileAccount.addEventListener('click', () => {
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
    inputName.addEventListener('focus', () => {
        inputFocused(nameWrapper);
    });

    inputName.addEventListener('blur', () => {
        inputBlured(nameWrapper);
    });

    //
    inputSurname.addEventListener('focus', () => {
        inputFocused(surnameWrapper);
    });

    inputSurname.addEventListener('blur', () => {
        inputBlured(surnameWrapper);
    });

    //
    inputDate.addEventListener('focus', () => {
        inputFocused(dateWrapper);
    });

    inputDate.addEventListener('blur', () => {
        inputBlured(dateWrapper);
    });

    inputBio.addEventListener('input', () => {
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

    // account avatar
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

    // gallery
    let galleryInputWrapper = document.getElementById('galleryInputWrapper'),
        inputGallery = document.getElementById('inputGallery');

    function removingGalleryImages() {
        let galleryDelete = document.querySelectorAll('.portfolio__gallery-delete');

        galleryDelete.forEach(element => {
            element.addEventListener('click', function (e) {
                this.parentNode.remove();
            });
        });
    };

    function uploadGalleryImages(target) {
        const file = target.files[0];

        // если файл был выбран
        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', function (e) {

                // создание картинки и добавление ее в поток
                galleryInputWrapper.insertAdjacentHTML('afterend', `<div class="portfolio__gallery-item"> <img src="${this.result}" alt="image"> <span class="portfolio__gallery-delete"></span> </div>`);

                // удаление изображений если нужно
                removingGalleryImages()
            });

            reader.readAsDataURL(file);
        }
    }

    // получение и загрузка картинок в галерее
    inputGallery.addEventListener('change', function (e) {
        uploadGalleryImages(inputGallery);
    });

});