let myPreviousButton = document.querySelector('.previous');
let myNextButton = document.querySelector('.next');
let myTestimonials = Array.from(document.querySelectorAll(".testimonial"));
let currentIndex = 0;

displayTestimonial(currentIndex);

myNextButton.addEventListener('click', function(e){
    currentIndex ++;
    if(currentIndex > myTestimonials.length - 1){
        currentIndex = 0;
    };
    displayTestimonial(currentIndex );
});

myPreviousButton.addEventListener('click', function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = myTestimonials.length - 1;
    };
    displayTestimonial(currentIndex );
})

// the display function 
function displayTestimonial(currentIndex){
    myTestimonials.forEach(element => element.classList.add('active-testimonial'));
    myTestimonials[currentIndex].classList.remove('active-testimonial');
}