import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import UpdateDetailsMenu from '../UpdateDetailsMenu/index'
import ViewUpdateMenu from '../ViewUpdateMenu/index'
export default function UpdateMenu() {
    const { id } = useParams();


    return (
        <>


            <ViewUpdateMenu id={id} />
            <UpdateDetailsMenu id={id} />

        </>
    )
}
