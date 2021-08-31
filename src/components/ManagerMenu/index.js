import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Router, Switch, useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { loadMenus } from "../../redux/actions/menuAction";
import CreateMenu from "../CreateMenu";
import ReactLoading from "react-loading";
import Display from "../Display";
import MenuDetails from "../MenuDetails";
import View from "../View";
import { loadButtons } from "../../redux/actions/buttonAction";
function ManagerMenu({
  data,
  requesting,
  dispatch,
  dataButton,
  requestingButton,
}) {
  const [idMenu, setIDMenu] = useState();
  const history = useHistory();
  useEffect(() => {
    let email = localStorage.getItem("email");
    dispatch(loadMenus({ email }));
  }, []);
  const onlistbutton = (id) => {
    dispatch(loadButtons({ id }));
    setIDMenu(id);
  };
  return (
    <>
      <div className="block lg:flex justify-between w-auto ml-3">
        <View
          onlistbutton={onlistbutton}
          posts={data}
          requesting={requesting}
        />

        {
          <MenuDetails
            idMenu={idMenu}
            dataButton={dataButton}
            requestingButton={requestingButton}
          />
        }
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    requestingButton: state.buttons.requesting,
    dataButton: state.buttons.dataButton,
    data: state.posts.data,
    requesting: state.posts.requesting,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // MenusAction: bindActionCreators(MenusAction, dispatch),
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManagerMenu);
