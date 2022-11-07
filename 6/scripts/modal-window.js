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

  let overlays = modalWindow.getElementsByClassName('overlay');
  for (const overlay of overlays) {
    overlay.addEventListener('click', () => modalWindow.classList.remove('visible'));
  }

  let input_groups = modalWindow.getElementsByClassName('input-group');
  for (const input_group of input_groups) {
    let input = input_group.querySelector('input');

    let minusButton = input_group.querySelector('.minus');
    minusButton.addEventListener('click', () => input.stepDown());

    let plusButton = input_group.querySelector('.plus');
    plusButton.addEventListener('click', () => input.stepUp());
  }
}
