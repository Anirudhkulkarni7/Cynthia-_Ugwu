const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'), //main element pe smmoth scroll lagana
    smooth: true,
});


function firstPageAnime(){
    var tl = gsap.timeline();


    tl.from("#nav",{
        y:"-10",
        opacity:0,
        duration : 1.5,
        ease: Expo.easeInOut,


    })

    .to(".elemh1",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay :-1,
        stagger : .2,
    })

    .from("#herofooter",{
        y:-10,
        opacity: 0,
        duration: 1.5,
        delay : -1,
        ease :Expo.easeInOut
    })

}


var timeOut

function circleSkew(){
    var xscale =1;
    var yscale =1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove",function(dets){



        clearTimeout(timeOut);


        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev),
        yscale = gsap.utils.clamp(.8,1.2, dets.clientX - yprev);
         

        xprev = dets.clientX; 
        yprev = dets.clientY;

        circleMouseFollower(xscale , yscale);

        timeOut = setTimeout(function(){

        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(${1}, ${1})`;

        },100);

     });
}


function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){


        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(${xscale}, ${yscale})`;
    })
}
circleSkew();
circleMouseFollower();
firstPageAnime();

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrent = 0;



     elem.addEventListener("mouseleave", function(details) {


 
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffrent = details.clientX - rotate;
        rotate = details.clientX;
        // gsap.utils.clamp(-20,20,diff);
 
        gsap.to(elem.querySelector("img"),{

            opacity:0,
            ease : Power3,
            duration:0.5,
         });
 
    });






    elem.addEventListener("mousemove", function(details) {


 
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffrent = details.clientX - rotate;
        rotate = details.clientX;
        // gsap.utils.clamp(-20,20,diff);
 
        gsap.to(elem.querySelector("img"),{

            opacity:1,
            ease : Power3,
            top : diff,
            left : details.clientX,
            rotate : gsap.utils.clamp(-30,30,diffrent*0.5),
        });
 
    });



});