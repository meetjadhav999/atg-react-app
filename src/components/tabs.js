import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/esm/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import joinGroupIcon from '../images/joingroup.svg'
import PostContent from './content';
import Form from 'react-bootstrap/Form'
function TabContent() {
    return (
        <Container className='p-0 p-sm-2'>
            <div className='d-flex d-md-none mt-2 justify-content-between align-content-baseline'>
                <h6 className='fw-bold mx-2 mb-0'>Post{'(3)'}</h6>
                <Form.Select className='w-auto border-0 little-dark-bg fw-medium focus-ring mx-2'>
                    <option>Filter: All</option>
                    <option>Article</option>
                    <option>Education</option>
                    <option>Job</option>
                </Form.Select>
            </div>
            <Tabs
                defaultActiveKey="allpost"
                transition={false}
                id="noanim-tab-example"
                className="mb-3 mt-4 w-100 d-none d-md-flex"
            >
                <div className='align-buttons align-items-center d-none d-md-flex'>
                    <DropdownButton align="end" id="dropdown-basic-button" title="Write a post" className="bg-light m-2 rounded" variant="light">
                        <Dropdown.Item href="#/action-1">Action1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Action2</Dropdown.Item>
                    </DropdownButton>
                    <Button>
                        <img
                            src={joinGroupIcon}
                            height='22'
                            width='22'
                            className='me-2'
                        ></img>
                        Join Group</Button>
                </div>
                <Tab eventKey="allpost" title="All Posts(32)">
                    <PostContent></PostContent>
                </Tab>
                <Tab eventKey="article" title="Article">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="event" title="Event">
                    Tab content for Contact
                </Tab>
                <Tab eventKey="education" title="Education">
                    Tab content for Contact
                </Tab>
                <Tab eventKey="job" title="Job">
                    Tab content for Contact
                </Tab>



            </Tabs>

            

        </Container>

    );
}

export default TabContent;