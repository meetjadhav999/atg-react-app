import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.svg";
import Form from "react-bootstrap/Form";
import "../css/main.css";
import searchIcon from "../images/searchIcon.svg";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import LoginForm from "./login";
import RegisterForm from "./register";
import rect from "../images/rect.svg"
import triangle from "../images/triangle.svg"
import oval from "../images/oval.svg"


function NavbarComponent() {

	const [showlogin,setShowlogin] = useState(false)
	const [showregister,setShowregister] = useState(false)
	const handleLogIn = () => setShowlogin(true)
	const handleRegister = () => setShowregister(true)
	return (
		<>
			<Navbar
				className="fixed-top responsive-nav p-0 p-sm-2"
				bg="white"
				data-bs-theme="light"
			>
				<Container className="d-flex align-items-center justify-content-between h-100">
					<Navbar.Brand href="#home" className="pt-3 pb-3 d-none d-sm-block">
						<img
							alt=""
							src={logo}
							width="162"
							height="24"
							className="d-inline-block align-top"
						/>{" "}
					</Navbar.Brand>
					<div className="d-block d-sm-none"></div>
					<InputGroup className="little-dark-bg rounded-pill overflow-hidden small-search align-items-center d-none d-md-flex">
						<img
							alt=""
							src={searchIcon}
							width="22"
							height="22"
							className="ms-3"
						/>{" "}
						<Form.Control
							className="rounded-0 little-dark-bg border-0 fw-medium small-font"
							type="text"
							placeholder="Search for you favorites group in ATG"
						/>
					</InputGroup>
					<div className="align-items-center d-none d-md-flex">
						<p class="fs-6 fw-medium m-0">
							Create account.{" "}
							<a class="text-decoration-none pe-auto" as="button" onClick={handleRegister}>
								It's free
							</a>!
						</p>
						<DropdownButton align="end" id="dropdown-basic-button" title="" className=" bg-white" variant="white">
						<Dropdown.Item as="button" onClick={handleLogIn}>Log In</Dropdown.Item>
						<Dropdown.Item as="button" onClick={handleRegister}>Sign up</Dropdown.Item>
					</DropdownButton>
					</div>
					<div className="d-flex d-md-none h-100 justify-content-end">
						<Button className="ms-2 border-0 bg-white h-100 p-0 p-sm-2">
							<img src={rect}></img>
						</Button>
						<Button className="ms-2 border-0 bg-white p-0 p-sm-2 h-100 ">
							<img src={oval}></img>
						</Button>
						<Dropdown className="h-100 d-flex align-items-center">
                            <Dropdown.Toggle
                                as={Button}
                                variant="white"
                                id="dropdown-basic"
                                style={{ border: 'none;'}}
                                className="custom-dropdown-toggle ms-2 border-0 bg-white p-0 p-sm-2 h-100 rounded-0 "
								
                                
                            >
                                <img src={triangle} width='12px' height='10px' ></img>
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end" className='shadow-sm border-0 small-font'>
							<Dropdown.Item as="button" onClick={handleLogIn}>Log In</Dropdown.Item>
						<Dropdown.Item as="button" onClick={handleRegister}>Sign up</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
					</div>

				</Container>
			</Navbar>

			<LoginForm show={showlogin} close={()=> setShowlogin(false)} open={()=>{
				setShowlogin(false)
				setShowregister(true)

			}}/>
			<RegisterForm show={showregister} close={()=> setShowregister(false)} open={()=>{
				setShowregister(false)
				setShowlogin(true)
			}}></RegisterForm>
		</>
	);
}

export default NavbarComponent;
