import React, { useContext, useEffect, useState } from 'react'
import CreateDetailsMenu from '../CreateDetailsMenu';
import ViewCreateMenu from '../ViewCreateMenu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClear, viewButton } from '../../redux/actions/createbuttonAction';
import { loadPosts } from '../../redux/actions/menuAction';
export default function CreateMenu() {

    const data = useSelector(state => state.createbuttons.data)
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(fetchClear());
        }
    }, [])

    return (
        <>
            <ViewCreateMenu />
            <CreateDetailsMenu data={data} />
        </>

    )
}
