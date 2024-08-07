"use client";
import Image from "next/image";
import GraphicsStyles from "./productGraphics1.module.scss";
import LeftBuds from "../../../public/airpods/hero_airpods_left__e4mt0u0p25ea_large_2x.png";
import RightBuds from "../../../public/airpods/hero_airpods_right__dtlz95zz9ryq_large_2x.png";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductGraphics1() {
  const airPodsLayerRef = useRef(null);
  const productNameRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const productLinksContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      airPodsLayerRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    )
      .fromTo(
        productNameRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" },
        "-=1.8"
      )
      .fromTo(
        [productDescriptionRef.current, productLinksContainerRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.2"
      );

    ScrollTrigger.create({
      trigger: airPodsLayerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress.toFixed(3);
        const scale = 1 + progress * 3;
        gsap.to(airPodsLayerRef.current, {
          scale,
          duration: 0.1,
          ease: "power2.out",
        });

        if (progress > 0.6) {
          gsap.to(productLinksContainerRef.current, {
            opacity: 0,
            duration: 1,
          });
        } else if (progress <= 0.6) {
          gsap.to(productLinksContainerRef.current, {
            opacity: 1,
            duration: 1,
          });
        }
        if (progress > 0.7) {
          gsap.to(productDescriptionRef.current, { opacity: 0, duration: 1 });
        } else if (progress <= 0.7) {
          gsap.to(productDescriptionRef.current, { opacity: 1, duration: 1 });
        }
        if (progress > 0.9) {
          gsap.to(productNameRef.current, { opacity: 0, duration: 1 });
        } else if (progress <= 0.9) {
          gsap.to(productNameRef.current, { opacity: 1, duration: 1 });
        }
      },
    });
  }, []);

  return (
    <>
      <div className={GraphicsStyles.container}>
        <div className={GraphicsStyles.mainContainer}>
          <div className={GraphicsStyles.AirpodsLayer} ref={airPodsLayerRef}>
            <div className={GraphicsStyles.AirpodsLayerLeft}>
              <div className={GraphicsStyles.AirpodsLayerLeftBuds}>
                <Image src={LeftBuds} width={452} alt="leftbuds" />
              </div>
            </div>
            <div className={GraphicsStyles.AirpodsLayerRight}>
              <div className={GraphicsStyles.AirpodsLayerRightBuds}>
                <Image src={RightBuds} width={450} alt="rightbuds" />
              </div>
            </div>
          </div>

          <div className={GraphicsStyles.ProductDetailsContainer}>
            <div className={GraphicsStyles.ProductDetailsContainerMain}>
              <div className={GraphicsStyles.ProductName} ref={productNameRef}>
                AirPods
              </div>
              <div
                className={GraphicsStyles.ProductDescription}
                ref={productDescriptionRef}
              >
                With Personalized Spatial Audio
              </div>
            </div>
          </div>

          <div
            className={GraphicsStyles.ProductLinksContainer}
            ref={productLinksContainerRef}
          >
            <div className={GraphicsStyles.ProductLinksContainerLink}>
              <div className={GraphicsStyles.ProductLinksContainerLinkText}>
                Watch the film
              </div>
              <FaRegCirclePlay />
            </div>
            <div className={GraphicsStyles.ProductLinksContainerLink}>
              <div className={GraphicsStyles.ProductLinksContainerLinkText}>
                Watch the event
              </div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ backgroundColor: "green", height: "100vh", width: "200vh" }}></div> */}
    </>
  );
}
