import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { deleteInput, updateInput } from '../../../redux/actions/InputAction';

export default function Modals() {
    const [inputValue, setInputValue] = useState()
    const [id_input, setIdInput] = useState()
    const dispatch = useDispatch();
    const data = useSelector(state => state.input.data)
    const ondelete = (id) => {

        dispatch(deleteInput(id))
    }
    const onHandleChangeinput = (e, id_input) => {
        setIdInput(id_input)
        const { name } = e.target;
        console.log(e.target.value)
        setInputValue({
            ...inputValue,
            [name]: e.target.value

        })


    }
    useEffect(() => {
        const editInput = { id_input: id_input, name_input: inputValue, value_input: null }
        dispatch(updateInput(editInput))
    }, [inputValue])
    return (

        <>
            {data && data.map(item => (
                <>
                    <Form.Group id={item.id_input} controlId="formBasicEmail">
                        <Form.Label>tungdeptrai</Form.Label>
                        <div onClick={() => ondelete(item.id_input)} class="close_btn   bg-white p-1 cursor-pointer hover:bg-gray-100  text-gray-600 rounded-full">X</div>
                        <Form.Control name="input_name" onChange={((e) => onHandleChangeinput(e, item.id_input))} type="text" placeholder="Nhập tên trường" />

                    </Form.Group>
                </>
            ))}






        </>

    )
}
