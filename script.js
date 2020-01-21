
// modal-login-popup
var popup = document.querySelector('.modal-login');
var close = popup.querySelector('.modal-close');
var link = document.querySelector('.user-login');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');
var form = popup.querySelector('form');
var storage = localStorage.getItem('login');

var isStorageSupport = true;
var storage = '';

try {
    storage = localStorage.getItem('login');
} catch (err) {
    isStorageSupport = false;
}


link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');

    if(storage) {
        login.value = storage;
    } else {
        login.focus();
    } 
});

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
    if(!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove('modal-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('modal-error');
    } else {
        if(isStorageSupport) {
            localStorage.setItem('login', login.value);
        }
        
    }
    
});

window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        evt.preventDefault();
        if(popup.classList.contains('modal-show')) {
            popup.classList.remove('modal-show');
            popup.classList.remove('modal-error');
        }  
    }
});


// map-popup
mapPopup = document.querySelector('.modal-map');
mapClose = mapPopup.querySelector('.modal-close');
mapLink = document.querySelector('.contacts .button-map');

mapLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
});


mapClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27) {
        evt.preventDefault();

        if(mapPopup.classList.contains('modal-show')) {
            mapPopup.classList.remove('modal-show');
        }
    }
});

