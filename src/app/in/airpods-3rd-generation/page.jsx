"use client";
import ProductMenuHeader from "@/components/MenuHeader/ProductMenuHeader";
import ProductHeader from "@/components/ProductHeader/ProductHeader";
import DropDownHeader from "@/components/DropDownHeader/page";
import ProductGraphics1 from "@/components/ProductGraphics1/ProductGraphics1";
import ProductGraphics2 from "@/components/ProductGraphics2/productGraphics2";
import ProductGraphics3 from "@/components/ProductGraphics3/productGraphics3";
import ProductGraphics4 from "@/components/ProductGraphics4/productGraphics4";
import SpatialAudio from "@/components/SpatialAudio/spatialAudio";
import BassContainer from "@/components/BassContainer/bassContainer";
import MainStyle from "./ProductStyle.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);
export default function Landing() {
  const conRef = useRef(null);
  const headerRef = useRef(null);
  const graphics1Ref = useRef(null);
  const graphics2Ref = useRef(null);
  const animationContainerRef = useRef(null);
  const animationSectionRef = useRef(null);
  const spatialAudioRef = useRef(null);

  useEffect(() => {
    gsap.to(conRef.current, {
      scrollTrigger: {
        trigger: graphics1Ref.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress === 1) {
            gsap.to(graphics1Ref.current, { opacity: 0 });
          } else {
            gsap.to(graphics1Ref.current, { opacity: 1 });
          }

          if (progress === 0.9) {
            gsap.to(graphics2Ref.current, { position: "fixed" });
          } else {
            gsap.to(graphics2Ref.current, { position: "relative" });
          }

          if (progress > 0) {
            gsap.to(headerRef.current, { marginTop: "-8vh" });
          } else {
            gsap.to(headerRef.current, { marginTop: "0vh" });
          }
        },
      },
    });

    gsap.to(animationContainerRef.current, {
      scrollTrigger: {
        trigger: spatialAudioRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const newWidth = 90 / progress; 
          // console.log(progress)
          if(progress <= 0.7){
          gsap.to(animationContainerRef.current, {
            width: `${newWidth}vh`,
          });
        }
          if (progress > 0) {
            gsap.to(animationSectionRef.current, {
              justifyContent: "center",
            });
          } else {
            gsap.to(animationSectionRef.current, {
              // width: "100%",
              justifyContent: "flex-start", 
            });
          }
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={conRef}>
        <section className={MainStyle.containerHeader} ref={headerRef}>
          <ProductMenuHeader />
          <ProductHeader />
        </section>

        <section className={MainStyle.containerAnimation} ref={animationSectionRef} style={{ display: "flex" }}>
          <div className={MainStyle.mainContainer} ref={animationContainerRef}>
            <div ref={graphics1Ref} style={{ display: "flex" }}>
              <ProductGraphics1 />
            </div>
            <div ref={graphics2Ref}>
              <ProductGraphics2 />
            </div>
            <ProductGraphics3 />
            <ProductGraphics4 />
          </div>
        </section>

        <section className={MainStyle.containerSound} ref={spatialAudioRef}>
          <SpatialAudio />
        </section>

        <section >
           <BassContainer/>
        </section>
      </div>
    </>
  );
}
