const open = document.querySelector('.open');
const modalWrapper = document.querySelector('.modal-wrapper');
const close = document.querySelector('.modal__close');
const cancel = document.querySelector('.btn--cancel');
const uninstal = document.querySelector('.btn--uninstall');


open.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
cancel.addEventListener('click', closeModal);
uninstal.addEventListener('click', uninstalApp);
window.addEventListener('click', outsideClick);


function openModal() {
   // modalWrapper.style.display = 'flex';
    modalWrapper.classList.add('modal-wrapper--isVisible');
    open.style.display = 'none';
  };

function closeModal() {
   // modalWrapper.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper--isVisible');
    open.style.display = 'block';    
}

function uninstalApp() {
   // modalWrapper.style.display = 'none'; 
    alert('DONE!');
    modalWrapper.classList.remove('modal-wrapper--isVisible');
    open.style.display = 'block';  
}

function outsideClick(e) {
    if (e.target == modalWrapper) {
     // modalWrapper.style.display = 'none';
      modalWrapper.classList.remove('modal-wrapper--isVisible'); 
      open.style.display = 'block';  
    }
  }
