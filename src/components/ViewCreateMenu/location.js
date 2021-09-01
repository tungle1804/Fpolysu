import React from "react";

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-2 pb-2 flex-row"
                        role="tablist"
                    >
                        <li className=" mr-2 last:mr-0 flex-1 text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 border-2 border-gray-300 rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Hình dạng
                            </a>
                        </li>
                        <li className=" flex-1 text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 border-2 border-gray-300 rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Vị trí
                            </a>
                        </li>
                        {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Options
                            </a>
                        </li> */}
                    </ul>
                    <div className="flex flex-col min-w-0  bg-white w-full mb-6 border-2 border-gray-200 rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="block">
                                        {/* <div >
                                            <img className="h-32 w-32" src="images/unnamed.jpg" alt="" />
                                            aasas
                                        </div>
                                        <div>
                                            <img src="images/fit.png" alt="" />aa
                                        </div>
                                        <div>
                                            <img src="images/circle.png" alt="" />aa
                                        </div>
                                        <div>
                                            <img src="images/square.png" alt="" />aa
                                        </div>
                                        aa */}
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="flex">
                                        abc
                                    </div>
                                </div>
                                {/* <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <p>
                                        Efficiently unleash cross-media information without
                                        cross-media value. Quickly maximize timely deliverables for
                                        real-time schemas.
                                        <br />
                                        <br /> Dramatically maintain clicks-and-mortar solutions
                                        without functional solutions.
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender() {
    return (
        <>
            <Tabs color="pink" />
        </>
    );
}