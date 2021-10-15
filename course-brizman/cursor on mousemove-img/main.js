'use strict';

const items = document.querySelectorAll('.list li');

items.forEach((item) => {
  const photo = item.querySelector('.photo'),
        parent = item.parentElement;


  item.addEventListener('mousemove', function (event) {
      photo.classList.add('active');
      parent.classList.add('active');
      
    const cursorX = event.pageX,
          cursorY = event.pageY;

    const itemLeft = item.getBoundingClientRect().left,
          itemTop = item.getBoundingClientRect().top;

    const photoPositionX = cursorX - itemLeft,
          photoPositionY = cursorY - itemTop - window.scrollY,
    
    if(photo.offsetHeight + 40 > event.clientY){
        photo.style.top = `${photoPositionY + 20}px`;
    }else{
        photo.style.top = `${photoPositionY - photo.offsetHeight - 20}px`;
    }

    photo.style.left = `${photoPositionX + 20}px`;

});

  item.addEventListener('mouseout', () => {
      photo.classList.remove('active');
      parent.classList.remove('active');
});
});
