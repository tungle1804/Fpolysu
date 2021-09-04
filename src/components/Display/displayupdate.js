import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
export default function Display() {
  const data1 = useSelector((state) => state.createbuttons.data);
  const requestingg = useSelector((state) => state.createbuttons.requesting);
  const dataColorMenu = useSelector((state) => state.colormenu.dataColorMenu);
  const opacityMenu = useSelector((state) => state.colormenu.opacityMenu);
  const displayMenu = useSelector((state) => state.displayMenu.displayMenu);
  const displayMenuV2 = useSelector((state) => state.displayMenu.dislayMenuV2);
  console.log(data1);
  const viewDisplayV2 = () => {
    if (displayMenuV2 === "1") {
      return "mmt-app--circle-bottom-right";
    } else if (displayMenuV2 === "2") {
      return "mmt-app--circle-middle-right";
    } else if (displayMenuV2 === "3") {
      return "mmt-app--circle-top-right";
    } else if (displayMenuV2 === "4") {
      return "mmt-app--circle-bottom-left";
    } else if (displayMenuV2 === "5") {
      return "mmt-app--circle-middle-left";
    } else if (displayMenuV2 === "6") {
      return "mmt-app--circle-top-left";
    }
  };
  return (
    <>
      {(() => {
        if (displayMenu == "1") {
          return (
            <>
              <img
                src="../../images/backgroundFinal.jpg"
                style={{ width: "820px", height: "520px" }}
              ></img>
              <div id="metu">
                <div
                  style={{
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    zIndex: 999999,
                  }}
                />
                <div className="mmt-container  mmt-container--full">
                  <div className="mmt-app">
                    {data1 && data1.length > 0
                      ? data1.map((items) => (
                          <>
                            <div
                              style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: "0px",
                                left: "0px",
                                backgroundColor: `${
                                  dataColorMenu ? dataColorMenu : ""
                                }`,
                                opacity: opacityMenu ? opacityMenu : "1",
                                color: "rgb(255, 255, 255)",
                                pointerEvents: "none",
                                zIndex: -1,
                              }}
                            />

                            <span
                              onClick={() => onclick(items.id_button)}
                              className="mmt-menu__item"
                              style={{ display: "flex" }}
                            >
                              <div className="mt-tooltip">
                                <span
                                  className="mmt-button call"
                                  style={{
                                    backgroundColor: `${items.color_background}`,
                                  }}
                                >
                                  {/* <img alt="url" style={{ height: '30px', marginRight: '20px' }} src={`../images/${items.icon}`} className="mmt-button__icon" /> */}
                                  <i
                                    style={{ color: items.color_icon }}
                                    className={` mr-1 my-auto  ${items.icon}`}
                                  />
                                  <span
                                    className="mmt-button__label"
                                    style={{ color: `${items.color_text}` }}
                                  >
                                    {items.name_button}
                                  </span>
                                </span>

                                {items.captionContent && (
                                  <div className="mt-tooltip__text">
                                    {items.captionContent}
                                  </div>
                                )}
                              </div>
                            </span>
                          </>
                        ))
                      : ""}
                  </div>
                </div>{" "}
              </div>
            </>
          );
        } else if (displayMenu == "2") {
          return (
            <>
              <img
                src="../../images/backgroundFinal.jpg"
                style={{ width: "820px", height: "520px" }}
              ></img>
              <div id="metu">
                <div
                  style={{
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    zIndex: 999999,
                  }}
                />
                <div className="mmt-container  mmt-container--fit">
                  <div className="mmt-app">
                    {data1 && data1.length > 0
                      ? data1.map((items) => (
                          <>
                            <div
                              style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: "0px",
                                left: "0px",
                                backgroundColor: `${
                                  dataColorMenu ? dataColorMenu : ""
                                }`,
                                opacity: opacityMenu ? opacityMenu : "1",
                                color: "rgb(255, 255, 255)",
                                pointerEvents: "none",
                                zIndex: -1,
                              }}
                            />
                            <span
                              onClick={() => onclick(items.id_button)}
                              className="mmt-menu__item"
                              style={{ display: "flex" }}
                            >
                              <div className="mt-tooltip">
                                <span
                                  className="mmt-button call"
                                  style={{
                                    backgroundColor: `${items.color_background}`,
                                  }}
                                >
                                  <i
                                    style={{ color: items.color_icon }}
                                    className={` mr-1 my-auto  ${items.icon}`}
                                  />
                                  <span
                                    className="mmt-button__label"
                                    style={{ color: `${items.color_text}` }}
                                  >
                                    {items.name_button}
                                  </span>
                                </span>

                                {items.captionContent && (
                                  <div className="mt-tooltip__text">
                                    <span>{items.captionContent}</span>
                                  </div>
                                )}
                              </div>
                            </span>
                          </>
                        ))
                      : ""}
                  </div>
                </div>{" "}
              </div>
            </>
          );
        } else if (displayMenu == "3") {
          return (
            <>
              {" "}
              <img
                src="../../images/backgroundFinal.jpg"
                style={{ width: "820px", height: "520px" }}
              ></img>
              <div id="metu">
                <div
                  style={{
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    zIndex: 999999,
                  }}
                />
                <div className="mmt-container  ">
                  <div className={`mmt-app mmt-app--circle ${viewDisplayV2()}`}>
                    {data1 && data1.length > 0
                      ? data1.map((items) => (
                          <>
                            {/* <div style={{
                                            position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
                                            backgroundColor: `${dataColorMenu ? dataColorMenu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
                                        }} /> */}
                            <span
                              onClick={() => onclick(items.id_button)}
                              className="mmt-menu__item"
                              style={{ display: "flex" }}
                            >
                              {/* <div className="mt-tooltip"> */}
                              <span className="mmt-button call mmt-button--circle">
                                <span
                                  style={{
                                    backgroundColor: `${dataColorMenu}`,
                                    opacity: opacityMenu ? opacityMenu : "1",
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: "0px",
                                    left: "0px",
                                    borderRadius: "20px",
                                    zIndex: "-1",
                                  }}
                                ></span>
                                <i
                                  style={{ color: items.color_icon }}
                                  className={` mr-1 my-auto  ${items.icon}`}
                                />
                                <span
                                  className="mmt-button__label"
                                  style={{ color: `${items.color_text}` }}
                                >
                                  {items.name_button}

                                  {items.captionContent && (
                                    <div className="mt-tooltip__text">
                                      <span>{items.captionContent}</span>
                                    </div>
                                  )}
                                </span>
                              </span>

                              {/* </div> */}
                            </span>
                          </>
                        ))
                      : ""}
                  </div>
                </div>{" "}
              </div>
            </>
          );
        } else if (displayMenu == "4") {
          return (
            <>
              {" "}
              <img
                src="../../images/backgroundFinal.jpg"
                style={{ width: "820px", height: "520px" }}
              ></img>
              <div id="metu">
                <div
                  style={{
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    zIndex: 999999,
                  }}
                />
                <div className="mmt-container  ">
                  <div className={`mmt-app mmt-app--circle ${viewDisplayV2()}`}>
                    {data1 && data1.length > 0
                      ? data1.map((items) => (
                          <>
                            {/* <div style={{
                                            position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
                                            backgroundColor: `${dataColorMenu ? dataColorMenu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
                                        }} /> */}
                            <span
                              onClick={() => onclick(items.id_button)}
                              className="mmt-menu__item"
                              style={{ display: "flex" }}
                            >
                              {/* <div className="mt-tooltip"> */}
                              <span className="mmt-button call mmt-button--circle">
                                <span
                                  style={{
                                    backgroundColor: `${dataColorMenu}`,
                                    opacity: opacityMenu ? opacityMenu : "1",
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: "0px",
                                    left: "0px",
                                    zIndex: "-1",
                                  }}
                                ></span>
                                <i
                                  style={{ color: items.color_icon }}
                                  className={` mr-1 my-auto  ${items.icon}`}
                                />
                                <span
                                  className="mmt-button__label"
                                  style={{ color: `${items.color_text}` }}
                                >
                                  {items.name_button}

                                  {items.captionContent && (
                                    <div className="mt-tooltip__text">
                                      <span>{items.captionContent}</span>
                                    </div>
                                  )}
                                </span>
                              </span>

                              {/* </div> */}
                            </span>
                          </>
                        ))
                      : ""}
                  </div>
                </div>{" "}
              </div>
            </>
          );
        }
      })()}
    </>
  );
}
