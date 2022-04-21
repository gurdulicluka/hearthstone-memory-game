import HearthstoneHeader from "../assets/hearthstone-header-image.png";
import classes from "./HearthstoneBanner.module.css";

const HearthstoneBanner = () => {
  return (
    <div className={classes["hearthstone-banner-image"]}>
      <img className={classes.main} src={HearthstoneHeader} alt="banner" />
      <img className={classes.glow} src={HearthstoneHeader} alt="banner glow" />
    </div>
  );
};

export default HearthstoneBanner;
