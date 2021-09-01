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

      {/* {requesting ? <h1>hiiiiii</h1> : (data && data.length > 0) ? <View onlistbutton={onlistbutton} posts={data} /> : <div>Data is empty</div>} */}

      {/* {data && data.length > 0 ? ( */}
      <div className="block lg:flex justify-between w-auto">
        <View 
          onlistbutton={onlistbutton}
          posts={data}
          requesting={requesting}
        />
        {/* ) : (
        <div>Data is empty</div>
      )} */}
        {/* <Route path="/admin"><View /> </Route>

                    <Route path="/create-menu">   <CreateMenu /></Route> */}

        {/* {requesting ? <ReactLoading type="balls" color="#ffff" height="667" width="375" /> : idmenu ? <MenuDetails idmenu={idmenu} /> : <h1>not data</h1>} */}
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
