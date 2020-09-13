import React, { Component, useState } from 'react'
import {Button,ListGroup,Modal} from 'react-bootstrap'
import '../assests/scss/profile.scss'
import Avatar from 'react-avatar-edit'
import MyVerticallyCenteredModalProfile from './myVerticallyCenteralModalProfile'
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



// function  onClose() {
//     this.setState({preview: null})
//   }
  
//  function onCrop(preview) {
//     this.setState({preview})
//   }
function Profile(){
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowProfile, setModalShowProfile] = React.useState(false);
  const [preview, setpreview] = useState(null)
  const [name,changeName] = useState("shivam singh")
  const [image,changeImage] = useState("https://homepages.cae.wisc.edu/~ece533/images/mountain.png" )
        let Component;
   function showComponent(item){
            //  if(item == "Doubts"){return Component = <Doubts />}
            //  if(item == "Posts"){return Component = <Posts />}
            //  if(item == "Articles"){return Component = <Articles />}

    }

    function onClose() {
      setpreview(null)
    }
    
    function onCrop(preview) {
       setpreview(preview)
    }
    

    return (
   <>

      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
     <MyVerticallyCenteredModalProfile
      show={modalShowProfile}
      onHide={() => setModalShowProfile(false)}
      onCrop = {onCrop}
      onClose = {onClose}
      changeImage = {changeImage}
      name = {name}
      changeName= {changeName}
    />
        <div class="main_profile_div">
          <div className="upper_div">
              <div  className="userProfile"> 
               <div className="profile_pic"><img src ={image} alt="no_image"/></div> 
             
                <div><h2>{name}</h2>
                <Button
                onClick={() => setModalShowProfile(true)}
                >Changes Profile</Button>
                </div>
              
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