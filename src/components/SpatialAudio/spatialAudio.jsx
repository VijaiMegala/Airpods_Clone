"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpaAudioStyles from "./SpatialAudio.module.scss"
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function SpatialAudio() {

  const soundRef = useRef(null);  
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);


  useEffect(() =>{
        gsap.to(soundRef.current,{
            scrollTrigger : {
            start: "top top",
            end: "bottom top",
            scrub: "true",
            onUpdate: (self) => {
                const progress = self.progress;
                console.log("Graph 4",progress)
                if (progress >= 0.87) { 
                  gsap.to(text1Ref.current, { opacity: 0 });
                  gsap.to(text2Ref.current, { opacity: 1});
                } else {
                  gsap.to(text1Ref.current, { opacity: 1});
                  gsap.to(text2Ref.current, { opacity: 0});
                }
              }
            
            }
        })
  },[])

  return (
    <div className={SpaAudioStyles.containerSoundMain} ref={soundRef}>
      <img
        src="https://www.apple.com/v/airpods-3rd-generation/f/images/overview/value-props/spatial_spiral__kekq9zxjllme_large.png"
        alt="spatial_audio"
        style={{ minWidth: "80vh" }}
      />
      <span className={SpaAudioStyles.containerSoundText1} ref={text1Ref}>
        Taking sound in totally
        <br />
        new directions.
      </span>
      <span className={SpaAudioStyles.containerSoundText2} ref={text2Ref}>
        Personalised Spatial Audio with dynamic head tracking places sounds all
        around you to create a three-dimensional listening experience for music,
        TV shows, movies and more — immersing you in sounds from every direction
        so it feels like you’re in your very own concert hall or theatre.
      </span>
    </div>
  );
}
