import { React, useState } from "react";
import HeaderLanding from "./header";
import Sidebar from "./sidebar";
import Hssd1 from '../Hssd1';
import Hssd2 from '../Hssd2';
import Hssd3 from '../Hssd3';
import Hssd5 from '../Hssd5';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";



export default function Navbar() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <div className="h-screen">
      <div className="flex sticky top-0 justify-between items-center bg-white border-b-2 shadow-xl ">
        <HeaderLanding sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <Router>
        <div className="flex bg-white">
          <div className="flex-1 flex flex-col">

            {/* <div class="relative min-h-screen md:flex"></div> */}
            <div className="flex h-screen">

              {/* sidebar */}
              <div className="">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
              </div>

              {/* main */}

              <main className="flex flex-col w-full bg-white overflow-y-auto mb-14">

                <div className="flex w-full mx-auto px-6 py-8">
                  <div className="flex flex-col w-full text-gray-900 text-xl border-4 border-gray-900 ">

                    <Switch>
                      <Route exact path="/hssd1">
                        <Hssd1></Hssd1>

                      </Route>
                      <Route exact path="/hssd2">
                        <Hssd2></Hssd2>

                      </Route>

                      <Route exact path="/hssd3">
                        <Hssd3></Hssd3>
                      </Route>
                      <Route exact path="/hssd5">
                        <Hssd5></Hssd5>
                      </Route>
                    </Switch>

                    <div className="row my-5 ">
                      <div className="w-full mx-auto">
                        <div className="sm:grid grid-cols-4 gap-10 mx-auto px-16 no-underline">
                          <div className="col-start-1 col-end-3 my-2">
                            <a href="#">
                              <div className="h-full p-6 dark:bg-gray-800 bg-red-100 hover:shadow-xl rounded border-b-4 border-red-500 shadow-md">
                                <h3 className="text-xl mb-3 font-semibold inline-flex">
                                  <svg
                                    className="mr-2"
                                    width={24}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  Prev
                                </h3>
                                <p className="text-lg">What is Lorem Ipsum?</p>
                              </div>
                            </a>
                          </div>
                          <div className="col-end-5 col-span-2 my-2">
                            <a href="#">
                              <div className="h-full p-6 dark:bg-gray-800 bg-red-100 hover:shadow-xl rounded border-b-4 border-red-500 shadow-md text-right">
                                <h3 className="text-xl mb-3 font-semibold inline-flex ">
                                  Next
                                  <svg
                                    className="ml-2"
                                    width={24}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </h3>
                                <p className="text-lg">Why do we use it?</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container m-auto px-6 pb-40 pt-10">
                      <div className="flex flex-col md:flex-row items-center justify-between relative w-82 h-auto md:h-58 bg-100 shadow-2xl rounded-lg p-8">
                        <div className="w-8/12 text-2xl">
                          <img
                            alt="quote"
                            className="float-left mr-1"
                            src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                          />
                          <span className="flex ml-10">
                            Was this page helpful ?
                          </span>
                        </div>
                        <div className="relative shadow-md font-medium my-5 py-2 mr-10 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-green-700 rounded text-lg text-center w-48">
                          <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                          Helpful
                        </div>
                        <div className="relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-red-500 rounded text-lg text-center w-48">
                          <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                          Unhelpful
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n::-webkit-scrollbar-thumb {\n  background: linear-gradient(13deg, #7bcfeb 14%, #e685d3 64%);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);\n}\n::-webkit-scrollbar-track {\n  background: #ffffff;\n  border-radius: 10px;\n  box-shadow: inset 7px 10px 12px #f0f0f0;\n}\n",
          }}
        />
      </Router>
      </div>
    </>
  );
};

