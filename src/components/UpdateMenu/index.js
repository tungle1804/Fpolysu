import React, { useEffect } from "react";
import { useParams } from "react-router";
import { viewPost } from "../../redux/actions/menuAction";
import UpdateDetailsMenu from "../UpdateDetailsMenu/index";
import ViewUpdateMenu from "../ViewUpdateMenu/index";
import { useDispatch } from "react-redux";
import {
  fetchClear,
  loadButtonByIDMenu,
} from "../../redux/actions/createbuttonAction";
import { fetchClearUpdateButton } from "../../redux/actions/updatebuttonAction";
export default function UpdateMenu() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewPost(id));
    dispatch(loadButtonByIDMenu(id));
    return () => {
      dispatch(fetchClear());
      dispatch(fetchClearUpdateButton());
    };
  }, []);
  return (
    <>
      <div className="block lg:flex justify-between w-auto">
        <ViewUpdateMenu />
        <UpdateDetailsMenu />
      </div>
    </>
  );
}
