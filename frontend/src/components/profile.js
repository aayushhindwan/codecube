import React, { Component } from 'react'
import {Button,ListGroup,Modal} from 'react-bootstrap'
import '../assests/scss/profile.scss'


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
           Write your Skills
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Add your Skills </h4>
        <p>
          This is my skiills and i will improve it
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Profile(){
  const [modalShow, setModalShow] = React.useState(false);
        let Component;
   function showComponent(item){
            //  if(item == "Doubts"){return Component = <Doubts />}
            //  if(item == "Posts"){return Component = <Posts />}
            //  if(item == "Articles"){return Component = <Articles />}

    }
    return (
   <>

      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
        <div class="main_profile_div">
          <div className="upper_div">
              <div  className="userProfile"> 
               <div className="profile_pic"><img src ="https://homepages.cae.wisc.edu/~ece533/images/mountain.png" alt="no_image"/></div> 
                <div><h2>shivam sigh</h2></div>
               </div>
              <div className="addSkills">
                <Button onClick={() => setModalShow(true)}>Add Your Skills</Button>
                <div className="listGroup">
                   <p>Skills one</p>
                   <p>Skill two</p>
                </div>
              </div>  
          </div>
          <div className="scrollbar">
               <div onClick={()=> showComponent("Doubts")}>My Doubts</div>
               <div>My Articles</div>
               <div>My Posts</div>
          </div>
          <div className="Doubts_div">
           {Component}
          </div>
        </div>

        </>
    )
}

export default Profile