import { Button } from "antd";
import ProductHeaderStyles from "./ProductHeader.module.scss";
import { IoIosArrowDown } from "react-icons/io";


export default function ProductHeader() {
  return (
    <section className={ProductHeaderStyles.mainContainer}>
      <div
        className={[
          ProductHeaderStyles.productContainer,
          ProductHeaderStyles.linksContainer,
        ].join(" ")}
      >
        <div className={ProductHeaderStyles.title}>
          Airpods (3rd generation)
        </div>
        <div className={ProductHeaderStyles.linksList}>
          <div className={ProductHeaderStyles.links}>
            <div>Overview</div>
            <div>Tech Specs</div>
            <div>Compare</div>
          </div>
          <div className={ProductHeaderStyles.dropdown}>
            <IoIosArrowDown size={22}/>
          </div>
          <div className={ProductHeaderStyles.buyButton}>
            {/* <button> */}
            <Button
              type="primary"
              shape="round"
              className={ProductHeaderStyles.buyButton}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
