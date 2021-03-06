import React, { useContext, useEffect, useState } from "react";
import CreateDetailsMenu from "../CreateDetailsMenu";
import ViewCreateMenu from "../ViewCreateMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchClear, viewButton } from "../../redux/actions/createbuttonAction";
import { loadPosts } from "../../redux/actions/menuAction";
import { fetchClearColorMenu } from "../../redux/actions/backgroundColorAction";

export default function CreateMenu() {
  const data = useSelector((state) => state.createbuttons.data);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(fetchClear());
      dispatch(fetchClearColorMenu());
    };
  }, []);

  return (
    <>
      <div className="block lg:flex justify-between w-auto">
        <ViewCreateMenu />
        <CreateDetailsMenu data={data} />
      </div>
    </>
  );
}
