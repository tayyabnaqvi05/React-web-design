import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import hero from './images/hero.png';
import frame from "./images/Frame.png"
import account from "./images/account.png"
import review from "./images/Review.png" 
import consent from "./images/consent.png"
import access from "./images/access.png"
import '../App.css';
const Content = () => {
  return (
    <>
      <div class="main-wrapper">
      <Container>
      <Row>
        <Col sm={6}><img alt="logo" src={hero} className="heroimg" /></Col>
        <Col sm={6}>
            <div id="box1">
            <h3>Welcome to the ASH Research Collaborative Data Hub Participant Portal!</h3>
            <p>The Data Hub is a program that aims to improve the lives of people with blood diseases by finding better and more effective ways to care for patients. To learn more about the Data Hub, click the button below. </p>
            <Button variant="danger" className="btn-style ">Join the Data hub</Button>{' '}
            </div>
        </Col>
      </Row>
      <div className="text-center centermt">
      <Row>
        <Col sm={12}> <h1>How does it work?</h1>
        <p>Here is a quick overview of what steps are involved in joining the Data Hub.</p>
        </Col>
      </Row>
      </div>
      <div className='mt-5'>
      <Row>
        <Col sm={6} className="">
          <div className='d-flex'>
          <div>
          <img alt="logo" src={account}  />
          </div>
          <div className='ml'>  
        <h4 className='mainhead'>Create an Account</h4>
        <p className='maindesc'>You will provide your email address or mobile phone number and create a password.</p>
          </div>
          </div>
          <div className='d-flex'>
            <div>
          <img alt="logo" src={review}  />
          </div>
          <div className='ml'>  
        <h4 className='mainhead'>Review the consent form</h4>
        <p className='maindesc'>You can review the purpose of the ASH RC Data Hub and the reasons why your participation is important. The consent process takes approximately fifteen minutes, but you can take as much time as you need. </p>
          </div>
          </div>
          <div className='d-flex'>
            <div>
          <img alt="logo" src={consent}  />
          </div>
          <div className='ml'>  
        <h4 className='mainhead'>Fill in the consent form</h4>
        <p className='maindesc'>If you agree to join, you'll be asked to provide your name, date of birth, and electronic signature. You may download your signed consent form at any time.</p>
            </div>
            </div>
            <div className='d-flex'>
            <div>
          <img alt="logo" src={access}  />
          </div>
          <div className='ml'>  
        <h4 className='mainhead'>Access your profile</h4>
        <p className='maindesc'>Your profile will provide you access to the Data Hub's consent form(s) and educational materials.</p>
            </div>
            </div>
        </Col>
        <Col sm={6}>
            <div className="mt-5">
            <img alt="logo" src={frame}  />
            </div>
        </Col>
      </Row>
      <div>
      <Row>
        <Col sm={12}> <div class="d-grid gap-2 col-md-2 mx-auto mb-3 mt-3">
        <button type="button" class="btn btn-danger align-items-center">Create an Account</button>
        </div>
        </Col>
      </Row>
      </div>
      </div>
    </Container>
    <footer className="footer1 text-dark ">
  <div class="container-fluid">
    <div className="row">
      <div className="col-sm-6">
        © 2021 ASH Research Collaborative
      </div>
      <div class="col-sm-6 text-center ">
        
        <a href="/" className="text-danger">About</a>
        <a href="/" className="text-danger">Terms And Conditions</a>
        <a href="/" className="text-danger">Help</a>  
      </div>
    </div>
  </div>
</footer>

      </div>
    </>
  );
};

export default Content;
