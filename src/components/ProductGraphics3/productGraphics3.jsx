"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Graphic3Styles from "./productGraphics3.module.scss";
import ProductGraphics4 from "@/components/ProductGraphics4/productGraphics4";

gsap.registerPlugin(ScrollTrigger);

export default function ProductGraphics3() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const imageUrls1 = [];
    for (let i = 0; i <= 214; i++) {
      const number = i.toString().padStart(4, "0");
      imageUrls1.push(
        `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/medium/${number}.jpg`
      );
    }

    const imageUrls2 = [];
    for (let i = 0; i <= 56; i++) {
      const number = i.toString().padStart(4, "0");
      imageUrls2.push(
        `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/battery/medium/${number}.jpg`
      );
    }

    gsap.to(imageRef.current, {
      height: "100vh",
      ease: "none",
    });

    let imgIndex = { index: 0 };

    gsap.to(imgIndex, {
      index: imageUrls1.length - 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const newSrc = imageUrls1[Math.round(imgIndex.index)];
          if (imageRef.current && imageRef.current.src !== newSrc) {
            imageRef.current.src = newSrc;
          }

          if(process > 0.5){
            gsap.to(imageRef.current, {
              // opacity: 1,
              zIndex: "2",
              ease: "none",
            });
          }else{
            gsap.to(imageRef.current, {
              // opacity: 1,
              zIndex: "0",
              ease: "none",
            });
          }

          if (textRef1.current) {
            if (progress >= 0.05 && progress <= 0.1) {
              gsap.to(textRef1.current, {
                opacity: 1,
                ease: "none",
              });
            } else {
              gsap.to(textRef1.current, {
                opacity: 0,
                ease: "none",
              });
            }
          }

          if (textRef2.current) {
            if (progress >= 0.9 && progress <= 1) {
              gsap.to(textRef2.current, {
                scale: 1.2,
                opacity: 1,
                ease: "none",
              });
            } else {
              gsap.to(textRef2.current, {
                scale: 0,
                opacity: 0,
                ease: "none",
              });
            }
          }
        },
      },
    });

    let imgIndex2 = { index: 0 };

    gsap.to(imgIndex2, {
      index: imageUrls2.length - 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom top",
        end: "bottom+=100% bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          const newSrc = imageUrls2[Math.round(imgIndex2.index)];
          if (imageRef.current && imageRef.current.src !== newSrc) {
            imageRef.current.src = newSrc;
          }
         
          gsap.to(textRef2.current, {
            scale: 0,
            opacity: 0,
            ease: "none",
          });
        },
      },
    });

    gsap.to(imageRef.current, {
      scale: 10,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom+=100% bottom",
        end: "bottom+=200% bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const maskSize = progress * 800;
          gsap.to(imageRef.current, {
            css: {
              maskImage: `radial-gradient(circle at center, transparent ${maskSize}px, black 0)`,
            },
            ease: "none",
          });
        },
      },
    });
  }, []);

  return (
    
      <section className={Graphic3Styles.container}>
        <div className={Graphic3Styles.containerImages} ref={containerRef}>
          <img
            ref={imageRef}
            src="https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/medium/0000.jpg"
            alt="spatial-audio-image"
            style={{
              maxWidth: "100%",
              width: "100%",
              maxHeight: "100%",
              height: "100vh",
              position: "fixed",
              top: "0",
              zIndex: "0",
            }}
          />
          <div className={Graphic3Styles.containerText1} ref={textRef1}>
            <span>
              With Personalised Spatial Audio <br />
              that places sound all around you,
            </span>
          </div>
          <div className={Graphic3Styles.containerText2} ref={textRef2}>
            <span>
              Adaptive EQ that tunes <br />
              music to your ears
            </span>
          </div>
        </div>
      </section>

    
  );
}
