import BassStyles from "./BassContainer.module.scss";
export default function BassContainer() {
  return (
    <div className={BassStyles.container}>
      <div className={BassStyles.containerMain}>
        <div className={BassStyles.containerMainImageCon}>
          <img
            src="https://www.apple.com/in/airpods-3rd-generation/images/overview/value-props/adaptive_eq__fh6rplqneium_medium.jpg"
            alt="bass_audio_img"
            className={BassStyles.containerMainImg}
          />
          <span className={BassStyles.containerMainImgTxt}>
            Music on a more personal note. Adaptive EQ automatically tunes music
            to your ears. Inward-facing microphones detect what you’re hearing,
            then adjust low and midrange frequencies to deliver the rich details
            in every song, customised for you in real time.
          </span>
        </div>
        <div className={BassStyles.containerMainDesc}>
          <span className={BassStyles.containerMainDescTitle}>
            Bass hits an all-time high.
          </span>
          <span className={BassStyles.containerMainDescText}>
            An Apple-designed dynamic driver, powered by a custom amplifier,
            renders music in exceptionally detailed sound quality — so you revel
            in every tone, from deep, rich bass to crisp, clean highs.
          </span>
        </div>
      </div>
    </div>
  );
}
