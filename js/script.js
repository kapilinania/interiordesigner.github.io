//menu js start here
//when page scroll 
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.header_navbar');
    if (window.scrollY > 0) {
    //   navbar.style.backgroundColor = '#f3f3f3'; // Change to desired color
    //   navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

    } else {
    //   navbar.style.backgroundColor = '#f8f8f8'; // Change to default color
     
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    var burgerIcon = document.querySelector('.burger_img');
    var mobileMenu = document.querySelector('.mobile-menu');
  
    burgerIcon.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : ''; // Toggle overflow property
      
      // Change the src attribute of the burger icon
      if (mobileMenu.classList.contains('active')) {
        burgerIcon.src = 'image/navbar/close.svg'; // New path for close icon
      } else {
        burgerIcon.src = 'image/navbar/burger.svg'; // Original path for burger icon
      }
    });
  });
  






//slider js code is here

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

 // Function to click the next button
 function clickNextButton() {
    document.querySelector('.next').click();
}

// Set interval to click next button every 3 seconds
setInterval(clickNextButton, 5000);

//sider js is over now

//lightbox projectmail gallery code

lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  });

  //carrer job section is here
  //carrer full-time and intership funciton is here 
  function showJob(jobType) {
    var fulltime = document.getElementById('fulltime');
    var internship = document.getElementById('internship');

    if (jobType === 'fulltime') {
      fulltime.classList.add('active');
      internship.classList.remove('active');
    } else if (jobType === 'internship') {
      fulltime.classList.remove('active');
      internship.classList.add('active');
    }
  }

  // By default, show full-time jobs
  showJob('fulltime');






