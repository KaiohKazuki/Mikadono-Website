//---------------------------------------- Characters Button ----------------------------------------//
const FADE_MS = 500; // matches the 0.5s opacity transition in style.css

const characters = {
    kazuki: {
        first: "Kazuki",
        last: "Mikadono",
        image: "Image/Characters/Kazuki1.png",
        des: "Kazuki Mikadono is one of the three emperors at Saika Academy and the eldest of the three sisters.<br><br>She is tall, confident and a prodigy in acting in male roles. This later causes her to doubt her acting skills when she has to play a female role, however with the help of Yuu Ayase she regains her confidence and develops something else.<br><br>Despite being the older of the three sisters she is the hardest for Yuu Ayase to win over."
    },
    niko: {
        first: "Niko",
        last: "Mikadono",
        image: "Image/Characters/Niko1co.png",
        des: "Niko Mikadono is the middle child of the three emperors.<br><br>She's the smallest out of the three and a prodigy in physical activity, her strongest is Karate.<br><br>She acts tough and cold to everyone around her however in truth she likes everything pink and cute and is only able to share this fact with her sisters with help from Yuu Ayase."
    },
    miwa: {
        first: "Miwa",
        last: "Mikadono",
        image: "Image/Characters/Miwa1.png",
        des: "She is one of the three sisters and one of the three emperors at Saika Academy and plays a central role in the story. Miwa is known for her child-like personality, often wanting attention from Yuu Ayase.<br><br>Her character is first introduced as being distant towards her sisters, but it's later revealed that she wanted them to be a family once more."
    }
};

let fadeTimer;

function fadeSwap(change) {
    const parts = [
        document.getElementById("Background"),
        document.getElementById("Name"),
        document.getElementById("Des")
    ];
    parts.forEach(p => p.style.opacity = 0);

    clearTimeout(fadeTimer); // quick clicks don't stack up
    fadeTimer = setTimeout(() => {
        change();
        parts.forEach(p => p.style.opacity = 1);
    }, FADE_MS);
}

function showCharacter(key) {
    const c = characters[key];
    fadeSwap(() => {
        document.getElementById("First").innerHTML = c.first;
        document.getElementById("Last").innerHTML = c.last;
        document.getElementById("Des").innerHTML = c.des;
        document.getElementById("Background").style.backgroundImage = `url(${c.image})`;
    });
}

function Hide() {
    fadeSwap(() => {
        document.getElementById("First").innerHTML = "";
        document.getElementById("Last").innerHTML = "";
        document.getElementById("Des").innerHTML = "";
        document.getElementById("Background").style.backgroundImage = "none";
    });
}

// kept so the onclick="" attributes in the HTML still work
function Kaz() { showCharacter("kazuki"); }
function Nik() { showCharacter("niko"); }
function Miw() { showCharacter("miwa"); }


//----------------------------------------  Toru Glaze (Secret Button) ----------------------------------------//
function Toru() {
    document.getElementById("Toru").src = "Image/Gallery/ToruGlaze.jpg";
    document.getElementById("Toe").innerHTML = "Toru Glaze BOI"
}
function Toe() {
    document.getElementById("Toru").src = "Image/Gallery/Tuff.webp";
    document.getElementById("Toe").innerHTML = "Welcome To Bp Bradar"
}
//---------------------------------------- Slider ----------------------------------------//
const images = [
    "Image/Slider/1.jfif",
    "Image/Slider/2.jfif",
    "Image/Slider/3.jfif",
    "Image/Slider/4.jfif",
    "Image/Slider/5.jfif",
    "Image/Slider/6.jfif",
    "Image/Slider/7.jfif",
    "Image/Slider/8.jfif",
    "Image/Slider/9.jfif",
    "Image/Slider/10.jfif",
    "Image/Slider/11.jfif",
    "Image/Slider/12.jfif",
    "Image/Slider/13.jfif",
    "Image/Slider/14.jfif",
    "Image/Slider/15.jfif",
    "Image/Slider/16.jfif", //--------Unrelated on the anime. Btw it's my fav male character and my favorite number is 16 --------//
    "Image/Slider/17.jfif",
    "Image/Slider/18.jpg",
    "Image/Slider/19.jpg",
    "Image/Slider/20.jfif",
    "Image/Slider/21.jfif",
    "Image/Slider/22.jfif",
    "Image/Slider/23.jfif",
    "Image/Slider/24.jfif",
    "Image/Slider/25.jfif",
    "Image/Slider/26.jfif",
    "Image/Slider/27.jfif",
    "Image/Slider/28.jfif",
    "Image/Slider/29.jfif",
    "Image/Slider/30.jfif",
    "Image/Slider/31.jfif",
];

let currentIndex = 0;

function showImage() {
    document.getElementById("ImageSlide").src = images[currentIndex];
    document.getElementById("Counter").textContent = `${currentIndex + 1} / ${images.length}`;
}

function NextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function BackImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

//---------------------------------------- "Foot" Ouu Shii ----------------------------------------//
function Tik() {
    document.getElementById("Contact").innerHTML = "Tiktok: @kaioh retzu"
}
function Mai() {
    document.getElementById("Contact").innerHTML = "Gmail: kaiohkazuki@gmail.com"
}
function Face() {
    document.getElementById("Contact").innerHTML = "Facebook: Nullkyon Mikadono"
}
function Gra() {
    document.getElementById("Contact").innerHTML = "Instagram: @Kaioh_Kazuki"
}