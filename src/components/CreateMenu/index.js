import React, { useContext, useEffect, useState } from 'react'
import CreateDetailsMenu from '../CreateDetailsMenu';
import ViewCreateMenu from '../ViewCreateMenu';
import { useDispatch, useSelector } from 'react-redux';
import { viewButton } from '../../redux/actions/createbuttonAction';
import { loadPosts } from '../../redux/actions/menuAction';
export default function CreateMenu() {

    // const data = useSelector(state => state.buttons.data)
    // const requesting = useSelector(state => state.buttons.requesting)
    const data = useSelector(state => state.createbuttons.data)
    console.log(data + 'sssss')
    const requesting = useSelector(state => state.createbuttons.requesting)

    const dispatch = useDispatch();

    const [test, setTest] = useState();




    return (
        <>
            <ViewCreateMenu />

            {/* <WelcomeBack button={test1} /> */}


            {/* data={data} color={colormenu} */}
            {  <CreateDetailsMenu data={data} /> }
            {/* 
            <CreateDetailsMenu data={data} /> */}





        </>

    )
}
