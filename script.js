function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function homepageAnimation() {
    gsap.set(".slider", { scale: 5 })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 3
        }
    })

    tl
        .to(".bg-vid", {
            '--clip': "0%",
            ease: Power2,
        }, 'a')
        .to(".slider", {
            scale: 1,
            ease: Power2

        }, 'a')
        .to(".lft", {
            xPercent: -10,
            stagger: .03,
            ease: Power4
        }, 'b')
        .to(".rgt", {
            xPercent: 10,
            stagger: .03,
            ease: Power4
        }, 'b')
}

function horizontalpageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
        xPercent: -200,
        ease: Power4
    })
}

function teamAnimation() {
    document.querySelectorAll(".listelem").forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                ease: Power4,
                duration: 0.5,
            });
        });
        el.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: Power4,
                duration: 0.5,
            });
        });

    });
}

function staggerAnimation(){
    var clutter = "";

document.querySelector(".textpara")
.textContent.split("")
.forEach(function (e) {
    if(e === "") clutter += `<span>$nbsp;</span>`
    clutter += `<span>${e}</span>`
}),
document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span", {opacity: .1})
gsap.to(".textpara span",{
    scrollTrigger:{
        trigger: ".para",
        start:"top 60%",
        end: "bottom 80%",
        scrub: 1,
    },
    opacity: 1,
    ease: Power4,
    stagger: .03
});
}

function capsuleAnimation(){
gsap.to(".capsule:nth-child(2)", {
    scrollTrigger:{
        trigger: ".capsules",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 1
    },
    y: 0,
    ease: Power4

})
}

function bodyBgAnimation(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start: "top 10%",
        end: "bottom 10%",
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color)
        }
    })
})
}

loco();
homepageAnimation();
horizontalpageAnimation();
teamAnimation();
staggerAnimation();
capsuleAnimation();
bodyBgAnimation();