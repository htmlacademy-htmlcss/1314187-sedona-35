let modalWindows = document.getElementsByClassName('modal-window');
let windowOpeners = [
  document.querySelector('.main-nav .book'),
  document.querySelector('.search button')];

for (const modalWindow of modalWindows) {
  windowOpeners.forEach(windowOpener => {
    windowOpener?.addEventListener('click', () => modalWindow.classList.add('visible'));
  });

  let closeButtons = modalWindow.getElementsByClassName('close-modal-window');
  for (const closeButton of closeButtons) {
    closeButton.addEventListener('click', () => modalWindow.classList.remove('visible'));
  }
}
