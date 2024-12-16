import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavbarToggle, NavDropdown } from 'react-bootstrap'
import './Dashboard.css'
import { useNavigate } from 'react-router'


function Dashboard() {
    const navigate=useNavigate();
    const navigatetask=()=>{
        navigate('/update')
    }
    const handleLogout=()=>{
      debugger
        localStorage.clear()
        navigate('/')
    }
    // useEffect=(()=>{
    //   handleCheckIsLoggedIn()
    // },[]);
    const handleCheckIsLoggedIn = () => {
      debugger; // For debugging
      if (!localStorage.getItem('username')) {
        navigate('./'); // Redirect if not logged in
      }
    };
  return (
    <>
    <div onLoad={handleCheckIsLoggedIn} className="w-100 navdata">
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
            <Nav.Link onClick={handleLogout} style={{textAlign:'right'}}> <b> Logout</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div className="taskdata" style={{display:'flex',justifyContent:'center',alignItems:'start',padding:'50px',textAlign:'center',height:'100vh'}}>
        <table style={{border:'2px solid black',width:'100%'}}>
            <thead  style={{backgroundColor:'black',color:'white'}}>
                <th>SlNO</th>
                <th>Task ID</th>
                <th>Task Description</th>
                <th>Status</th>
                <th>Asssigned Hours</th>
                <th>Remaining Hours</th>

            </thead>
            <tbody style={{backgroundColor:'white'}}>
                <tr>
                <td>1</td>
                <td>10011</td>
                <td style={{textAlign:'left'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem in fugiat eius, magni ratione assumenda labore consequuntur tenetur asperiores porro temporibus voluptates, ipsum dolores eveniet! Eveniet harum officia magnam natus.</td>
                <td>Pending</td>
                <td>16</td>
                <td>16</td>
                </tr>
                <tr>
                <td>1</td>
                <td>10011</td>
                <td style={{textAlign:'left'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem in fugiat eius, magni ratione assumenda labore consequuntur tenetur asperiores porro temporibus voluptates, ipsum dolores eveniet! Eveniet harum officia magnam natus.</td>
                <td>Pending</td>
                <td>16</td>
                <td>16</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Dashboard