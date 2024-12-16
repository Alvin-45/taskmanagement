import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavbarToggle, NavDropdown } from 'react-bootstrap'
import './Update.css'
import { useNavigate } from 'react-router'

function Update() {
    const navigate=useNavigate();
    const navigatetask=()=>{
        navigate('/update')
    }
    const handleLogout=()=>{
      debugger
        localStorage.clear()
        navigate('/')
    }
  return (
    <>
    <div className="w-100 navdata">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{width:'100%'}}>
        <Navbar.Brand href="/dashboard" style={{color:'darkblue'}}>Task-Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={navigatetask}>Task Update</Nav.Link>
            
            <NavDropdown title="Report" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Date Wise Report</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Month wise Report
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={handleLogout} style={{textAlign:'right'}} > <b> Logout</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div className="pagedata">
        <div className="bg-primary w-80 p-5 m-5" style={{borderRadius:'20px'}}>
        <div className="bg-light w-80 p-3 m-3" style={{borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <label htmlFor="" style={{width:'80%'}}>
                Select Task:
                <br />
                <select name="" id="" style={{width:'100%'}}>
                    <option value="-1">Select A Task</option>
                </select>
            </label>
            <label htmlFor="" style={{width:'80%'}}>
                Select SubTask:
                <br />
                <select name="" id="" style={{width:'100%'}}>
                    <option value="-1">Select A Task</option>
                </select>
            </label>
            <div className="preloaddata" style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'80%'}}>
            <label htmlFor="" style={{width:'80%'}}>
                Task Updated Date:
                <br />
                <input type="text"  readOnly />
            </label>
            <label htmlFor="" style={{width:'80%'}}>
                Work Percentage:
                <br />
                <input type="text"  readOnly />
            </label>
            <label htmlFor="" style={{width:'80%'}}>
                Hours Assigned:
                <br />
                <input type="text"  readOnly />
            </label>
            <label htmlFor="" style={{width:'80%'}}>
                Remaining Hours:
                <br />
                <input type="text"  readOnly />
            </label>
            </div>
            <div className="taskdescribe" style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <label htmlFor="" style={{width:'80%'}}>
                Task Description:
                <br />
                <textarea name="" id="" cols={'100'} readOnly></textarea>
                
            </label>
            <label htmlFor="" style={{width:'80%'}}>
                Todays Work description:
                <br />
                <textarea name="" id="" cols={'100'} ></textarea>
            </label>
            <div className=""  style={{textAlign:'left',display:'flex',justifyContent:"start",alignItems:'start',width:'50%'}}>
                <p style={{width:'100%'}}>Do you need overtime?
            </p><input type="radio" />Yes
                <input type="radio" name="No" id="" />No</div>
                <button className="btn btn-outline-success">Submit</button>
            
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Update