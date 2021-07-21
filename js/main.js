
let toggle = true;
$('.menu').on('click', function(){
    if(toggle){
        $(this).addClass('open');
        $('.overlay').removeClass('d-none');
        gsap.from(".overlay", {duration: .3, ease: "power4", opacity: 0});
        gsap.from(".link-side", {
            duration: .8,
            scale: 0.5, 
            opacity: 0, 
            delay: 0.5, 
            stagger: 0.2,
            ease: "elastic", 
            force3D: true
          });
          
        toggle = false;
    }else{
        $(this).removeClass('open');
        $('.overlay').addClass('d-none');
        toggle = true;
      };

 });


