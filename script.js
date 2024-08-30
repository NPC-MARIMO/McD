document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    let charIdxFinder = (array, val) => {
        let idxs = [], i;

        for (i = 0; i < array.length; i++) {

            if (array[i] == val) {

                idxs.push(i);
            }
        }
        return idxs;
    }

    let pageOneOpening = () => {

        let tl = gsap.timeline();

        let lovinIt = document.querySelector(".burger h1");

        let lovinItText = lovinIt.textContent;

        let lovinItWords = lovinItText.split("");

        let adder = ' ';

        lovinItWords.forEach((word) => {

            adder = adder + `<span class = "lovinText" >${word}</span>`

            lovinIt.innerHTML = adder;

        })

        let lovinSpans = document.querySelectorAll(".burger h1 span");

        let spaceIdxs = charIdxFinder(lovinItWords, " ");

        spaceIdxs.forEach((idxs) => {

            lovinSpans[idxs].innerHTML = `<span style="padding-left: 1.5vh;" ></span>`
        })

        tl.to(".loaderBg", {

            scale: 1,

            ease: "expo.out",

            duration: 1,

        }, "a").to("#loader svg", {

            scale: 1,

            ease: "back.out",

            delay: .6,

            duration: .5

        }, "a").to(".loaderBg", {

            height: "100vh",

            width: "100vw",

            borderRadius: 0,

            delay: .85,

        }, "a").to(".burger", {

            width: "35vw",

            duration: .7,

            ease: "back.out"

        }, "b").from(".lovinText", {

            y: "420%",

            ease: "back.out",

            stagger: .1,

        }).to(".logo svg ", {

            x: "120%"

        }, "c").to(".burger h1", {

            x: "-120%"

        }, "c").to(".loaderBg", {

            width: "30vw",

            height: "30vw",

            borderRadius: "50%"

        }, "d").to(".loaderBg", {

            scale: 0,

            delay: .38

        }, "d").set("#loader", { opacity: 0, top: "-200%" })

            .to("nav", {

                height: 100,

                ease: "back .out"

            }).from(".navLeft svg", {

                rotateX: 90,

                ease: "back.out",

                duration: .7

            }).from("#page1 img ", {

                scale: 0,

                opacity: 0

            })

    }

    pageOneOpening();

    let page2Fn = () => {

        let texts = document.querySelectorAll(".text");

        texts.forEach((txt, times) => {

            let textContainer = "";

            let clutter = "";

            if (times == 0) {

                for (let i = 1; i < 4; i += 2) {

                    textContainer = txt.childNodes[i];

                    tCContent = textContainer.textContent;

                    tCWords = tCContent.split("");

                    tCWords.forEach((word) => {

                        clutter = clutter + `<span class = "text${i}">${word}</span>`;
                        
                        textContainer.innerHTML = clutter;

                    })

                    let textSpace = charIdxFinder(tCWords, " ");

                    if (i == 1) {

                        let textSpans = document.querySelectorAll(`.text${i}`);

                        textSpace.forEach((space) => {

                            textSpans[space].innerHTML = `<span style="padding-left: 1.5vh;" ></span>`;

                        })

                    }

                    else if (i == 3) {
                        
                        let textSpans = document.querySelectorAll(`.text${i}`);

                        textSpace.forEach((space) => {

                            textSpans[space].innerHTML = `<span style="padding-left: 1.5vh;" ></span>`;
                        })

                    }

                    clutter = "";

                }

            }

            else {
                
                for (let j = 1; j < 4; j += 2) {

                    textContainer = txt.childNodes[j];

                    tCContent = textContainer.textContent;
                    
                    tCWords = tCContent.split("")

                    tCWords.forEach((word) => {

                        clutter = clutter + `<span class = "text${j + 1}">${word}</span>`;

                        textContainer.innerHTML = clutter;

                    })

                    let textSpace = charIdxFinder(tCWords, " ");

                    if (j == 1) {

                        let textSpans = document.querySelectorAll(`.text${j + 1}`);

                        textSpace.forEach((space) => {

                            textSpans[space].innerHTML = `<span style="padding-left: 1.5vh;" ></span>`;

                        })

                    }

                    else if (j == 3) {

                        let textSpans = document.querySelectorAll(`.text${j + 1}`);

                        textSpace.forEach((space) => {

                            textSpans[space].innerHTML = `<span style="padding-left: 1.5vh;" ></span>`;

                        })

                    }

                    clutter = "";

                }

            }

        })

        let tl2 = gsap.timeline();

        let rightText = document.querySelector(".bigText h1");

        let rText = rightText.textContent;

        let rWords = rText.split("");

        let clutter = "";

        rWords.forEach((word) => {

            clutter = clutter + `<span>${word}</span>`;

            rightText.innerHTML = clutter;

        })

        
        gsap.from(".bigText h1 span", {

            y: 20,

            opacity: 0,

            scale: 0,

            delay: 6

        })

        tl2.from(".text1 ", {

            y: "-100%",

            stagger: .1,

            delay: 6,

            ease: "back.out"

        }, "1").from(".text2 ", {

            y: "-100%",
            
            stagger: .1,

            delay: 6,

            ease: "back.out"

        }, "1").from(".text3", {

            y: "100%",

            stagger: .1,

            delay: 6,

            ease: "back.out"

        }, "1").from(".text4", {

            y: "100%",

            stagger: .1,

            delay: 6,

            ease: "back.out"

        }, "1").from(".lTop button , .lBottom button", {

            scale: 0,

            width: 0,

            delay: 6

        }, "1").from(".p1Right", {

            opacity: 0,

            delay: 6,

            scale: 0

        }, "1")

        let btn = document.querySelectorAll(".btn h3");

        btn.forEach((btn, i) => {

            if (i == 0) {

                let btnWords = btn.textContent.split("");

                let clutter = "";

                btnWords.forEach((word) => {

                    clutter = clutter + `<span class = "butn${i}">${word}</span>`

                    btn.innerHTML = clutter;

                })

                let btnSpace = charIdxFinder(btnWords, " ");

                let btnspan = document.querySelectorAll(`.butn${i}`);

                btnSpace.forEach((space) => {

                    btnspan[space].innerHTML = `<span style="padding-left: 1vh;" ></span>`;

                })

            }
            
            else {

                let btnWords = btn.textContent.split("");

                let clutter = "";

                btnWords.forEach((word) => {

                    clutter = clutter + `<span class = "butn${i}">${word}</span>`;

                    btn.innerHTML = clutter;

                })

                let btnSpace = charIdxFinder(btnWords, " ");

                let btnspan = document.querySelectorAll(`.butn${i}`);

                btnSpace.forEach((space) => {

                    btnspan[space].innerHTML = `<span style="padding-left: 1vh;" ></span>`;

                })

            } console.log(i)

            gsap.from(`.butn${i}`, {

                y: 20,

                opacity: 0,

                scale: 0,

                stagger: .05,

                delay: 7

            })

        })

    }

    page2Fn();

})