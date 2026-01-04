gsap.from('.nav',{
    opacity:0,
    x:10,

    y:20,
    scrub:5,
    duration:0.8,
    delay:1
})

gsap.from('.banner img',{
    opacity:0,
    x:10,

    y:20,
    scrub:5,
    duration:0.8,
    delay:1.8
})

gsap.from('.banner h2',{
    opacity:0,
    x:10,

    y:20,
    scrub:5,
    duration:0.5,
    delay:2.6
})

gsap.from('.banner p',{
    opacity:0,
    x:10,

    y:20,
    scrub:5,
    duration:0.5,
    delay:3.1
})

gsap.from('.banner button',{
    opacity:0,
    x:10,

    y:20,
    scrub:5,
    duration:.5,
    delay:3.6
})

gsap.from('.info',{
    opacity:0,
    x:10,

    y:20,
    scrub:5,
    duration:.5,
    delay:4.1
})
gsap.from('.info p',{
    opacity:0,
    x:10,

    y:20,
    scrub:5,
    duration:.5,
    delay:4.6
})

gsap.from('.sec .aca',{
    opacity:0,
    y:26,
    x:10,
    duration:.7,
    delay:5.1
})
gsap.from('.sec .add',{
    opacity:0,
    y:26,
    x:10,
    duration:.7,
    delay:5.8
})
gsap.from('.sec .achi',{
    opacity:0,
    y:26,
    x:10,
    duration:.7,
    delay:6.6
})

gsap.from('.mess', {
    opacity: 0,
    x: 450,
    y: 20,
    duration: 10,
    scrollTrigger: {
        trigger: ".mess",
        scroller: "body", // 'scroll' ko 'scroller' kar diya
        start: "top 80%", // Jab element viewport ke 80% par aaye tab shuru ho
        end: "top 50%",   // Jab 50% par pahuche tab khatam ho
        markers: true,
        scrub: 2          // Smooth movement ke liye
    }
});


gsap.from('.mess1', {
    opacity: 0,
    x: -450,
    y: 20,
    duration: 10,
    scrollTrigger: {
        trigger: ".mess",
        scroller: "body", // 'scroll' ko 'scroller' kar diya
        start: "top 10%", // Jab element viewport ke 80% par aaye tab shuru ho
        end: "top 50%",   // Jab 50% par pahuche tab khatam ho
        markers: true,
        scrub: 2          // Smooth movement ke liye
    }
});