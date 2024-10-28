//Image Slider -Games-
/*sliders();

 var sliderindex = 1;
function navslider(n){
    sliders(sliderindex += n);
}

function sliders(index){
    let boxindex = document.getElementsByClassName('game-box');

    if(index>boxindex.length){sliderindex = 1};
    if(index<1){sliderindex = boxindex.length};


   
    for(var i =0 ;i<boxindex.length;i++){
       boxindex[i].style.display = 'none'
      
    }
}
document.getElementsByClassName('game-box')[sliderindex-1].style.display='block'; */
let currentIndex = 0;
let totalItems;

// Function to display a range of items
function showSlide(index) {
    let slides = document.getElementsByClassName("game-box");
    totalItems = slides.length;
   
   
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("index");
    }

    // Correct the index if it goes out of bounds
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 5;
    } else {
        currentIndex = index;
    }

    // Show the items in the current slide (up to 3 items)
    for (let i = 0; i < 5; i++) {
        if (currentIndex + i < totalItems) {
            slides[currentIndex + i].style.display = "block";
            slides[currentIndex + i].classList.add("index");
        }
    }
}

// Function to change slides
function changeSlide(n) {
    showSlide(currentIndex + n);
}

// Initial display of slides
showSlide(currentIndex);



//Show the asside list of links
let icon = document.getElementById('fa-solid');
let menu = document.getElementById('asside-list');

icon.addEventListener('click' ,function() {
    menu.classList.toggle('active');
    icon.classList.toggle('fa-xmark');
})


//show the subscribe alert
let subscribe_btn = document.querySelector('.subscribe_btn');
let subscribe_alert=document.querySelector('.subscribe_alert');

    subscribe_btn.addEventListener('click',()=>{
        const email_adress = document.getElementById('mail').value;
        if(email_adress === ""){
            alert("your email is invalid !");
         } else if(email_adress.includes("@")){
            subscribe_alert.classList.add('show_subscribe_alert');
         } else {
            alert("invalid email format !");
         }
})
function removeAlert() {
    subscribe_alert.classList.remove('show_subscribe_alert');

}

// scrolling animation 
const sections = document.querySelectorAll('.sec');

// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the animation class when section is in view
      entry.target.classList.add('slide');
      observer.unobserve(entry.target); // Optional: Stop observing once animated
    }
  });
}, {
  threshold: 0.001 // Trigger when 10% of the section is in view
});

// Attach the observer to each section
sections.forEach(section => {
  observer.observe(section);
});

