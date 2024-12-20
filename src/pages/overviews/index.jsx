import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Banner from "../../components/banner";
import styles from "./index.module.css";
import Contact from "../../components/contact";
import TransformConversation from "../../components/transformConversation";
import ReasonNamitech from "../../components/reasonNamitech";
import KeyTechnology from "../../components/keyTechnology";
import OurTeam from "../../components/ourTeam";
import OurProducts from "../../components/ourProducts";
import OurProductsMaterial from "../../components/ourProductMaterial";
import TheTeam from "../../components/theTeam";
import ActivitiesTeam from "../../components/activitiesTeam";
import Footer from "../../components/footer";

function OverView() {
  const [scrollState, setScrollState] = useState({
    bannerOut: false,
    conversationIn: false,
  });
  const [isRounded, setIsRounded] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 0.5) {
        setIsRounded(true);
      } else {
        setIsRounded(false);
      }

      if (scrollPosition > windowHeight * 0.7 && isRounded) {
        setScrollState((prevState) => ({
          ...prevState,
          bannerOut: true,
        }));
      } else {
        setScrollState((prevState) => ({
          ...prevState,
          bannerOut: false,
        }));
      }

      if (scrollPosition > windowHeight * 0.8) {
        setScrollState((prevState) => ({
          ...prevState,
          conversationIn: true,
        }));
      } else {
        setScrollState((prevState) => ({
          ...prevState,
          conversationIn: false,
        }));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isRounded]);

  return (
    <div className={styles["overview-container"]}>
      <Contact />
      <div className={styles["header-wrapper"]}>
        <Header />
      </div>
      <div
        className={`${styles["banner-container"]} ${
          isRounded ? styles["banner-rounded"] : ""
        } ${scrollState.bannerOut ? styles["banner-out"] : ""}`}
      >
        <Banner />
      </div>

      <div
        className={`${styles["transform-container"]} ${
          scrollState.conversationIn ? styles["conversation-in"] : ""
        }`}
      >
        <TransformConversation />
      </div>
      
      <div>
        <ReasonNamitech/>
      </div> 

      <div>
        <KeyTechnology/>
      </div>

      <div>
        <OurTeam/>
      </div>

      <div>
        <OurProducts/>
      </div>

      <div>
        <OurProductsMaterial/>
      </div>

      <div>
        <TheTeam/>
      </div>

      <div>
        <ActivitiesTeam/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default OverView;
