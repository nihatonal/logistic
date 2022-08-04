import React, { useState, useContext, useEffect } from "react";

import shortid from "shortid";
import { Text, LanguageContext } from "../shared/context/Language";
import ServiceItems from "./components/ServiceItems";
import Circle from "../shared/IU/Circle";

import "./Services.css";

const Services = (props) => {
  const lang = useContext(LanguageContext);

  const [activeId, setActiveId] = useState("01");
  const [activebg, setActiveBg] = useState("service_bg_1");
  const [activeItem, setActiveItem] = useState(
    lang.dictionary["service-menu"][0].text
  );

  const [selectedMenu, setSelectedMenu] = useState("service-contract");
  const [remainDesc, showRemainDesc] = useState(false);

  useEffect(() => {
    if (activeId === "01") {
      setActiveBg("service_bg_1");
    } else if (activeId === "02") {
      setActiveBg("service_bg_2");
    } else if (activeId === "03") {
      setActiveBg("service_bg_3");
    } else if (activeId === "04") {
      setActiveBg("service_bg_4");
    } else if (activeId === "05") {
      setActiveBg("service_bg_5");
    }
  }, [activeId]);

  return (
    <div className={`services-container`} id={props.id}>
      <div className="services-header-mobile">
        <p className="section-subtitle">
          <Text tid="service-subtitle" />
        </p>
        <h2 className="section-title service-title">
          <Circle className="section-title-circle service-circle" />
          <Text tid="service-title" />
        </h2>
      </div>
      <ServiceItems />
      <div className={`service-menu ${activebg}`}>
        <p className="section-subtitle">
          <Text tid="service-subtitle" />
        </p>
        <h2 className="section-title service-title">
          <Circle
            className="section-title-circle service-circle"
            style={{ backgroundColor: "#FFFFFF" }}
          />
          <Text tid="service-title" />
        </h2>
        <div>
          <ul className="service-menu-items">
            {lang.dictionary["service-menu"] &&
              lang.dictionary["service-menu"].map((val) => (
                <li
                  key={shortid.generate()}
                  onClick={() => {
                    setActiveId(val.id);
                    setActiveItem(val.title);
                    setSelectedMenu(val.menuCode);
                    showRemainDesc(false);
                  }}
                  className={activeId === val.id ? "active-item" : ""}
                >
                  <span>{val.id}</span>
                  {val.title}
                </li>
              ))}
            <ul className="service-menu-item-customs">
              {lang.dictionary["service-customs-menu"] &&
                lang.dictionary["service-customs-menu"].map((val) => (
                  <li key={shortid.generate()}>{val.title}</li>
                ))}
            </ul>
          </ul>
        </div>
      </div>
      <div className="service-menu-content">
        <h3>{activeItem}</h3>
        <p className="service-menu-number">{activeId}</p>
        {!remainDesc ? (
          <div>
            {lang.dictionary[selectedMenu] &&
              lang.dictionary[selectedMenu].map((val) => (
                <p className="service-menu-desc" key={shortid.generate()}>
                  {val.subtitle}
                </p>
              ))}
            <ul className="service-menu_items">
              {lang.dictionary[selectedMenu][1] &&
                lang.dictionary[selectedMenu][1].map((val) => (
                  <li key={shortid.generate()}>{val.item}</li>
                ))}
            </ul>
          </div>
        ) : (
          <div>
            {lang.dictionary[selectedMenu] &&
              lang.dictionary[selectedMenu].map((val) => (
                <p className="service-menu-desc" key={shortid.generate()}>
                  {val.desc}
                </p>
              ))}
          </div>
        )}
        {lang.dictionary[selectedMenu].length > 4 && (
          <button
            disabled={lang.dictionary[selectedMenu].length < 5}
            onClick={() => showRemainDesc(!remainDesc)}
            className="service-menu-btn"
          >
            {!remainDesc ? "Следующее" : " Назад"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Services;
