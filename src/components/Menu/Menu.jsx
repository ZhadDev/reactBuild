import { useState, useEffect } from "react";
import "./Menu.css";
import MenuOption from "./MenuOptions/MenuOptions";
import { useNavigate } from "react-router";
import { Zsvg } from "../libZhad/zSvg/Zsvg";
import PropTypes from "prop-types";

/**
 * Componente principal del menú.
 * @param {Object} props - Las propiedades del componente.
 * @param {string} menuTitle - El título inicial del menú.
 */
const Menu = ({
  menuTitle = "",
  menuTextColor = "black",
  heightTopMenu = "50px",
  menuOptionsBackgroundColor = "",
  widthUserIconImg = "40px",
  heightUserIconImg = "40px",
  UserIcon = "https://unavatar.io/deviantart/spyed",
  widthMenuOptions = "300px",
  widthUserIconMenuOptions = "120px",
  heightUserIconMenuOptions = "120px",
  dataMenuOptions = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(menuTitle);
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    const url = path.split("/");
    const titleURL = url[1];
    navigate(path);
    setSelectedTitle(titleURL);
  }, [navigate]);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOptionClick = (title) => {
    setSelectedTitle(title);
    setIsExpanded(false);
    navigate(`/${title}`);
  };

  return (
    <div className="container-all-menu" style={{ color: menuTextColor }}>
      <div
        className="container-menu-components"
        style={{
          height: heightTopMenu,
          backgroundColor: menuOptionsBackgroundColor,
        }}
      >
        <button className="menu-toggle-button">
          <Zsvg
            icon={"menu"}
            color={"white"}
            fontSize={"18pt"}
            onClick={toggleMenu}
          />
        </button>
        <div className="container-menu-components-title">
          {selectedTitle ? selectedTitle : menuTitle}
        </div>
        <img
          className="container-menu-user-img"
          style={{
            width: widthUserIconImg,
            height: heightUserIconImg,
          }}
          hidden={isExpanded}
          src={UserIcon}
          alt={"icono de usuario"}
        />
      </div>
      {isExpanded && (
        <div
          className="container-menu-options"
          style={{
            width: widthMenuOptions,
            backgroundColor: menuOptionsBackgroundColor,
          }}
        >
          <div className="container-menu-option-user">
            <img
              className="container-menu-option-user-img"
              style={{
                width: widthUserIconMenuOptions,
                height: heightUserIconMenuOptions,
              }}
              src={UserIcon}
              alt={"icono de usuario"}
            />
          </div>
          <hr className="menu-hr-user" />
          {dataMenuOptions.map((option, index) => (
            <MenuOption
              key={index}
              title={option.title}
              iconClass={option.iconClass}
              onClickUpdateTitle={handleOptionClick}
              subMenuOptions={option.subMenuOptions}
            />
          ))}
          <div className="container-menu-footer">
            <p>Juan.cuesta@iptotal.com ©</p>
          </div>
        </div>
      )}
    </div>
  );
};

PropTypes.Menu = {
  menuTitle: PropTypes.string,
  menuTextColor: PropTypes.string,
  heightTopMenu: PropTypes.string,
  menuOptionsBackgroundColor: PropTypes.string,
  widthUserIconImg: PropTypes.string,
  heightUserIconImg: PropTypes.string,
  UserIcon: PropTypes.string,
  widthMenuOptions: PropTypes.string,
  widthUserIconMenuOptions: PropTypes.string,
  heightUserIconMenuOptions: PropTypes.string,
  dataMenuOptions: PropTypes.array,
};

export default Menu;
