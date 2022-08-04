import React, { useContext, useState } from "react";
import shortid from "shortid";
import { Text, LanguageContext } from "../../shared/context/Language";
import Accordion from "../../shared/IU/Accordion";

import "./ServiceItems.css";
const ServiceItems = () => {
  const lang = useContext(LanguageContext);


  return (
    <div className="service-items-container">
      <ul>
        {lang.dictionary["service-menu"] &&
          lang.dictionary["service-menu"].map((val) => (
            <Accordion
              key={shortid.generate()}
              heading_number={val.id}
              heading={val.title}
              content={
                <div>
                  <p className="service-menu-desc-mobile">
                    {lang.dictionary[val.menuCode] && lang.dictionary[val.menuCode][0].subtitle}
                  </p>
                  <ul className="service-menu_items_mobile">
                    {lang.dictionary[val.menuCode] && lang.dictionary[val.menuCode][1] &&
                      lang.dictionary[val.menuCode][1].map((val) => (
                        <li key={shortid.generate()}>{val.item}</li>
                      ))}
                  </ul>
                  {lang.dictionary[val.menuCode] && lang.dictionary[val.menuCode].length >= 5 && (
                    <div className="service-menu-desc-mobile-wrapper">
                      {lang.dictionary[val.menuCode] &&
                        lang.dictionary[val.menuCode].map((val) => (
                          <p
                            className="service-menu-desc-mobile"
                            key={shortid.generate()}
                          >
                            {val.desc} {lang.dictionary[val.menuCode]}
                          </p>
                        ))}
                    </div>
                  )}
                </div>
              }
            />
          ))}
      </ul>
    </div>
  );
};

export default ServiceItems;
