(function () {
  "use strict";

  // eslint-disable-next-line no-undef
  // class DisplayWebsite extends React.Component {
  //     constructor(props) {
  //         super(props);
  //         this.state = {
  //             button: [],
  //             displayType: "",
  //             displayTypeV2: "",
  //             show: false,
  //             input: null,
  //             dataInput: { valueInput: null, nameInput: null }
  //             // valueInput: {},
  //             // nameInput: {},

  //         };
  //         this.showModal = this.showModal.bind(this);
  //         this.hideModal = this.hideModal.bind(this);
  //         this.viewDisplayV2 = this.viewDisplayV2.bind(this);
  //         this.onHandleChangeInput = this.onHandleChangeInput.bind(this);
  //         this.onHandleChange = this.onHandleChange.bind(this);
  //         this.onSubmitform = this.onSubmitform.bind(this);
  //     }

  //     showModal = (id) => {
  //         this.setState({ show: true });
  //         console.log(id)
  //         fetch(`http://localhost:8080/api/v1/getModalByButton/${id}`, {
  //             method: "POST",
  //         })
  //             .then(function (response) {
  //                 return response.json();
  //             }).then(data => {
  //                 console.log(data)
  //                 this.setState({ input: data });
  //             })

  //     };

  //     hideModal = () => {
  //         this.setState({ show: false });
  //     };
  //     viewDisplayV2 = (displayTypeV2) => {
  //         if (displayTypeV2 === '1') {
  //             return ('mmt-app--circle-bottom-right')
  //         } else if (displayTypeV2 === '2') {
  //             return ('mmt-app--circle-middle-right')
  //         } else if (displayTypeV2 === '3') {
  //             return ('mmt-app--circle-top-right')
  //         } else if (displayTypeV2 === '4') {
  //             return ('mmt-app--circle-bottom-left')
  //         } else if (displayTypeV2 === '5') {
  //             return ('mmt-app--circle-middle-left')
  //         } else if (displayTypeV2 === '6') {
  //             return ('mmt-app--circle-top-left')
  //         }
  //     }
  //     componentDidMount() {

  //         if (!window.name.length > 21) {
  //             fetch(`http://localhost:8080/api/v1/getMenuByStatus/${decode(window.name)}`, {
  //                 method: "GET",
  //             })

  //                 .then(function (response) {
  //                     return response.json();
  //                 })
  //                 .then(data => {
  //                     console.log(data);
  //                     this.setState({ displayType: data[0].menuType })
  //                     this.setState({ displayTypeV2: data[0].menuLocation })
  //                     var maMN = data[0].id;
  //                     var myHeaders = new Headers();
  //                     myHeaders.append("Content-Type", "application/json");

  //                     var raw = JSON.stringify({
  //                         menuId: maMN,
  //                     });

  //                     var requestOptions = {
  //                         method: "POST",
  //                         headers: myHeaders,
  //                         body: raw,
  //                         redirect: "follow",
  //                     };

  //                     fetch("http://localhost:8080/api/v1/activityMenu", requestOptions)
  //                         .then((response) => response.text())
  //                         .then((result) => console.log("getActivityMenu", result))
  //                         .catch((error) => console.log("error", error));
  //                     fetch(`http://localhost:8080/api/v1/getButtonByIDMenu/${maMN}`, {
  //                         method: "GET",
  //                     })
  //                         .then(function (response) {
  //                             return response.json();
  //                         })
  //                         .then(data => {
  //                             console.log(data)
  //                             this.setState({ button: data });

  //                         })
  //                 });
  //         } else {

  //             const email = window.name.split('MU')[0];
  //             const menuSplit = reverseString(reverseString(window.name.split('MU')[1]).concat('UM'));
  //             // const menuCode = reverseString((menuSplit).concat('MU'));
  //             console.log(menuSplit)
  //             fetch(`http://localhost:8080/api/v1/getMenuByStatus/${decode(email)}`, {

  //                 method: "GET",
  //             })
  //                 .then(function (response) {
  //                     return response.json();
  //                 })
  //                 .then(data => {
  //                     console.log(data)
  //                     for (let i = 0; i < data.length; i++) {
  //                         if ((data[i].menuCode && data[i].menuCode.trim()) === (menuSplit && menuSplit.trim())) {
  //                             fetch(`http://localhost:8080/api/v1/getMenuByMenuCode/${menuSplit}`, {
  //                                 method: "POST",
  //                             })
  //                                 .then(function (response) {
  //                                     return response.json();
  //                                 })
  //                                 .then(data => {

  //                                     console.log(data);
  //                                     this.setState({ displayType: data[0].menuType })
  //                                     this.setState({ displayTypeV2: data[0].menuLocation })
  //                                     var maMN = data[0].id;
  //                                     var myHeaders = new Headers();
  //                                     myHeaders.append("Content-Type", "application/json");

  //                                     var raw = JSON.stringify({
  //                                         menuId: maMN,
  //                                     });

  //                                     var requestOptions = {
  //                                         method: "POST",
  //                                         headers: myHeaders,
  //                                         body: raw,
  //                                         redirect: "follow",
  //                                     };

  //                                     fetch("http://localhost:8080/api/v1/activityMenu", requestOptions)
  //                                         .then((response) => response.text())
  //                                         .then((result) => console.log("getActivityMenu", result))
  //                                         .catch((error) => console.log("error", error));
  //                                     fetch(`http://localhost:8080/api/v1/getButtonByIDMenu/${maMN}`, {
  //                                         method: "GET",
  //                                     })
  //                                         .then(function (response) {
  //                                             return response.json();
  //                                         })
  //                                         .then(data => {
  //                                             console.log(data)
  //                                             this.setState({ button: data });

  //                                         })

  //                                 })
  //                         }

  //                     }
  //                     // var menuCode = data[0].menuCode

  //                 });
  //             console.log(email)
  //         }

  //     }
  //     onHandleChangeInput = (e) => {
  //         const { name } = e.target;
  //         this.setState({ ...this.state.dataInput, valueInput: e.target.value, nameInput: name })
  //         console.log(this.state.dataInput)
  //     }

  //     onSubmitform = () => {

  //         console.log(this.state.valueInput)
  //         //  var newArray = Object.keys(idInput)
  //         // var newArrayValue = Object.values(idInput)
  //         // let data = {
  //         //     dataOfCustomers: [{
  //         //         fullName: createData.fullName,
  //         //         phone: createData.phone,
  //         //         emailCustomer: createData.emailCustomer,
  //         //         address: createData.address,
  //         //         conTent: createData.conTent,
  //         //         notes: createData.notes,
  //         //         users: { email: email }, createDate: getCurrentDate()
  //         //     }]
  //         //     , modal: []
  //         // }
  //         // for (let i = 0; i < newArray.length; i++) {
  //         //     let modal = { id: newArray[i], inputValue: newArrayValue[i] };
  //         //     data.modal.push(modal)
  //         // }

  //         // dispatch(fetchCreateData(data))

  //     }
  //     onHandleChange = (e) => {
  //         // const { name } = e.target;
  //         // setCreateData({
  //         //     ...createData,
  //         //     [name]: e.target.value
  //         // })
  //     }

  //     render() {
  //         console.log(this.state.displayType)
  //         return (
  //             <>
  //                 {(() => {
  //                     if (this.state.displayType == "1") {
  //                         return (<>
  //                             <Modals show={this.state.show} handleClose={this.hideModal} input={this.state.input} onHandleChangeInput={this.onHandleChangeInput} onSubmitform={this.onSubmitform} >
  //                                 <p>tubnganhle</p>
  //                             </Modals>
  //                             <div id="metu">
  //                                 <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', zIndex: 999999 }} />
  //                                 <div className="mmt-container  mmt-container--full">
  //                                     <div className="mmt-app">
  //                                         {(this.state.button && this.state.button.length > 0) ? this.state.button.map(items => (
  //                                             <>

  //                                                 <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', backgroundColor: `${items.menu.color_menu}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1 }} />
  //                                                 <span onClick={() => this.showModal(items.id)} className="mmt-menu__item" style={{ display: 'flex' }}><div className="mt-tooltip">
  //                                                     <span className="mmt-button call" style={{ backgroundColor: `${items.color_background}` }}>
  //                                                         <img alt="url" style={{ height: '30px', marginRight: '20px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
  //                                                         <span className="mmt-button__label" style={{ color: `${items.color_text}` }}>{items.name_button}</span></span>

  //                                                 </div></span>
  //                                             </>

  //                                         )

  //                                         ) : ''}
  //                                     </div></div>
  //                             </div>
  //                         </>)
  //                     } else if (this.state.displayType == "2") {
  //                         return (<>
  //                             <div id="metu">
  //                                 <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', zIndex: 999999 }} />
  //                                 <div className="mmt-container  mmt-container--fit">
  //                                     <div className="mmt-app">
  //                                         {(this.state.button && this.state.button.length > 0) ? this.state.button.map(items => (
  //                                             <>
  //                                                 <div style={{
  //                                                     position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
  //                                                     backgroundColor: `${items.menu.color_menu}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
  //                                                 }} />
  //                                                 <span onClick={() => onclick(items.id_button)} className="mmt-menu__item" style={{ display: 'flex' }}><div className="mt-tooltip">
  //                                                     <span className="mmt-button call" style={{ backgroundColor: `${items.color_background}` }}>
  //                                                         <img alt="url" style={{ height: '30px', marginRight: '20px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
  //                                                         <span className="mmt-button__label" style={{ color: `${items.color_text}` }} >{items.name_button}</span></span>

  //                                                     {
  //                                                         items.captionContent &&
  //                                                         <div className="mt-tooltip_text">
  //                                                             <span>{items.captionContent}</span>
  //                                                         </div>
  //                                                     }

  //                                                 </div></span>
  //                                             </>

  //                                         )

  //                                         ) : ''}</div></div>    </div>
  //                         </>)

  //                     }
  //                     else if (this.state.displayType == "3") {
  //                         return (<>
  //                             <div className="mmt-container">
  //                                 <div className={`mmt-app mmt-app--circle ${this.viewDisplayV2(this.menuLocation)}`}>
  //                                     {(this.state.button && this.state.button.length > 0) ? this.state.button.map(items => (
  //                                         <>
  //                                             {/* <div style={{
  //                                     position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
  //                                     backgroundColor: `${dataColorMenu ? dataColorMenu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
  //                                 }} /> */}
  //                                             <span className="mmt-menu__item" style={{ display: 'flex' }}>
  //                                                 {/* <div className="mt-tooltip"> */}
  //                                                 <span className="mmt-button call mmt-button--circle" >
  //                                                     <span style={{ backgroundColor: `${items.menu.color_menu}`, opacity: 1, position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px", borderRadius: "20px", zIndex: "-1" }}></span>
  //                                                     <img alt="url" style={{ height: '30px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
  //                                                     <span className="mmt-button__label" style={{ color: `${items.color_text}` }} >{items.name_button}</span></span>

  //                                                 {/* </div> */}
  //                                             </span>
  //                                         </>

  //                                     )

  //                                     ) : ''}</div></div>
  //                         </>)

  //                     }
  //                     else if (this.state.displayType === "4") {
  //                         return (<> <div className="mmt-container">
  //                             <div className={`mmt-app mmt-app--circle ${this.viewDisplayV2(this.displayTypeV2)} `}>
  //                                 {(this.state.button && this.state.button.length > 0) ? this.state.button.map(items => (
  //                                     <>
  //                                         {/* <div style={{
  //                                         position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
  //                                         backgroundColor: `${dataColorMenu ? dataColorMenu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
  //                                     }} /> */}
  //                                         <span onClick={() => onclick(items.id_button)} className="mmt-menu__item" style={{ display: 'flex' }}>
  //                                             {/* <div className="mt-tooltip"> */}
  //                                             <span className="mmt-button call mmt-button--circle" >
  //                                                 <span style={{ backgroundColor: `${items.menu.color_menu}`, opacity: 1, position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px", zIndex: "-1" }}></span>
  //                                                 <img alt="url" style={{ height: '30px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
  //                                                 <span className="mmt-button__label" style={{ color: `${items.color_text}` }} >{items.name_button}</span></span>

  //                                             {/* </div> */}
  //                                         </span>
  //                                     </>

  //                                 )

  //                                 ) : ''}</div></div></>)

  //                     }
  //                 })()}

  //             </>
  //         )

  //     }

  // }

  const DisplayWebsite = () => {
    const [button, setButton] = React.useState([]);
    const [displayType, setDisplayType] = React.useState("");
    const [displayTypeV2, setDisplayTypeV2] = React.useState("");
    const [toDisplayTime, setToDisplayTime] = React.useState(2360);
    const [fromDisplayTime, setFromDisplayTime] = React.useState(0);
    const [show, setShow] = React.useState(false);
    const [input, setInput] = React.useState("");
    const [createData, setCreateData] = React.useState({});
    const [idInput, setIDInput] = React.useState({});
    const [email, setEmail] = React.useState("");
    const [typeButton, setTypeButton] = React.useState("");
    const [typeLink, setTypeLink] = React.useState("");
    const [timer, setTimer] = React.useState("");
    // const [moment,setMoment]=React.useState("");

    // React.useEffect(() => {
    //   console.log("ssssss");
    //   const script = document.createElement("script");
    //   script.src = "https://unpkg.com/react@16/umd/react.production.min.js";
    //   script.async = true;

    //   const script1 = document.createElement("script");
    //   script1.src =
    //     "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js";
    //   script1.async = true;

    //   const script2 = document.createElement("script");
    //   script2.src = "https://unpkg.com/@babel/standalone/babel.min.js";
    //   script2.async = true;

    //   document.body.appendChild(script);

    //   document.body.appendChild(script1);

    //   document.body.appendChild(script2);
    // }, []);
    let ip_address;
    let user_address;
    let languages;
    let supplier;
    React.useEffect(() => {
      const interval = setInterval(() => {
        console.log("This will run every second!");
        var time = Number(
          String(
            (new Date().getHours() < 10 ? "0" : "") + new Date().getHours()
          ) +
            String(
              (new Date().getMinutes() < 10 ? "0" : "") +
                new Date().getMinutes()
            )
        );

        setTimer(time);
      }, 1000);

      // This is important, you must clear your interval when component unmounts
      return () => clearInterval(interval);
    }, []);
    React.useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://use.fontawesome.com/releases/v5.15.4/js/all.js";
      script.async = true;

      const script1 = document.createElement("script");
      script1.src = "https://rawgit.com/moment/moment/2.2.1/min/moment.min.js";
      document.body.appendChild(script);
      document.body.appendChild(script1);

      const link = document.createElement("Link");
      link.src =
        "https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js";

      document.head.appendChild(link);

      const script2 = document.createElement("script");
      script2.src = "//cdn.jsdelivr.net/npm/sweetalert2@11";
      document.body.appendChild(script2);
      // <script src="https://example.com/example-framework.js" crossorigin="anonymous"></script>
      // const script3 = document.createElement("script");
      // script3.src = "https://example.com/example-framework.js";
      // document.head.appendChild(script3);
      // document.head.appendChild(script2);
      // document.body.appendChild(script1);
      // document.body.appendChild(script2);
    }, []);

    const showModal = (id) => {
      // import Swal from "sweetalert2";

      setShow(true);
      fetch(`http://192.168.1.7:8080/api/v1/getModalByButton/${id}`, {
        method: "POST",
      })
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setInput(data);
        });
    };
    const hideModal = () => {
      setShow(false);
    };
    const viewDisplayV2 = (displayTypeV2) => {
      if (displayTypeV2 === "1") {
        return "mmt-app--circle-bottom-right";
      } else if (displayTypeV2 === "2") {
        return "mmt-app--circle-middle-right";
      } else if (displayTypeV2 === "3") {
        return "mmt-app--circle-top-right";
      } else if (displayTypeV2 === "4") {
        return "mmt-app--circle-bottom-left";
      } else if (displayTypeV2 === "5") {
        return "mmt-app--circle-middle-left";
      } else if (displayTypeV2 === "6") {
        return "mmt-app--circle-top-left";
      }
    };

    React.useEffect(() => {
      // console.log(moment("12:30:00 PM", "h:mm:ss a").minutes());

      // if (timer == "38") {
      if (!(window.name.length > 21)) {
        fetch(
          `http://192.168.1.7:8080/api/v1/getMenuByStatus/${decode(
            window.name
          )}`,
          {
            method: "GET",
          }
        )
          .then(function (response) {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setEmail(data[0].email);
            setDisplayType(data[0].menuType ? data[0].menuType : "");
            setDisplayTypeV2(data[0].menuLocation ? data[0].menuLocation : "");
            setFromDisplayTime(
              data[0].fromDisplayTime != 0 ? data[0].fromDisplayTime : 0
            );

            setToDisplayTime(
              data[0].toDisplayTime ? data[0].toDisplayTime : 2360
            );
            // setTypeButton(data[0].typeButton ? data[0].typeButton : "");
            // setTypeLink(data[0].link ? data[0].link : "#");
            var maMN = data[0].id;
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
              menuId: maMN,
            });

            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow",
            };

            fetch("http://192.168.1.7:8080/api/v1/activityMenu", requestOptions)
              .then((response) => response.text())
              .then((result) => console.log("getActivityMenu", result))
              .catch((error) => console.log("error", error));
            fetch(`http://192.168.1.7:8080/api/v1/getButtonByIDMenu/${maMN}`, {
              method: "GET",
            })
              .then(function (response) {
                return response.json();
              })
              .then((data) => {
                console.log(data);
                this.setState({ button: data });
              });
          });
      } else {
        const email = window.name.split("MU")[0];

        if (email && email != "") {
          setEmail(decode(email));
        }
        const menuSplit = reverseString(
          reverseString(window.name.split("MU")[1]).concat("UM")
        );
        console.log(decode(email));
        // const menuCode = reverseString((menuSplit).concat('MU'));
        console.log(menuSplit);
        fetch(
          `http://192.168.1.7:8080/api/v1/getMenuByStatus/${decode(email)}`,
          {
            method: "GET",
          }
        )
          .then(function (response) {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
              if (
                (data[i].menuCode && data[i].menuCode.trim()) ===
                (menuSplit && menuSplit.trim())
              ) {
                fetch(
                  `http://192.168.1.7:8080/api/v1/getMenuByMenuCode/${menuSplit}`,
                  {
                    method: "POST",
                  }
                )
                  .then(function (response) {
                    return response.json();
                  })
                  .then((data) => {
                    console.log(data);
                    setDisplayType(data[0].menuType ? data[0].menuType : "");
                    setDisplayTypeV2(
                      data[0].menuLocation ? data[0].menuLocation : ""
                    );
                    setFromDisplayTime(
                      data[0].fromDisplayTime != 0 ? data[0].fromDisplayTime : 0
                    );
                    setToDisplayTime(
                      data[0].toDisplayTime ? data[0].toDisplayTime : "2360"
                    );
                    var maMN = data[0].id;
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");

                    var raw = JSON.stringify({
                      menuId: maMN,
                    });

                    var requestOptions = {
                      method: "POST",
                      headers: myHeaders,
                      body: raw,
                      redirect: "follow",
                    };

                    fetch(
                      "http://192.168.1.7:8080/api/v1/activityMenu",
                      requestOptions
                    )
                      .then((response) => response.text())
                      .then((result) => console.log("getActivityMenu", result))
                      .catch((error) => console.log("error", error));
                    fetch(
                      `http://192.168.1.7:8080/api/v1/getButtonByIDMenu/${maMN}`,
                      {
                        method: "GET",
                      }
                    )
                      .then(function (response) {
                        return response.json();
                      })
                      .then((data) => {
                        // setTypeButton(data[0].typeButton ? data[0].typeButton : "");
                        // setTypeLink(data[0].link ? data[0].link : "#");
                        console.log(data);
                        setButton(data);
                      });
                  });
              }
            }
          });
      }
      // }
    }, []);
    React.useEffect(() => {
      fetch(
        `https://api.ipdata.co/?api-key=c0d47b87f4cea32d0e7a1131837aa74602c7a4c33d07e3846c5b0b84`,
        { method: "GET" }
      )
        .then(function (response) {
          return response.json();
        })
        .then((data3) => {
          ip_address = data3.ip;
          user_address = data3.city;
          languages = data3.languages[0].name;
          supplier = data3.asn.name;
        });
    }, []);
    const onHandleChange = (e) => {
      const { name } = e.target;
      setCreateData({
        ...createData,
        [name]: e.target.value,
      });
    };
    const onHandleChangeInput = (e) => {
      const { name } = e.target;
      setIDInput({
        ...idInput,
        [name]: e.target.value,
      });
    };
    const handleCreateData = () => {
      var newArray = Object.keys(idInput);
      var newArrayValue = Object.values(idInput);
      let data = {
        dataOfCustomers: [
          {
            fullName: createData.fullName,
            phone: createData.phone,
            emailCustomer: createData.emailCustomer,
            address: createData.address,
            conTent: createData.content,
            notes: createData.notes,
            users: { email: email },
            createDate: getCurrentDate(),
          },
        ],
        modal: [],
      };
      for (let i = 0; i < newArray.length; i++) {
        let modal = { id: newArray[i], inputValue: newArrayValue[i] };
        data.modal.push(modal);
      }

      try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };
        fetch(`http://192.168.1.7:8080/api/v1/dataofcustomer`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            console.log("saveDataCustomer", result);
            Swal.fire(
              "Th??nh c??ng",
              "B???n ???? g???i th??ng tin th??nh c??ng",
              "success"
            );
          });
        setShow(false).catch((error) => console.log("error", error));
      } catch (error) {
        Swal.fire("L???i h??? th???ng", "L???i h??? th???ng,vui l??ng th??? l???i sau", "error");
        console.error(error);
      }

      // dispatch(fetchCreateData(data))
    };

    const displayType1Link = (items) => {
      return (
        <>
          <a href={items.link}>
            <span
              className="mmt-button call"
              style={{
                backgroundColor: `${items.color_background}`,
              }}
            >
              {/* <img
                alt="url"
                style={{
                  height: "30px",
                  marginRight: "20px",
                }}
                src={`../images/${items.icon}`}
                className="mmt-button__icon"
              /> */}
              <i
                style={{
                  color: items.color_icon,
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  boxSizing: "border-box",
                }}
                className={` mr-1 my-auto  ${items.icon}`}
              />
              <span
                className="mmt-button__label"
                style={{
                  color: `${items.color_text}`,
                }}
              >
                {items.name_button}
              </span>
              {items.captionContent && (
                <div className="mt-tooltip__text">{items.captionContent}</div>
              )}
            </span>
          </a>
        </>
      );
    };
    const displayType1Call = (items) => {
      return (
        <>
          <a href={`tel:${items.link}`}>
            <span
              className="mmt-button call"
              style={{
                backgroundColor: `${items.color_background}`,
              }}
            >
              {/* <img
                alt="url"
                style={{
                  height: "30px",
                  marginRight: "20px",
                }}
                src={`../images/${items.icon}`}
                className="mmt-button__icon"
              /> */}
              <i
                style={{
                  color: items.color_icon,
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  boxSizing: "border-box",
                }}
                className={` mr-1 my-auto  ${items.icon}`}
              />
              <span
                className="mmt-button__label"
                style={{
                  color: `${items.color_text}`,
                }}
              >
                {items.name_button}
              </span>
              {items.captionContent && (
                <div className="mt-tooltip__text">{items.captionContent}</div>
              )}
            </span>
          </a>
        </>
      );
    };
    function displayType1Modal(items) {
      return (
        <>
          <span
            onClick={() => showModal(items.id)}
            className="mmt-button call"
            style={{
              backgroundColor: `${items.color_background}`,
            }}
          >
            {/* <img
              alt="url"
              style={{
                height: "30px",
                marginRight: "20px",
              }}
              src={`../images/${items.icon}`}
              className="mmt-button__icon"
            /> */}
            <i
              style={{
                color: items.color_icon,
                width: "20px",
                height: "20px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
              className={` mr-1 my-auto  ${items.icon}`}
            />
            <span
              className="mmt-button__label"
              style={{
                color: `${items.color_text}`,
              }}
            >
              {items.name_button}
              {items.captionContent && (
                <div className="mt-tooltip__text">{items.captionContent}</div>
              )}
            </span>
          </span>
        </>
      );
    }
    const displayType2Link = (items) => {
      return (
        <>
          <a href={items.link}>
            <span
              className="mmt-button call"
              style={{
                backgroundColor: `${items.color_background}`,
              }}
            >
              <i
                style={{
                  color: items.color_icon,
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  boxSizing: "border-box",
                }}
                className={` mr-1 my-auto  ${items.icon}`}
              />
              <span
                className="mmt-button__label"
                style={{ color: `${items.color_text}` }}
              >
                {items.name_button}
                {items.captionContent && (
                  <div className="mt-tooltip__text">{items.captionContent}</div>
                )}
              </span>
            </span>
          </a>
        </>
      );
    };
    const displayType2Call = (items) => {
      return (
        <>
          <a href={`tel:${items.link}`}>
            <span
              className="mmt-button call"
              style={{
                backgroundColor: `${items.color_background}`,
              }}
            >
              <i
                style={{
                  color: items.color_icon,
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  boxSizing: "border-box",
                }}
                className={` mr-1 my-auto  ${items.icon}`}
              />
              <span
                className="mmt-button__label"
                style={{ color: `${items.color_text}` }}
              >
                {items.name_button}
                {items.captionContent && (
                  <div className="mt-tooltip__text">{items.captionContent}</div>
                )}
              </span>
            </span>
          </a>
        </>
      );
    };
    const displayType2Modal = (items) => {
      return (
        <>
          <span
            onClick={() => showModal(items.id)}
            className="mmt-button call"
            style={{
              backgroundColor: `${items.color_background}`,
            }}
          >
            {/* <img
              alt="url"
              style={{
                height: "30px",
                marginRight: "20px",
              }}
              src={`../images/${items.icon}`}
              className="mmt-button__icon"
            /> */}
            <i
              style={{
                color: items.color_icon,
                width: "20px",
                height: "20px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
              className={` mr-1 my-auto  ${items.icon}`}
            />
            <span
              className="mmt-button__label"
              style={{ color: `${items.color_text}` }}
            >
              {items.name_button}
              {items.captionContent && (
                <div className="mt-tooltip__text">{items.captionContent}</div>
              )}
            </span>
          </span>
        </>
      );
    };
    const displayType3Link = (items) => {
      return (
        <>
          <a href={items.link}>
            <span className="mmt-button call mmt-button--circle">
              <span
                style={{
                  backgroundColor: `${items.menu.color_menu}`,
                  opacity: `${items.menu.opacity ? items.menu.opacity : "1"}`,
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
                  <div className="mt-tooltip__text">{items.captionContent}</div>
                )}
              </span>
            </span>
          </a>
        </>
      );
    };
    const displayType3Call = (items) => {
      return (
        <>
          <a href={`tel:${items.link}`}>
            <span className="mmt-button call mmt-button--circle">
              <span
                style={{
                  backgroundColor: `${items.menu.color_menu}`,
                  opacity: `${items.menu.opacity ? items.menu.opacity : "1"}`,
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
                  <div className="mt-tooltip__text">{items.captionContent}</div>
                )}
              </span>
            </span>
          </a>
        </>
      );
    };
    const displayType3Modal = (items) => {
      return (
        <>
          <span
            onClick={() => showModal(items.id)}
            className="mmt-button call mmt-button--circle"
          >
            <span
              style={{
                backgroundColor: `${items.menu.color_menu}`,
                opacity: `${items.menu.opacity ? items.menu.opacity : "1"}`,
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
                <div className="mt-tooltip__text">{items.captionContent}</div>
              )}
            </span>
          </span>
        </>
      );
    };
    const displayType4Link = (items) => {
      return (
        <>
          <a href={items.link}>
            <span className="mmt-button call mmt-button--circle">
              <span
                style={{
                  backgroundColor: `${items.menu.color_menu}`,
                  opacity: `${items.menu.opacity ? items.menu.opacity : "1"}`,
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
                  <div className="mt-tooltip__text">{items.captionContent}</div>
                )}
              </span>
            </span>
          </a>
        </>
      );
    };
    const displayType4Call = (items) => {
      return (
        <>
          <a href={`tel:${items.link}`}>
            <span className="mmt-button call mmt-button--circle">
              <span
                style={{
                  backgroundColor: `${items.menu.color_menu}`,
                  opacity: `${items.menu.opacity ? items.menu.opacity : "1"}`,
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
                  <div className="mt-tooltip__text">{items.captionContent}</div>
                )}
              </span>
            </span>
          </a>
        </>
      );
    };
    const displayType4Modal = (items) => {
      return (
        <>
          <span
            onClick={() => showModal(items.id)}
            className="mmt-button call mmt-button--circle"
          >
            <span
              style={{
                backgroundColor: `${items.menu.color_menu}`,
                opacity: `${items.menu.opacity ? items.menu.opacity : "1"}`,
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px",
                zIndex: "-1",
              }}
            ></span>
            {/* <img
              alt="url"
              style={{ height: "30px" }}
              src={`../images/${items.icon}`}
              className="mmt-button__icon"
            /> */}
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
                <div className="mt-tooltip__text">{items.captionContent}</div>
              )}
            </span>
          </span>
        </>
      );
    };
    return (
      <>
        {(() => {
          if (window.screen.width > 950 && window.screen.height > 700) {
            if (timer >= fromDisplayTime && timer < toDisplayTime) {
              return (
                <>
                  {(() => {
                    if (displayType == "1") {
                      return (
                        <>
                          <Modals
                            show={show}
                            handleClose={hideModal}
                            input={input}
                            onHandleChange={onHandleChange}
                            onHandleChangeInput={onHandleChangeInput}
                            handleCreateData={handleCreateData}
                          ></Modals>
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
                                {button && button.length > 0
                                  ? button.map((items) => (
                                      <>
                                        <div
                                          style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            top: "0px",
                                            left: "0px",
                                            backgroundColor: `${items.menu.color_menu}`,
                                            opacity: `${
                                              items.menu.opacity
                                                ? items.menu.opacity
                                                : "1"
                                            }`,
                                            color: "rgb(255, 255, 255)",
                                            pointerEvents: "none",
                                            zIndex: -1,
                                          }}
                                        />
                                        <span
                                          className="mmt-menu__item"
                                          style={{ display: "flex" }}
                                        >
                                          <div className="mt-tooltip">
                                            {(() => {
                                              if (
                                                items &&
                                                items.typeButton == "1"
                                              ) {
                                                return (
                                                  <>
                                                    {" "}
                                                    {displayType1Link(items)}
                                                  </>
                                                );
                                              } else if (
                                                items &&
                                                items.typeButton == "2"
                                              ) {
                                                return (
                                                  <>{displayType1Call(items)}</>
                                                );
                                              } else if (
                                                items &&
                                                items.typeButton == "3"
                                              ) {
                                                return (
                                                  <>
                                                    {displayType1Modal(items)}
                                                  </>
                                                );
                                              }
                                            })()}
                                          </div>
                                        </span>
                                      </>
                                    ))
                                  : ""}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    } else if (displayType == "2") {
                      return (
                        <>
                          <Modals
                            show={show}
                            handleClose={hideModal}
                            input={input}
                            onHandleChange={onHandleChange}
                            onHandleChangeInput={onHandleChangeInput}
                            handleCreateData={handleCreateData}
                          ></Modals>
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
                                {button && button.length > 0
                                  ? button.map((items) => (
                                      <>
                                        <div
                                          style={{
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            top: "0px",
                                            left: "0px",
                                            backgroundColor: `${items.menu.color_menu}`,
                                            opacity: `${
                                              items.menu.opacity
                                                ? items.menu.opacity
                                                : "1"
                                            }`,
                                            color: "rgb(255, 255, 255)",
                                            pointerEvents: "none",
                                            zIndex: -1,
                                          }}
                                        />
                                        <span
                                          className="mmt-menu__item"
                                          style={{ display: "flex" }}
                                        >
                                          <div className="mt-tooltip">
                                            {(() => {
                                              if (
                                                items &&
                                                items.typeButton == "1"
                                              ) {
                                                return (
                                                  <>
                                                    {" "}
                                                    {displayType2Link(items)}
                                                  </>
                                                );
                                              } else if (
                                                items &&
                                                items.typeButton == "2"
                                              ) {
                                                return (
                                                  <>{displayType2Call(items)}</>
                                                );
                                              } else if (
                                                items &&
                                                items.typeButton == "3"
                                              ) {
                                                return (
                                                  <>
                                                    {displayType2Modal(items)}
                                                  </>
                                                );
                                              }
                                            })()}
                                            {/* {items.captionContent && (
                                      <div className="mt-tooltip_text">
                                        <span>{items.captionContent}</span>
                                      </div>
                                    )} */}
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
                    } else if (displayType == "3") {
                      return (
                        <>
                          <Modals
                            show={show}
                            handleClose={hideModal}
                            input={input}
                            onHandleChange={onHandleChange}
                            onHandleChangeInput={onHandleChangeInput}
                            handleCreateData={handleCreateData}
                          ></Modals>
                          <div className="mmt-container">
                            <div
                              className={`mmt-app mmt-app--circle ${viewDisplayV2(
                                displayTypeV2
                              )}`}
                            >
                              {button && button.length > 0
                                ? button.map((items) => (
                                    <>
                                      {/* <div style={{
                                          position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
                                          backgroundColor: `${dataColorMenu ? dataColorMenu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
                                      }} /> */}
                                      <span
                                        className="mmt-menu__item"
                                        style={{ display: "flex" }}
                                      >
                                        {/* <div className="mt-tooltip"> */}
                                        {(() => {
                                          if (
                                            items &&
                                            items.typeButton == "1"
                                          ) {
                                            return (
                                              <> {displayType3Link(items)}</>
                                            );
                                          } else if (
                                            items &&
                                            items.typeButton == "2"
                                          ) {
                                            return (
                                              <>{displayType3Call(items)}</>
                                            );
                                          } else if (
                                            items &&
                                            items.typeButton == "3"
                                          ) {
                                            return (
                                              <>{displayType3Modal(items)}</>
                                            );
                                          }
                                        })()}
                                      </span>
                                    </>
                                  ))
                                : ""}
                            </div>
                          </div>
                        </>
                      );
                    } else if (displayType === "4") {
                      return (
                        <>
                          <Modals
                            show={show}
                            handleClose={hideModal}
                            input={input}
                            onHandleChange={onHandleChange}
                            onHandleChangeInput={onHandleChangeInput}
                            handleCreateData={handleCreateData}
                          ></Modals>
                          <div className="mmt-container">
                            <div
                              className={`mmt-app mmt-app--circle ${viewDisplayV2(
                                displayTypeV2
                              )} `}
                            >
                              {button && button.length > 0
                                ? button.map((items) => (
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
                                        {(() => {
                                          if (
                                            items &&
                                            items.typeButton == "1"
                                          ) {
                                            return (
                                              <> {displayType4Link(items)}</>
                                            );
                                          } else if (
                                            items &&
                                            items.typeButton == "2"
                                          ) {
                                            return (
                                              <>{displayType4Call(items)}</>
                                            );
                                          } else if (
                                            items &&
                                            items.typeButton == "3"
                                          ) {
                                            return (
                                              <>{displayType4Modal(items)}</>
                                            );
                                          }
                                        })()}

                                        {/* </div> */}
                                      </span>
                                    </>
                                  ))
                                : ""}
                            </div>
                          </div>
                        </>
                      );
                    }
                  })()}
                </>
              );
            }
          } else {
            if (timer >= fromDisplayTime && timer < toDisplayTime) {
              return (
                <>
                  {(() => {
                    return (
                      <>
                        <Modals
                          show={show}
                          handleClose={hideModal}
                          input={input}
                          onHandleChange={onHandleChange}
                          onHandleChangeInput={onHandleChangeInput}
                          handleCreateData={handleCreateData}
                        ></Modals>
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
                              {button && button.length > 0
                                ? button.map((items) => (
                                    <>
                                      <div
                                        style={{
                                          position: "absolute",
                                          width: "100%",
                                          height: "100%",
                                          top: "0px",
                                          left: "0px",
                                          backgroundColor: `${items.menu.color_menu}`,
                                          opacity: `${
                                            items.menu.opacity
                                              ? items.menu.opacity
                                              : "1"
                                          }`,
                                          color: "rgb(255, 255, 255)",
                                          pointerEvents: "none",
                                          zIndex: -1,
                                        }}
                                      />
                                      <span
                                        className="mmt-menu__item"
                                        style={{ display: "flex" }}
                                      >
                                        <div className="mt-tooltip">
                                          {(() => {
                                            if (
                                              items &&
                                              items.typeButton == "1"
                                            ) {
                                              return (
                                                <> {displayType1Link(items)}</>
                                              );
                                            } else if (
                                              items &&
                                              items.typeButton == "2"
                                            ) {
                                              return (
                                                <>{displayType1Call(items)}</>
                                              );
                                            } else if (
                                              items &&
                                              items.typeButton == "3"
                                            ) {
                                              return (
                                                <>{displayType1Modal(items)}</>
                                              );
                                            }
                                          })()}
                                        </div>
                                      </span>
                                    </>
                                  ))
                                : ""}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </>
              );
            }
          }
        })()}
      </>
    );
  };

  const Modals = ({
    handleClose,
    show,
    children,
    input,
    onHandleChangeInput,
    handleCreateData,
    onHandleChange,
  }) => {
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    // const onHandleChangeInput = (e) => {
    //     console.log(e.target.value)
    // }
    return (
      <>
        <div className={showHideClassName}>
          <div className="mt-dialog mt-dialog--open">
            <div>
              <div className="mt-dialog__surface">
                <div
                  className="mt-dialog__title"
                  style={{
                    backgroundColor: "rgb(0, 174, 239)",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  <span style={{ textAlign: "left" }}>
                    ??i???n th??ng tin v?? tr?????ng s??? g???i t?? v???n cho b???n
                  </span>
                  <svg
                    onClick={handleClose}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    width="24px"
                    height="24px"
                    style={{
                      cursor: "pointer",
                      flex: "0 0 24px",
                      margin: "6px 0px 0px 16px",
                    }}
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                <div className="mt-dialog__content">
                  <div>
                    <input
                      onChange={onHandleChange}
                      name="phone"
                      className="mt-textfield"
                      placeholder="S??? ??i???n tho???i"
                      style={{ marginTop: "0px" }}
                    />
                    <div
                      style={{
                        display: "none",
                        fontSize: "12px",
                        textAlign: "left",
                        color: "rgb(244, 67, 54)",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      Ch???n m???t s??? ??i???n tho???i h???p l???
                    </div>
                  </div>
                  <div>
                    <input
                      className="mt-textfield"
                      onChange={onHandleChange}
                      name="fullName"
                      placeholder="H??? v?? t??n"
                      style={{ marginTop: "16px" }}
                    />
                    <input
                      className="mt-textfield"
                      onChange={onHandleChange}
                      name="emailCustomer"
                      placeholder="Email"
                      style={{ marginTop: "16px" }}
                    />
                    <div
                      style={{
                        display: "none",
                        fontSize: "12px",
                        textAlign: "left",
                        color: "rgb(244, 67, 54)",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      N???i dung ch??a ????ng
                    </div>
                  </div>
                  <div>
                    <input
                      className="mt-textfield"
                      onChange={onHandleChange}
                      name="address"
                      placeholder="?????a ch???"
                      style={{ marginTop: "16px" }}
                    />
                    <input
                      className="mt-textfield"
                      onChange={onHandleChange}
                      name="content"
                      placeholder="N???i Dung"
                      style={{ marginTop: "16px" }}
                    />
                    <div
                      style={{
                        display: "none",
                        fontSize: "12px",
                        textAlign: "left",
                        color: "rgb(244, 67, 54)",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      N???i dung ch??a ????ng
                    </div>

                    <input
                      onChange={onHandleChange}
                      name="notes"
                      className="mt-textfield"
                      placeholder="Ghi Ch??"
                      style={{ marginTop: "16px" }}
                    />
                    <div
                      style={{
                        display: "none",
                        fontSize: "12px",
                        textAlign: "left",
                        color: "rgb(244, 67, 54)",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      Ghi ch??
                    </div>

                    {input &&
                      input.length > 0 &&
                      input.map((items) => {
                        return (
                          <>
                            <input
                              onChange={onHandleChangeInput}
                              name={`${items.id}`}
                              className="mt-textfield"
                              placeholder={`${items.inputName}`}
                              style={{ marginTop: "16px" }}
                            />
                          </>
                        );
                      })}
                  </div>
                </div>
                <div
                  className="mt-dialog__actions"
                  style={{ justifyContent: "flex-end" }}
                >
                  <div style={{ flex: "1 1 auto" }} />
                  <button
                    onClick={handleCreateData}
                    className="mt-button"
                    style={{
                      backgroundColor: "rgb(0, 174, 239)",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    G???i
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  function decode(input) {
    const _keyStr =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    output = _utf8_decode(output);

    return output;
  }
  const _utf8_decode = (utftext) => {
    var string = "";
    var i = 0;
    var c = 0;
    var c1 = 0;
    var c2 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        var c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(
          ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
        );
        i += 3;
      }
    }

    return string;
  };
  function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
  function getCurrentDate(separator = "") {
    let newDate = new Date();
    let date = ("0" + newDate.getDate()).slice(-2);
    let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  }

  ReactDOM.render(<DisplayWebsite />, document.getElementById("metu"));
})();
