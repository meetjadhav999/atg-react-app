import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import closeIcon from '../images/close.svg'
import fblogo from '../images/fblogo.png'
import glogo from '../images/googlelogo.svg'
import illu from '../images/illustration.svg'
function LoginForm(props) {


    return (

        <Modal show={props.show} onHide={props.close} size="lg">
            <Modal.Header className='bg-transparent p-0 border-0 mb-1 d-flex justify-content-end'>
                <Button className='bg-transparent p-0 border-0 align-close-btn' onClick={props.close}><img src={closeIcon} height='23px' width='23px'></img></Button>
            </Modal.Header>
            <Modal.Body className='bg-white rounded p-0 overflow-hidden '>

                <div className='w-100 text-center success-color p-3 small-font '>
                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now {'\u{1F918}'}
                </div>
                <div className='m-4' >

                    <div className='d-flex justify-content-center align-items-baseline flex-column flex-md-row'>
                        <Form className='w-50 mw-50'>
                            <h2>Sign In</h2>
                            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1" >
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    className='rounded-0 w-75 bg-light' 
                                />
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                    className='rounded-0 w-75 bg-light'
                                />
                            </Form.Group>
                            <Button variant='primary' className='rounded-pill w-75 mb-3'>Sign In</Button><br/>
                            <Button variant='light' style={{border:'solid 1px #D9D9DB'}} className='rounded-0 w-75 bg-white border-1 mb-2'>
                                <img src={fblogo} width='16px' height='16px' className='m-1'></img>
                                Sign in with Facebook
                            </Button>
                            <Button variant='light' style={{border:'solid 1px #D9D9DB'}} className='rounded-0 w-75 bg-white border-1 mb-2'>
                                <img src={glogo} width='16px' height='16px' className='m-1'></img>
                                Sign in with Google
                            </Button><br/>

                            <p className='w-75 text-center mt-3 mb-3'><a href='#' className='text-decoration-none text-black small-font text-center fw-medium'>Forgot password?</a></p>
                        </Form>
                        <div>
                            <p class="fs-6 fw-medium m-0">
                                Don't have an account yet.{" "}
                                <a class="text-decoration-none" as="button" onClick={props.open}>
                                    Create new for free
                                </a>!
                            </p>
                            <img
                                src={illu}
                                width='90%'
                            >
                            </img>
                        </div>
                    </div>

                </div>



            </Modal.Body>
        </Modal>
    );
}

export default LoginForm;