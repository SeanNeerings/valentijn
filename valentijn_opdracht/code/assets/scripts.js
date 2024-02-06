const click = document.querySelector('.open');
let clickCount = 0;

click.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 5) {
    click.classList.remove('start')
    click.classList.add('active');
    clickCount = 0;
  }
  else{
    click.classList.remove('active')
  }

});
