import React from 'react'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import DotsIcon from '../images/3dots.svg';
import viewsIcon from '../images/view.svg'
import shareIcon from '../images/share.svg'
import locationIcon from '../images/locationIcon.svg'
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import warningIcon from '../images/warning.svg'
import editIcon from '../images/editicon.svg'
function PostContent() {

    const dataList = [
        {
            image:'card1.png',
            cat:'Article',
            title:'What if famous brands had regular fonts? Meet RegulaBrands!',
            context:'I`ve worked in UX for the better part of a decade. From now on, I plan to revist there soon',
            pp:'profile.png',
            name:'Sarthak Kamra',
            views:'1.4k'
        },
        {
            image:'card2.png',
            cat:'Article',
            title:'What if famous brands had regular fonts? Meet RegulaBrands!',
            context:'I`ve worked in UX for the better part of a decade. From now on, I plan to revist there soon',
            pp:'profile2.png',
            name:'Sarthak Kamra',
            views:'1.4k'
        },
        {
            image:'card3.png',
            cat:'Article',
            title:'What if famous brands had regular fonts? Meet RegulaBrands!',
            context:'I`ve worked in UX for the better part of a decade. From now on, I plan to revist there soon',
            pp:'profile3.png',
            name:'Sarthak Kamra',
            views:'1.4k'
        }
    ]
    const emojis = {
        Article: '\u270d'
    }
    return (
        <div  className='d-flex w-100 adjust-div'>
            <div className='w-75 px-0 p-sm-2 card-container'>
            {dataList.map((item)=>
            
            <Card className=' mt-2'>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/' + item.image} alt='' />
                <Card.Body>
                    <Card.Title className='h6'>{emojis[item.cat]}{item.cat}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <Card.Title className='fs-3 smaller-title'>{item.title}</Card.Title>
                        <Dropdown>
                            <Dropdown.Toggle
                                as={Button}
                                variant="white"
                                id="dropdown-basic"
                                style={{ border: 'none' }}
                                height='22px'
                                width='22px'

                                className="custom-dropdown-toggle px-2 "

                                
                            >
                                <img src={DotsIcon} width='19px' height='5px' ></img>
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end" className='shadow-sm border-0 small-font'>
                                <Dropdown.Item href="#action-1">Edit</Dropdown.Item>
                                <Dropdown.Item href="#action-2">Report</Dropdown.Item>
                                <Dropdown.Item href="#action-3">Option 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <p className='fs-6 grey-font smaller-context'>{item.context}</p>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img src={process.env.PUBLIC_URL + '/images/' + item.pp} alt='' height='48px' width='48px' className='rounded-circe'></img>
                            <div>
                            <h5 className='ms-2 smaller-name'>{item.name}</h5>
                            <div className='extra-small-font d-block d-sm-none'><img src={viewsIcon} alt='' height='10px' width='15px'></img> {item.views} views </div>
                     
                            </div>
                               </div>
                        <div className='d-flex align-items-center'>
                            <div className='d-none d-sm-block'><img src={viewsIcon} alt='' height='11px' width='16px'></img> {item.views} views </div>
                            <button variant='secondary' className='border-0 ms-2 rounded custom-bgcolor-grey p-1 px-2 '><img src={shareIcon} alt='' height='15px' width='13.5px'></img></button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            
            )}
            </div>
            <div className='w-25 d-none d-sm-block'>
                <div className='d-flex justify-content-between w-100 align-items-baseline'>
                <InputGroup className="overflow-hidden d-flex align-items-center w-100">
						<img
							alt=""
							src={locationIcon}
							width="22"
							height="22"
							className="ms-3"
						/>{" "}
						<Form.Control
							className="rounded-0 bg-white border-0 fw-medium small-font "
							type="text"
							value="Noida,India"
						/>
					</InputGroup>
                    <img
							alt=""
							src={editIcon}
							width="15"
							height="15"
							className="ms-3"
						/>{" "}
                </div>
                <hr/>
                <div className='warning-text d-flex '>
                <img
							alt=""
							src={warningIcon}
							width="13"
							height="13"
							className="m-2"
						/>{" "}
                        Your location will help us serve better and extend a personalised experience.
                </div>
            </div>
        </div>
    )
}

export default PostContent
