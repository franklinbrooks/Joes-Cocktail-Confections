// Next button in slideshow
let next = document.querySelector('#next');
// Previous button in slideshow
let previous = document.querySelector('#previous');
// adding event Listeners
next.addEventListener('click', ()=>$('.slider').slider('next') );
previous.addEventListener('click', ()=>$('.slider').slider('prev') );
