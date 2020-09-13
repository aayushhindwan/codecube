import React, { Component,useState } from 'react'
import SRCIMG from '../assests/images/landingSVG.svg'
import {Link} from "react-router-dom";
import {Button,Modal} from 'react-bootstrap'
import Signup from './signup'
import SignIn from './login'
import '../assests/scss/landingPage.scss'

  
function MyVerticallyCenteredModal(props) {
    const [answer,changeAnswer] = useState("");
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             Sign-up with the following detail 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup  />
          </Modal.Body>
          <div className="signIn-redirect"
          style ={{marginLeft:"20px"}}
          >All ready have an account :
          <div
          style ={{color:"blue"}}
          onClick = {() => {
           props.onHide()
             props.setModalShowSignIn()
          }}
          >Sign in</div>
          </div>
          <Modal.Footer>
              <Button>Sign-up</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function MyVerticallyCenteredModalSignIn(props) {
    const [answer,changeAnswer] = useState("");
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             Sign-in with the following detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignIn />
          </Modal.Body>
          <div className="signIn-redirect"
          style ={{marginLeft:"20px"}}
          >Create New Account :
          <div
          style ={{color:"blue"}}
          onClick = {() => {
              props.onHide()
             props.setModalShow()
          }}
          >Sign in</div>
          </div>
          <Modal.Footer>
              <Button>Sign-up</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


function LandingPage () {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowSignIn, setModalShowSignIn] = useState(false);
        return (
            <>
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            setModalShowSignIn = {() => setModalShowSignIn(true)}
          />
           <MyVerticallyCenteredModalSignIn
            show={modalShowSignIn}
            onHide={() => setModalShowSignIn(false)}
            setModalShow = {() => setModalShow(true)}
          />
            <div className = "main-landingPage">
                <div className="sub-div-landingPage">
                    <div className="landing-heading">GET READY TO LAND TO YOUR CODING INTERVIEW</div>
                    <div className="landing-description">A landing page includes several elements: A page completely focused on the offer. Even website navigation
                         gets removed so as not to distract from the offer. 
                         A compelling headline and space to explain how the offer delivers sufficient
                          value that a visitor would agree to leave an email address and other information
                    </div>
                    <div className="button-landing">
                 <button
                          onClick={() => setModalShow(true)}
                         >Sign-up</button>
                        <button
                        onClick={() => setModalShowSignIn(true)}
                        >Sign-In</button>
                    </div>
                </div>
                <div>
                <img src = {SRCIMG} />
                </div>
                
            </div>
            </>
        )
    }
export default LandingPage



// import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from "react-component-export-image";
// import React, { useRef } from "react";

// const ComponentToPrint = React.forwardRef((props, ref) => ( 
//     <div ref={ref}>Hello World</div>));

// const MyComponent = () => {
//   const componentRef = useRef();

//   return (
//   <React.Fragment>
//       <ComponentToPrint ref={componentRef} />
//       <button onClick={() => exportComponentAsJPEG(componentRef)}>
//           Export As JPEG
//       </button>
//       <button onClick={() => exportComponentAsPDF(componentRef)}>
//           Export As PDF
//       </button>
//       <button onClick={() => exportComponentAsPNG(componentRef)}>
//           Export As PNG
//       </button>
//   </React.Fragment>);
// }

// export default MyComponent;
