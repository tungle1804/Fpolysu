import React, { useContext, useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { viewButton } from '../../redux/actions/createbuttonAction';
import { ButtonContext } from '../../service/ButtonContext';
import ButtonFake from '../../service/ButtonFake/index'
import './style.css'
function Display() {

    const data1 = useSelector(state => state.createbuttons.data)
    const requestingg = useSelector(state => state.createbuttons.requesting)
    const dataColorMenu = useSelector(state => state.colormenu.dataColorMenu)
    const [button, setButton] = useState();
    useEffect(() => {
        ButtonFake.getButtonFake().then((res) => {
            setButton(res.data)
        })
    }, [])
    const onclick = (id) => {
        ButtonFake.deleteButtonFake(id)
    }
    return (
        <>

            {!requestingg ? <>
                <img src="../images/background.jpg" style={{ width: '820px', height: '520px' }}></img>
                <div id="metu">
                    <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', zIndex: 999999 }} />
                    <div className="mmt-container  mmt-container--full">
                        <div className="mmt-app">
                            {(data1 && data1.length > 0) ? data1.map(items => (
                                <>
                                    <div style={{
                                        position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px',
                                        backgroundColor: `${dataColorMenu ? dataColorMenu : ""}`, opacity: 1, color: 'rgb(255, 255, 255)', pointerEvents: 'none', zIndex: -1
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

                            ) : ''}</div></div>    </div></> : ""
            }

        </>
    )

}
export default (Display);
