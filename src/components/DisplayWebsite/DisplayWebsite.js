(function () {
    "use strict";
    // eslint-disable-next-line no-undef
    class DisplayWebsite extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                button: [],
                displayType: "",
                displayTypeV2: "",
                show: false,
                input: null,
                valueInput: {},

            };
            this.showModal = this.showModal.bind(this);
            this.hideModal = this.hideModal.bind(this);
            this.viewDisplayV2 = this.viewDisplayV2.bind(this);
            this.onHandleChangeInput = this.onHandleChangeInput.bind(this);
        }

        showModal = (id) => {
            this.setState({ show: true });
            console.log(id)
            fetch(`http://localhost:8080/api/v1/getModalByButton/${id}`, {
                method: "POST",
            })
                .then(function (response) {
                    return response.json();
                }).then(data => {
                    console.log(data)
                    this.setState({ input: data });
                })


        };

        hideModal = () => {
            this.setState({ show: false });
        };
        viewDisplayV2 = (displayTypeV2) => {
            if (displayTypeV2 === '1') {
                return ('mmt-app--circle-bottom-right')
            } else if (displayTypeV2 === '2') {
                return ('mmt-app--circle-middle-right')
            } else if (displayTypeV2 === '3') {
                return ('mmt-app--circle-top-right')
            } else if (displayTypeV2 === '4') {
                return ('mmt-app--circle-bottom-left')
            } else if (displayTypeV2 === '5') {
                return ('mmt-app--circle-middle-left')
            } else if (displayTypeV2 === '6') {
                return ('mmt-app--circle-top-left')
            }
        }
        componentDidMount() {
            fetch(`http://localhost:8080/api/v1/getMenuByStatus/${window.name}`, {
                method: "GET",
            })
                .then(function (response) {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    this.setState({ displayType: data[0].menuType })
                    this.setState({ displayTypeV2: data[0].menuLocation })
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

                    fetch("http://localhost:8080/api/v1/activityMenu", requestOptions)
                        .then((response) => response.text())
                        .then((result) => console.log("getActivityMenu", result))
                        .catch((error) => console.log("error", error));
                    fetch(`http://localhost:8080/api/v1/getButtonByIDMenu/${maMN}`, {
                        method: "GET",
                    })
                        .then(function (response) {
                            return response.json();
                        })
                        .then(data => {
                            console.log(data)
                            this.setState({ button: data });

                        })
                });

        }
        onHandleChangeInput = (e) => {
            this.setState({ ...this.state.valueInput, valueInput: e.target.value })
            console.log(this.state.valueInput)
        }

        render() {
            console.log(this.state.displayType)
            return (
                <>
                    {(() => {
                        if (this.state.displayType == "1") {
                            return (<>
                                <Modals show={this.state.show} handleClose={this.hideModal} input={this.state.input} onHandleChangeInput={this.onHandleChangeInput}>
                                    <p>tubnganhle</p>
                                </Modals>
                                <div id="metu">
                                    <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', zIndex: 999999 }} />
                                    <div className="mmt-container  mmt-container--full">
                                        <div className="mmt-app">
                                            {(this.state.button && this.state.button.length > 0) ? this.state.button.map(items => (
                                                <>

                                                    <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', backgroundColor: `${items.menu.color_menu}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1 }} />
                                                    <span onClick={() => this.showModal(items.id)} className="mmt-menu__item" style={{ display: 'flex' }}><div className="mt-tooltip">
                                                        <span className="mmt-button call" style={{ backgroundColor: `${items.color_background}` }}>
                                                            <img alt="url" style={{ height: '30px', marginRight: '20px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
                                                            <span className="mmt-button__label" style={{ color: `${items.color_text}` }}>{items.name_button}</span></span>

                                                    </div></span>
                                                </>

                                            )

                                            ) : ''}
                                        </div></div>
                                </div>
                            </>)
                        } else if (this.state.displayType == "2") {
                            return (<>
                                <div id="metu">
                                    <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', zIndex: 999999 }} />
                                    <div className="mmt-container  mmt-container--fit">
                                        <div className="mmt-app">
                                            {(this.state.button && this.state.button.length > 0) ? this.state.button.map(items => (
                                                <>
                                                    <div style={{
                                                        position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
                                                        backgroundColor: `${items.menu.color_menu}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
                                                    }} />
                                                    <span onClick={() => onclick(items.id_button)} className="mmt-menu__item" style={{ display: 'flex' }}><div className="mt-tooltip">
                                                        <span className="mmt-button call" style={{ backgroundColor: `${items.color_background}` }}>
                                                            <img alt="url" style={{ height: '30px', marginRight: '20px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
                                                            <span className="mmt-button__label" style={{ color: `${items.color_text}` }} >{items.name_button}</span></span>

                                                        {
                                                            items.captionContent &&
                                                            <div className="mt-tooltip_text">
                                                                <span>{items.captionContent}</span>
                                                            </div>
                                                        }

                                                    </div></span>
                                                </>

                                            )

                                            ) : ''}</div></div>    </div>
                            </>)

                        }
                        else if (this.state.displayType == "3") {
                            return (<>
                                <div className="mmt-container">
                                    <div className={`mmt-app mmt-app--circle ${this.viewDisplayV2(this.menuLocation)}`}>
                                        {(this.state.button && this.state.button.length > 0) ? this.state.button.map(items => (
                                            <>
                                                {/* <div style={{
                                        position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
                                        backgroundColor: `${dataColorMenu ? dataColorMenu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
                                    }} /> */}
                                                <span className="mmt-menu__item" style={{ display: 'flex' }}>
                                                    {/* <div className="mt-tooltip"> */}
                                                    <span className="mmt-button call mmt-button--circle" >
                                                        <span style={{ backgroundColor: `${items.menu.color_menu}`, opacity: 1, position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px", borderRadius: "20px", zIndex: "-1" }}></span>
                                                        <img alt="url" style={{ height: '30px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
                                                        <span className="mmt-button__label" style={{ color: `${items.color_text}` }} >{items.name_button}</span></span>



                                                    {/* </div> */}
                                                </span>
                                            </>

                                        )

                                        ) : ''}</div></div>
                            </>)

                        }
                        else if (this.state.displayType === "4") {
                            return (<> <div className="mmt-container">
                                <div className={`mmt-app mmt-app--circle ${this.viewDisplayV2(this.displayTypeV2)} `}>
                                    {(this.state.button && this.state.button.length > 0) ? this.state.button.map(items => (
                                        <>
                                            {/* <div style={{
                                            position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
                                            backgroundColor: `${dataColorMenu ? dataColorMenu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
                                        }} /> */}
                                            <span onClick={() => onclick(items.id_button)} className="mmt-menu__item" style={{ display: 'flex' }}>
                                                {/* <div className="mt-tooltip"> */}
                                                <span className="mmt-button call mmt-button--circle" >
                                                    <span style={{ backgroundColor: `${items.menu.color_menu}`, opacity: 1, position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px", zIndex: "-1" }}></span>
                                                    <img alt="url" style={{ height: '30px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
                                                    <span className="mmt-button__label" style={{ color: `${items.color_text}` }} >{items.name_button}</span></span>



                                                {/* </div> */}
                                            </span>
                                        </>

                                    )

                                    ) : ''}</div></div></>)

                        }
                    })()}

                </>
            )

        }


    }
    const Modals = ({ handleClose, show, children, input, onHandleChangeInput }) => {
        const showHideClassName = show ? "modal display-block" : "modal display-none";
        // const onHandleChangeInput = (e) => {
        //     console.log(e.target.value)
        // }
        return (
            <>
                <div className={showHideClassName} >
                    <div className="mt-dialog mt-dialog--open">
                        <div>
                            <div className="mt-dialog__surface">
                                <div className="mt-dialog__title" style={{ backgroundColor: 'rgb(0, 174, 239)', color: 'rgb(255, 255, 255)' }}>
                                    <span style={{ textAlign: 'left' }}>Điền thông tin và trường sẽ gọi tư vấn cho bạn</span><svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="24px" height="24px" style={{ cursor: 'pointer', flex: '0 0 24px', margin: '6px 0px 0px 16px' }}>
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg></div><div className="mt-dialog__content"><div>
                                            <input className="mt-textfield" placeholder="Số điện thoại" style={{ marginTop: '0px' }} />
                                            <div style={{ display: 'none', fontSize: '12px', textAlign: 'left', color: 'rgb(244, 67, 54)', margin: '0px', padding: '0px' }}>Chọn một số điện thoại hợp lệ</div>
                                        </div><div>
                                        <input className="mt-textfield" placeholder="Họ Tên" style={{ marginTop: '16px' }} /><div style={{ display: 'none', fontSize: '12px', textAlign: 'left', color: 'rgb(244, 67, 54)', margin: '0px', padding: '0px' }}>Nội dung chưa đúng</div></div><div>
                                        <input className="mt-textfield" placeholder="Cơ sở (HN, HCM, Cần Thơ, Đà Nẵng, Tây Nguyên)" style={{ marginTop: '16px' }} />
                                        <div style={{ display: 'none', fontSize: '12px', textAlign: 'left', color: 'rgb(244, 67, 54)', margin: '0px', padding: '0px' }}>Nội dung chưa đúng</div>
                                        {input && input.length > 0 && input.map(items => {
                                            return (<>
                                                <input onChange={onHandleChangeInput} name={`${items.id}`} className="mt-textfield" placeholder={`${items.inputName}`} style={{ marginTop: '16px' }} />
                                            </>)
                                        })}
                                    </div>
                                </div>
                                <div className="mt-dialog__actions" style={{ justifyContent: 'flex-end' }}><div style={{ flex: '1 1 auto' }} />
                                    <button className="mt-button" style={{ backgroundColor: 'rgb(0, 174, 239)', color: 'rgb(255, 255, 255)' }}>Gửi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    };

    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>;
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>;
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>;
    // eslint-disable-next-line no-undef
    ReactDOM.render(<DisplayWebsite />, document.getElementById("metu"));
})();




