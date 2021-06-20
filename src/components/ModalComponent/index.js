import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
const ModalComponent = ({ shows, onhandleClose }) => {

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
      </Button> */}

            <Modal show={shows}  >
                <Modal.Header closeButton>
                    <Modal.Title>Cấu hình nút : Gọi ngay</Modal.Title>
                </Modal.Header>
                <Modal.Body>Mô tả : Khách hàng sẽ gọi trực tiếp thông qua tính năng này

                <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onhandleClose, shows} >
                        Close
          </Button>

                    <Button variant="primary" >
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}; export default ModalComponent
