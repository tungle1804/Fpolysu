import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonService from "../../service/Button/ButtonService";
import MenuService from "../../service/Menu/MenuService";
import { MenuContext } from "../../service/MenuContext";
import * as ReactBootStrap from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, viewPost } from "../../redux/actions/menuAction";
import { encode, reverseString } from "../../utils/index";
import ReactPaginate from "react-paginate";
import ReactLoading from "react-loading";
import "./style.css";
import "./toggles.css";
export default function View({ posts, onlistbutton, requesting }) {
  const [radio, setRadio] = useState();
  const [listmenu, setListMenu] = useState({});
  const [search, setSearch] = useState("");
  const [filterMenu, setFilterMenu] = useState([]);
  const [menuCode, setMenuCode] = useState();
  const [paginate, setPaginate] = useState({
    offset: 0,
    tableData: [],
    orgtableData: [],
    perPage: 5,
    currentPage: 0,
  });
  // useEffect(() => {
  //   // setPaginate({
  //   //   ...paginate,
  //   //   tableData: posts.filter(post => {

  //   //     return post.name_menu.toLowerCase().includes(search.toLowerCase())
  //   //   }),

  //   // })
  //   setFilterMenu(paginate.tableData.filter(post => {
  //     return post.name_menu.toLowerCase().includes(search.toLowerCase())
  // }))

  // }, [search]);
  useEffect(() => {
    // ProductService.getProducts().then(res => {

    //     var slice = res.data.slice(paginate.offset, paginate.offset + paginate.perPage)
    //     setPaginate({
    //         ...paginate,
    //         pageCount: Math.ceil(res.data.length / paginate.perPage),
    //         orgtableData: res.data,
    //         tableData: slice
    //     })

    // }

    // );
    var slice = posts.slice(
      paginate.offset,
      paginate.offset + paginate.perPage
    );
    setPaginate({
      ...paginate,
      pageCount: Math.ceil(posts.length / paginate.perPage),
      orgtableData: posts,
      tableData: slice,
    });
  }, [posts]);
  const handlePageClick = (e) => {
    // console.log(paginate.orgtableData)
    const selectedPage = e.selected;
    const offset = selectedPage * paginate.perPage;

    const data = paginate.orgtableData;
    const slice = data.slice(offset, offset + paginate.perPage);
    setPaginate({
      ...paginate,
      currentPage: selectedPage,
      pageCount: Math.ceil(data.length / paginate.perPage),
      tableData: slice,
    });
  };

  const onChangeGetCode = (menuCode) => {
    setMenuCode(menuCode);
  };
  // const [listbutton, setListButton] = useContext(MenuContext)

  // useEffect(() => {
  //     dispatch(loadPosts())
  // }, [])
  // useEffect(() => {
  //     let email = localStorage.getItem('email')
  //     MenuService.getMenuByEmail(email).then((res) => {
  //         setListMenu(res.data)
  //     })
  // }, [])

  // const onCheckChange = (e) => {

  //     console.log(e.target.value)

  //     setRadio(e.target.value)
  //     console.log(radio)
  // }
  const copy = () => {
    var menuCode = document.getElementById("url");
    menuCode.select();
    navigator.clipboard.writeText(menuCode.value);
    // document.execCommand("copy");
  };
  return (
    <>
      {requesting ? (
        <ReactLoading type="balls" color="#f32" height={467} width={275} />
      ) : (
        <div className=" bg-white rounded shadow-xl p-6 lg:h-full lg:w-full w-screen mb-3 lg:my-0">
          {/* <div className="text-sm text-gray-600 font-normal antialiased tracking-normal">
            Projects &nbsp; / &nbsp; Biltrax IT Project
          </div> */}
          <div className="flex mt-3 pb-4 justify-between border-b-2 border-gray-200">
            <div className="text-base  text-black font-semibold antialiased tracking-normal ">
              Danh Sách Menu
            </div>
            <Link
              to="create-menu"
              className="lg:ml-32 px-4 py-1 self-center text-sm font-medium antialiased rounded bg-blue-800 text-white transform  duration-500 hover:scale-110"
            >
              Tạo Menu
            </Link>
          </div>

          <div className="flex mt-3 w-full">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-full h-10 px-2 text-gray-500 border rounded text-xs"
              placeholder="Tìm Kiếm Menu ..."
            />
          </div>
          <div className="bg-white mt-4 rounded">
            <div className=" bg-gray-100 rounded">
              <div
                className="overflow-auto flex-col "
                style={{ height: "308px" }}
              >
                {paginate.tableData.map((res) => {
                  return (
                    <>
                      <div style={{ textAlign: "right" }}>
                        <ReactBootStrap.DropdownButton
                          key="Success"
                          id={`dropdown-split-variants-Success`}
                          variant={"Success".toLowerCase()}
                          title="Code"
                          size="sm"
                          drop="start"
                          hreft="#"
                          onClick={() => onChangeGetCode(res.menuCode)}
                        >
                          {/* <ReactBootStrap.NavDropdown id="collasible-nav-dropdown"> */}
                          <ReactBootStrap.NavDropdown.Item>
                            {/* <span id="tichhop" className="inline-flex px-2">
                            &lt;script&gt;window.name="{window.localStorage.getItem("email") ? encode(window.localStorage.getItem("email")).concat(menuCode) : ""}
                            "&lt;/script&gt;&lt;script type="text/babel" src="index.js"&gt;&lt;/script&gt;
                          </span> */}
                            <div onClick={copy} className="copy">
                              <input
                                id="url"
                                type="text"
                                data-autoselect
                                readonly
                                value={`<script>window.name = "${
                                  window.localStorage.getItem("email")
                                    ? encode(
                                        window.localStorage.getItem("email")
                                      ).concat(menuCode)
                                    : ""
                                }"</script><script type="text/babel" src="index.js"></script>`}
                              ></input>
                              <div class="input-group-button">
                                <clipboard-copy
                                  value="https://github.com/tungle1804/Fpolysu.git"
                                  aria-label="Copied!"
                                  class="btn btn-sm js-clipboard-copy tooltipped-no-delay ClipboardButton"
                                  data-copy-feedback="Copied!"
                                  data-tooltip-direction="n"
                                  data-hydro-click='{"event_type":"clone_or_download.click","payload":{"feature_clicked":"COPY_URL","git_repository_type":"REPOSITORY","repository_id":378593816,"originating_url":"https://github.com/tungle1804/Fpolysu","user_id":64072868}}'
                                  data-hydro-click-hmac="638d55352c2c04ad8e05bd56248b3fd141aafdbc6fa38c3ee4e6efad653c7dd6"
                                  tabindex="0"
                                  role="button"
                                >
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-paste js-clipboard-clippy-icon d-inline-block"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"
                                    ></path>
                                  </svg>
                                </clipboard-copy>
                              </div>
                            </div>
                          </ReactBootStrap.NavDropdown.Item>
                          {/* </ReactBootStrap.NavDropdown> */}
                        </ReactBootStrap.DropdownButton>
                      </div>
                      <div
                        onClick={() => onlistbutton(res.id)}
                        className="flex-col cursor-pointer rounded hover:bg-blue-100"
                      >
                        <div className="py-3 px-3 cursor-pointer text-gray-700 rounded text-sm font-normal antialiased tracking-normal">
                          {res.name_menu}
                        </div>
                        <div className="flex px-3 justify-between">
                          <div className="flex">
                            <div className="bg-red-500 rounded h-4 w-4 p-1">
                              <svg
                                className="h-2 w-2 text-white"
                                fill="currentColor "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"
                                />
                              </svg>
                            </div>
                            <div className="font-bold text-gray-500 ml-1 text-xs">
                              NITSWEBAPP-01
                            </div>
                          </div>

                          <Link
                            to={`/admin/update-menu/${res.id_menu}`}
                            class=" inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-600 border-blue-600 text-gray-100 hover:bg-blue-500 hover:border-blue-500 hover:text-gray-100"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-airplay -mx-2 leading-5"
                            >
                              <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                              <polygon points="12 15 17 21 7 21 12 15"></polygon>
                            </svg>
                          </Link>

                          {/* <button class=" inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-green-600 border-green-600 text-gray-100 hover:bg-green-500 hover:border-green-500 hover:text-gray-100"> */}
                          {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-archive -mx-2 leading-5"
                        >
                          <polyline points="21 8 21 21 3 21 3 8"></polyline>
                          <rect x="1" y="3" width="22" height="5"></rect>
                          <line x1="10" y1="12" x2="14" y2="12"></line>
                        </svg> */}
                          {/* </button> */}
                          {/* <div className="w-5 py-1 relative my-1 cursor-pointer">
                                                    <div className="h-3 bg-teal-600 rounded-full">
                                                        <div className="-ml-2 mt-p w-4 h-4 absolute transition-all transform ease-linear duration-100 flex items-center justify-center rounded-full bg-white shadow-toggle border-gray-300 top-0 left-96"></div>
                                                    </div>
                                                </div> */}
                          <div className="flex  justify-center  ">
                            <label className="flex items-center cursor-pointer">
                              <div className="relative">
                                <input
                                  onClick={() => onlistbutton(res.id)}
                                  id="toogleA"
                                  className="hidden"
                                  type="checkbox"
                                  onChange={(event) => {
                                    let checked = event.target.checked;
                                    posts.map((data) => {
                                      if (data.id === res.id) {
                                        data.status = checked;
                                      }
                                      MenuService.updateMenu(data, data.id);
                                      // setRadio(data.status)
                                      console.log(data);

                                      return data;
                                    });
                                  }}
                                  checked={res.status}
                                ></input>

                                <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner" />

                                <div className="toggle__dot absolute w-6 h-6  rounded-full border-4  shadow inset-y-0 left-0" />
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="border mt-3" />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex  justify-between px-1 text-center items-center mt-6">
              <div className="p-2">
                <button className="flex rounded px-4 py-2 focus:outline-none text-gray-500 hover:bg-blue-100 justify-around">
                  {/*                                    <svg class="h-3 w-3 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M441.156 322.876L392.49 275.49a8.523 8.523 0 00-11.93.017l-81.894 80.299V8.533A8.536 8.536 0 00290.133 0h-68.267a8.536 8.536 0 00-8.533 8.533v347.273l-81.894-80.299a8.528 8.528 0 00-11.921-.017l-48.666 47.386a8.503 8.503 0 00-2.586 6.11c0 2.304.939 4.506 2.586 6.11l179.2 174.481A8.508 8.508 0 00256 512c2.15 0 4.292-.811 5.956-2.423l179.2-174.481a8.526 8.526 0 002.577-6.11c0-2.304-.93-4.506-2.577-6.11z"/></svg>*/}
                  <svg
                    className="h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.516 14.224c-2.262-2.432-2.222-6.244.128-8.611a6.074 6.074 0 013.414-1.736L8.989 1.8a8.112 8.112 0 00-4.797 2.351c-3.149 3.17-3.187 8.289-.123 11.531l-1.741 1.752 5.51.301-.015-5.834-2.307 2.323zm6.647-11.959l.015 5.834 2.307-2.322c2.262 2.434 2.222 6.246-.128 8.611a6.07 6.07 0 01-3.414 1.736l.069 2.076a8.122 8.122 0 004.798-2.35c3.148-3.172 3.186-8.291.122-11.531l1.741-1.754-5.51-.3z"
                    />
                  </svg>
                </button>
              </div>
              <div className=" flex pl-0 list-none rounded my-2">
                <div className="place-self-center">
                  {" "}
                  <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageClassName={
                      "relative block py-2 px-2 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200"
                    }
                    pageCount={paginate.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousClassName={
                      "relative block py-2 px-2 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200"
                    }
                    subContainerClassName={"pages pagination"}
                    nextClassName={
                      "relative block py-2 px-2 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200"
                    }
                    activeClassName={"active"}
                  />
                </div>
              </div>
              <div className="flex px-3 py-1 self-center text-sm antialiased rounded-md text-gray-600 ">
                Total : {posts.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
