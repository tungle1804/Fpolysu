import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { loadButtonByIDMenu, updateButton, viewButton } from '../../redux/actions/updatebuttonAction'

export default function Display() {
    let { id } = useParams()
    const data = useSelector(state => state.updatebuttons.data)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(loadButtonByIDMenu(id))
        // dispatch(viewButton())

    }, [])
    return (
        <>
            <img src="../images/background.jpg" style={{ width: '1000px', height: '520px' }}></img>
            <div id="metu">

                <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', zIndex: 999999 }} />
                <div className="mmt-container  mmt-container--full">
                    <div className="mmt-app" > 
                        {data.map(items => (
                            <>



                                <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', backgroundColor: `${items.menu.color_menu}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1 }} />
                                <span onClick={onclick} className="mmt-menu__item" style={{ display: 'flex' }}><div className="mt-tooltip">
                                    <span className="mmt-button call" style={{ backgroundColor: `${items.color_background}` }}>
                                        <img alt="url" style={{ height: '30px', marginRight: '20px' }} src={`../images/${items.icon}`} className="mmt-button__icon" />
                                        <span className="mmt-button__label" style={{ color: `${items.color_text}` }}>{items.name_button}</span></span>

                                </div></span>
                            </>

                        )

                        )}</div></div>    </div>
        </>
    )
}
