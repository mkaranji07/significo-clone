function homepageAnimation(){
    gsap.set(".slider",{scale:5})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 3    
    }
})

tl
.to(".bg-vid",{
    '--clip' : "0%",
    ease: Power2,
},'a')
.to(".slider",{
    scale : 1,
    ease: Power2

},'a')
.to(".lft",{
    xPercent : -10,
    stagger: .03,
    ease: Power4
},'b')
.to(".rgt",{
    xPercent : 10,
    stagger: .03,
    ease: Power4
},'b')
}

function horizontalpageAnimation(){
    gsap.to(".slide",{
        scrollTrigger: {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
        },
        xPercent : -200,
        ease: Power4
    })
}

homepageAnimation();
horizontalpageAnimation();