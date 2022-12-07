const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

function displayImage(e) {
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
  }

  //Ngô Nhật Huy - 20520541 
  for(var i = 1; i <= 5; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', displayImage);
  }
/* Wiring up the Darken/Lighten button */

  //Ngô Nhật Huy - 20520541 

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');

      //Ngô Nhật Huy - 20520541 

    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

        //Ngô Nhật Huy - 20520541 

    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });