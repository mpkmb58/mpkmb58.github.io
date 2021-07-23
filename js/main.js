$('.owl-carousel').owlCarousel({
    margin:10,
    responsive:{
        0:{
            items:1
        },
        540:{
            items:2
        },
        992: {
          items: 3
        },
        1200: {
          items: 4
        },
    }
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})