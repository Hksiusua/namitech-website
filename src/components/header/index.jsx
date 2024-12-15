import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import logo from "../../images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isIconOpen, setIsIconMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setIsIconMenuOpen(true);  
    } else {
      setIsIconMenuOpen(false); 
    }
  };
  
  useEffect(() => {
    handleResize();  
    window.addEventListener("resize", handleResize); 
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleIconMenu = () => {
    setIsIconMenuOpen(!isIconOpen);
  };
  
  return (
    <div className={styles["header-container"]}>
      <div
        className={`${styles["header-left"]} ${isHovered ? styles["expanded"] : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles["logo-container"]}>
          <div
            className={styles["logo"]}
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </div>
        <div className={styles["menu-items"]}>
        <span className={styles["page-number"]}>1/5</span>
        <span className={styles["separator"]}>•</span>
        <span className={styles["menu-itemLeftMain"]}>Overview</span>
        {isHovered && (
          <div className={styles["submenu"]}>
          <span className={styles["menu-itemLeft"]}>Products</span>
          <span className={styles["menu-itemLeft"]}>The Team</span>
          <span className={styles["menu-itemLeftFinal"]}>The News</span>
        </div>
        )}
      </div>
      </div>
      <div className={styles["header-right"]}>
      <div className={styles["headerRight-icon"]}>
          <button
            type="button"
            onClick={toggleIconMenu}
            className="bg-white rounded-md p-2 inline-flex 
            items-center justify-center 
            text-gray-400 hover:text-gray-500 
            hover:bg-gray-100 focus:outline-none 
            focus:ring-2 focus:ring-inset focus:ring-sky-500"
            aria-label="Menu"
          >
            <FiMenu size={20} />
          </button>
        </div>
        {isIconOpen && (
          <div
            className={
              window.innerWidth <= 1024
                ? styles["dropdown-menu"]
                : styles["inline-menu"]
            }
          >
           <span className={styles["menu-itemRigth"]}>Company</span>
        <span className={styles["menu-itemRigth"]}>Resources</span>
        <span className={styles["menu-itemRigth"]}>News</span>

        <div className={styles["social-icons"]}>
        <span className={styles["separator"]}>•</span>
          <FontAwesomeIcon icon={faFacebook} className={styles["social-icon"]} />
          <FontAwesomeIcon icon={faLinkedin} className={styles["social-icon"]} />
          <FontAwesomeIcon icon={faYoutube} className={styles["social-icon"]} />
          <span className={styles["separator"]}>•</span>
        </div>
        <div className={styles["dropdown-containerRight"]}>
        <button
              className={`${styles["animated-button"]} ${isOpen ? styles["active"] : ""}`}
              onClick={toggleMenu}
            >
              Products <DownOutlined className={styles["icon-spacing"]} />
            </button>

      {isOpen && (
        <div className={styles["product-menu"]}>
          <div className={styles["menu-item"]}>
            <img src="path_to_image1" alt="CrystalSound" />
            <div>
              <h4>CrystalSound</h4>
              <p>Lorem Ipsum is j dummy text of the printing and typesetting...</p>
            </div>
          </div>
          <div className={styles["menu-item"]}>
            <img src="path_to_image2" alt="VoiceDNA" />
            <div>
              <h4>VoiceDNA</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
            </div>
          </div>
          <div className={styles["menu-item"]}>
            <img src="path_to_image3" alt="NamiGen" />
            <div>
              <h4>NamiGen</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
            </div>
          </div>
          <div className={styles["menu-item"]}>
            <img src="path_to_image4" alt="VoiceGate" />
            <div>
              <h4>VoiceGate</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
            </div>
          </div>
          <div className={styles["menu-item"]}>
            <img src="path_to_image5" alt="NamiSenseanywhere" />
            <div>
              <h4>NamiSenseanywhere</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
            </div>
          </div>
          <div className={styles["menu-item"]}>
            <img src="path_to_image6" alt="NamiSence" />
            <div>
              <h4>NamiSence</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
            </div>
          </div>
        </div>
      )}
    </div>
     </div>
    )}     
      </div> 
    </div>
  );
}

export default Header;