const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const btnMobSend = document.querySelector('[mob-btn-send');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}

btnMobSend.addEventListener('click', handleMobSend);
function handleMobSend(e) {
  e.preventDefault();
}
