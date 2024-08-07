"use client";
import { useEffect, useRef } from "react";
import Graphic4Styles from "./ProductGraphics4.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductGraphics4() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const imgConRef = useRef(null);

  useEffect(() => {
    const imageUrl = [];

    for (let i = 0; i <= 110; i++) {
      const image = i.toString().padStart(4, "0");
      imageUrl.push(
        `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/runner/medium/${image}.jpg`
      );
    }

    let imgIndex = { index: 0 };

    gsap.to(imgIndex, {
      index: imageUrl.length - 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const newSrc = imageUrl[Math.round(imgIndex.index)];
          if (imageRef.current && imageRef.current.src !== newSrc) {
            imageRef.current.src = newSrc;
          }
          
          if (imgConRef.current) {
            imgConRef.current.style.marginTop= `${(progress * 100)*4}vh`;
          }

          if (progress >= 0.05 && progress <= 0.1) {
            gsap.to(textRef1.current, {
              display: "flex",
              opacity: 1,
              ease: "none",
            });
          } else {
            gsap.to(textRef1.current, {
              display: "none",
              opacity: 0,
              ease: "none",
            });
          }

          if (progress >= 0.18 && progress <= 0.2) {
            gsap.to(textRef2.current, {
              display: "flex",
              opacity: 1,
              ease: "none",
            });
          } else {
            gsap.to(textRef2.current, {
              opacity: 0,
              ease: "none",
            });
          }
        },
      },
    });
  }, []);

  return (
    <section className={Graphic4Styles.container} ref={containerRef}>
      <div className={Graphic4Styles.containerImages} ref = {imgConRef}>
        <img
          ref={imageRef}
          src="https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/runner/medium/0000.jpg"
          alt="spatial-audio-image"
          style={{
            maxWidth: "100%",
            width: "100%",
            maxHeight: "100%",
            height: "100vh",
            opacity: 1,
          }}
        />
        <div className={Graphic4Styles.containerText} ref={textRef1}>
          <span>
            It shrugs off sweat <br />
            and sprinkles,
          </span>
        </div>
        <div className={Graphic4Styles.containerText} ref={textRef2}>
          <span>
            and delivers an <br />
            experience that’s <br />
            simply magical.
          </span>
        </div>
      </div>
    </section>
  );
}
