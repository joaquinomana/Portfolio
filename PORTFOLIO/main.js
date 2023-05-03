import * as React from "react";
import {render} from "react-dom";
import { motion} from "framer-motion";

import "/style.css";

var specialChars = document.querySelectorAll("span.char"); for(var c=0; c<specialChars.length; c++){ specialChars[c].innerHTML = decodeURIComponent(specialChars[c].innerHTML); }


const myImage = document.getElementById("my-image");
const myAudio = document.getElementById("my-audio");
        let isPlaying = false;
        
            myImage.addEventListener("click", () => {
                if (isPlaying) {
                    myAudio.pause();
                    myImage.src = "skins/music2.png";
                } else {
                    myAudio.play();
                    myImage.src = "skins/music.png";
                }
                isPlaying = !isPlaying;
            });