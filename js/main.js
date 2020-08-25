"use strict";

document.addEventListener('DOMContentLoaded', () => {
    console.log('welcome to my console');

    // *
    // * формы и все что с ними связано
    // *

    // все инпуты
    let inputItems = document.querySelectorAll('.portfolio__form-input');

    // name
    let inputName = document.getElementById('inputName');
    inputName.addEventListener('focus', inputFocused);
    inputName.addEventListener('blur', inputBlured);

    // surname
    let inputSurname = document.getElementById('inputSurname');
    inputSurname.addEventListener('focus', inputFocused);
    inputSurname.addEventListener('blur', inputBlured);

    // data
    let inputDate = document.getElementById('inputDate');
    inputDate.addEventListener('focus', inputFocused);
    inputDate.addEventListener('blur', inputBlured);

    // text area for bio
    let inputBio = document.getElementById('inputBio'),
        BioCounter = document.getElementById("BioCounter");
    inputBio.addEventListener('input', () => {
        BioCounter.innerText = inputBio.textLength;
    });

    // links
    let inputSoundcloud = document.getElementById('inputSoundcloud'),
        inputMixcloud = document.getElementById('inputMixcloud'),
        inputYoutube = document.getElementById('inputYoutube'),
        inputVimeo = document.getElementById('inputVimeo'),
        inputBeatport = document.getElementById('inputBeatport'),
        inputiTunes = document.getElementById('inputiTunes'),
        inputAppleMusic = document.getElementById('inputAppleMusic'),
        inputSpotify = document.getElementById('inputSpotify');

    inputSoundcloud.addEventListener('focus', inputFocused);
    inputSoundcloud.addEventListener('blur', inputBlured);

    inputMixcloud.addEventListener('focus', inputFocused);
    inputMixcloud.addEventListener('blur', inputBlured);

    inputYoutube.addEventListener('focus', inputFocused);
    inputYoutube.addEventListener('blur', inputBlured);

    inputVimeo.addEventListener('focus', inputFocused);
    inputVimeo.addEventListener('blur', inputBlured);

    inputBeatport.addEventListener('focus', inputFocused);
    inputBeatport.addEventListener('blur', inputBlured);

    inputiTunes.addEventListener('focus', inputFocused);
    inputiTunes.addEventListener('blur', inputBlured);

    inputAppleMusic.addEventListener('focus', inputFocused);
    inputAppleMusic.addEventListener('blur', inputBlured);

    inputSpotify.addEventListener('focus', inputFocused);
    inputSpotify.addEventListener('blur', inputBlured);

    // mail
    let inputMail = document.getElementById('inputMail');
    inputMail.addEventListener('focus', inputFocused);
    inputMail.addEventListener('blur', inputBlured);

    // nickname
    let inputNickname = document.getElementById('inputNickname');
    inputNickname.addEventListener('focus', inputFocused);
    inputNickname.addEventListener('blur', inputBlured);

    // password
    let inputPassword = document.getElementById('inputPassword');
    inputPassword.addEventListener('focus', inputFocused);
    inputPassword.addEventListener('blur', inputBlured);

    // password check
    let inputPassworCheck = document.getElementById('inputPassworCheck');
    inputPassworCheck.addEventListener('focus', inputFocused);
    inputPassworCheck.addEventListener('blur', inputBlured);

    // *
    // * main functions
    // *

    // вот этот бред нужен для инпутов с value
    // иначе подсказка наезжает на текст
    // попробуй убрать то что ниже и поймешь о чем я;
    // я "включил" сразу те инпуты что были в регистрации
    // новые будет как и раньше. 
    function filledInputFoused() {
        inputItems.forEach(element => {
            let eP = element.parentNode;
            if (element.value) {
                eP.classList.add('form__clue--clicked');
            } else{
                eP.classList.remove('form__clue--clicked');
            }
        });   
    }

    // разноцветные инпуты при фокусе и блюре
    function colouredInputs() {

        // херачу масив
        inputItems.forEach(element => {
            let eP = element.parentNode;
            
            // если у инпута есть дата атрибут
            if (eP.hasAttribute('data-placeholder')) {
                let eAttr = eP.getAttribute('data-placeholder');
    
                // дает соответствующий класс
                function colouredInputsOnAction() {
                    element.addEventListener('focus', function () {
                        let eClassName = eAttr.replace(" ", "").toLowerCase();
                        let eClass = 'form__clue--'+ eClassName;
                        eP.classList.add(eClass);                    
                    })
            
                    element.addEventListener('blur', function () {
                        let eClassName = eAttr.replace(" ", "").toLowerCase();
                        let eClass = 'form__clue--'+ eClassName;
                        eP.classList.remove(eClass);                    
                    })
                }
    
                // ищем совпадения
                switch (eAttr) {
                    case 'Soundcloud':
                        colouredInputsOnAction();
                        break;
    
                    case 'Mixcloud':
                        colouredInputsOnAction();
                        break;

                    case 'Youtube':
                        colouredInputsOnAction();
                        break;

                    case 'Vimeo':
                        colouredInputsOnAction();
                        break;

                    case 'Beatport':
                        colouredInputsOnAction();
                        break;

                    case 'iTunes':
                        colouredInputsOnAction();
                        break;

                    case 'Apple Music':
                        colouredInputsOnAction();
                        break;

                    case 'Spotify':
                        colouredInputsOnAction();
                        break;
                
                    default:
                        break;
                }
            } 
        });
    }

    function inputFocused() {
        let eP = this.parentNode;
        if (!eP.classList.contains('form__clue--clicked')) {
            eP.classList.add('form__clue--clicked');
            //console.log('focused');
        }
    };

    function inputBlured() {
        let eP = this.parentNode;
        let eV = this.value;
        if (eP.classList.contains('form__clue--clicked') && eV == '') {
            eP.classList.remove('form__clue--clicked');
            //console.log('blured');
        }
    };

    filledInputFoused();
    colouredInputs();

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
    // * ФИЛЬТРЫ для пользователя
    // *

    // выбираю элементы
    let portfolioFilterItems = document.querySelectorAll('.portfolio__filter-item');

    portfolioFilterItems.forEach(element => {
        element.addEventListener('click', function () {
            if (this.classList.contains('portfolio__filter-item--all')) {
                

            } else{
                // включаю все кроме кнопки выбрать все
                this.classList.toggle('portfolio__filter--selected'); 
            };
        });
    });

    // *
    // * gallery
    // *

    let galleryInputWrapper = document.getElementById('galleryInputWrapper'),
        inputGallery = document.getElementById('inputGallery'),
        galleryCounter = document.getElementById('galleryCounter');

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

    // *
    // * очистить поиск
    // *

    let inputSearch = document.getElementById('inputSearch'),
        searchClear = document.getElementById('searchClear');

    searchClear.addEventListener('click', function () {
        if (inputSearch.value) {
            inputSearch.value = '';
        } else {
            console.log('nothing inputed');
        }
    })

    // *
    // * ФИЛЬТРЫ в поиске
    // *

    // выбираю элементы
    let filterBtn = document.getElementById('filterBtn'),
        filterItems = document.querySelectorAll('.search__filter-item'),
        filterWrapper = document.getElementById('filterWrapper');

    filterBtn.addEventListener('click', function () {
        filterBtn.classList.toggle('search__btn--active');
        filterWrapper.classList.toggle('search__filter--closed');
    });

    filterItems.forEach(element => {
        element.addEventListener('click', function () {
            if (this.classList.contains('search__filter-item--all')) {
                

            } else{
                // включаю все кроме кнопки выбрать все
                this.classList.toggle('search__filter--selected'); 
            };
        });
    });


    // *
    // * клик на результат поиска
    // *

    let resultItems = document.querySelectorAll('.result__content');

    resultItems.forEach(element => {
        element.addEventListener('click', function (params) {
            this.classList.toggle('result__content--cliked');
        });
    });

});