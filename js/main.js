'use strict';
// active link
updateActiveLink();

function updateActiveLink() {
  const allNavLinks = document.querySelectorAll(
    '.nav-menu-link, .mob-menu-link'
  );
  let currentUrl = window.location.hash.replace(/\/$/, '') || '#order';
  console.log('currentUrl', currentUrl);

  allNavLinks.forEach(link => {
    console.log('linkForEach', link.getAttribute('href'));
    const linkHref = link.getAttribute('href').replace(/\/$/, '');
    if (linkHref === currentUrl) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('hashchange', updateActiveLink);

// opening the order's form
const btnOrderOpen = document.querySelector('[order-open]');
const btnOrderClose = document.querySelector('[order-close]');
const modalOrder = document.querySelector('[order-backdrop]');
const btnOrderSend = document.querySelector('[order-send');

btnOrderOpen.addEventListener('click', toggleOrderModal);
btnOrderClose.addEventListener('click', toggleOrderModal);

function toggleOrderModal() {
  modalOrder.classList.toggle('is-open');
}

btnOrderSend.addEventListener('click', handleSendOrder);
function handleSendOrder(e) {
  e.preventDefault();
}
