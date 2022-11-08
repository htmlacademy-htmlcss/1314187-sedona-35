let viewFormatElement = document.querySelector('.view-format');

let viewFormat_cards = viewFormatElement.querySelector('.view-cards');
let viewFormat_fullscreen = viewFormatElement.querySelector('.fullscreen');
let viewFormat_list = viewFormatElement.querySelector('.list');

let viewFormatButtons = [
  viewFormat_cards,
  viewFormat_fullscreen,
  viewFormat_list
];

viewFormat_cards.addEventListener('click', () => {
  viewFormatButtons.forEach(button => button.classList.remove('active'));
  viewFormat_cards.classList.add('active');
});
viewFormat_fullscreen.addEventListener('click', () => {
  viewFormatButtons.forEach(button => button.classList.remove('active'));
  viewFormat_fullscreen.classList.add('active');
});
viewFormat_list.addEventListener('click', () => {
  viewFormatButtons.forEach(button => button.classList.remove('active'));
  viewFormat_list.classList.add('active');
});
