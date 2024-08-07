"use client";
import { useState, useEffect, useRef } from "react";
import Graphics2Styles from "./ProductGraphics2.module.scss";
import SpiralImage from "../../../public/airpods/graphics2_bg1.png";
import CircleImage from "../../../public/airpods/circle.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductGraphics3 from "../ProductGraphics3/productGraphics3";

gsap.registerPlugin(ScrollTrigger);

export default function ProductGraphics2() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);
  const circleRef = useRef(null);
  const textContainerRef = useRef(null);
  const imageMainContainerRef = useRef(null);
  const greyBackgroundRef = useRef(null); 

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const offsetX = (clientX / innerWidth - 0.5) * 2;
    const offsetY = (clientY / innerHeight - 0.5) * 2;

    setPosition({
      x: offsetX * 2,
      y: offsetY * 2,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const updateMaskImage = (progress) => {
      let maskSize = 0;
      if(progress >= 0.2 && progress <= 0.3){
       maskSize = progress * 800;
      }else if(progress >= 0.3 && progress <= 0.7){
         maskSize = progress * 1500;
        }else if(progress > 0.7){
           maskSize = progress * 2000;
          }
      gsap.to(imageMainContainerRef.current, {
        css: {
          maskImage: `radial-gradient(circle at center, transparent ${maskSize}px, black 0)`,
        },
        ease: "none",
      });

      gsap.to(greyBackgroundRef.current, {
        css: {
          maskImage: `radial-gradient(circle at center, transparent ${maskSize}px, black 0)`,
        },
        ease: "none",
      });
    
    };

    gsap.to(imageContainerRef.current, {
      width: "2400%",
      scrollTrigger: {
        trigger: `.${Graphics2Styles.mainContainer}`,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          if (circleRef.current) {
            const newWidth = 5 + progress * 2000;
            gsap.to(circleRef.current, {
              width: `${newWidth}%`,
              ease: "none",
            });
          }

          // console.log(process)

          if (textContainerRef.current) {
            if (progress >= 0.1 && progress <= 0.2) {
              gsap.to(textContainerRef.current, {
                opacity: 1,
                ease: "none",
              });
            } else {
              gsap.to(textContainerRef.current, {
                opacity: 0,
                ease: "none",
              });
            }
          }

          updateMaskImage(progress);
        },
      },
    });

    gsap.to(imageContainerRef.current, {
      rotate: 360,
      scrollTrigger: {
        trigger: `.${Graphics2Styles.mainContainer}`,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div ref={greyBackgroundRef} style={{ background: "#EBEBEC", width: "100vw", height: "100vh", position: "fixed", zIndex: 1 , marginTop: "-180vh"}}>
      </div>

      <div className={Graphics2Styles.mainContainer}>
        <div
          className={Graphics2Styles.imageMainContainer}
          style={{ transform: `translate(${position.x}%, ${position.y}%)` }}
          ref={imageMainContainerRef}
        >
          <div className={Graphics2Styles.image} ref={imageContainerRef}>
            <Image
              className={Graphics2Styles.imageSpiral}
              src={SpiralImage}
              alt="Spiral Image"
            />
          </div>
          <div className={Graphics2Styles.imageCircleContainer} ref={circleRef}>
            <Image
              className={Graphics2Styles.imageCircle}
              src={CircleImage}
              alt="Circle Image"
            />
          </div>
        </div>
        <div className={Graphics2Styles.textContainer} ref={textContainerRef}>
          <span>It’s magic, remastered</span>
        </div>
      </div>
    </>
  );
}
