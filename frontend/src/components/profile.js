import React, { Component, useState,useEffect } from 'react'
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
        <div className="tags-input" data-name="tags-input">
                {/* <span class="tag">HTML<span class="close"></span></span> */}
            </div>
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
    

    useEffect(() => {
      [].forEach.call(document.getElementsByClassName('tags-input'), function (el) {
        let hiddenInput = document.createElement('input'),
            mainInput = document.createElement('input'),
            tags = [];
        
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', el.getAttribute('data-name'));
    
        mainInput.setAttribute('type', 'text');
        mainInput.classList.add('main-input');
        mainInput.addEventListener('input', function () {
            let enteredTags = mainInput.value.split(' ');
            if (enteredTags.length > 1) {
                enteredTags.forEach(function (t) {
                    let filteredTag = filterTag(t);
                    if (filteredTag.length > 0)
                        addTag(filteredTag);
                });
                mainInput.value = '';
            }
        });
    
        mainInput.addEventListener('keydown', function (e) {
            let keyCode = e.which || e.keyCode;
            if (keyCode === 8 && mainInput.value.length === 0 && tags.length > 0) {
                removeTag(tags.length - 1);
            }
        });
    
        el.appendChild(mainInput);
        el.appendChild(hiddenInput);
    
        addTag('hello!');
    
        function addTag (text) {
            let tag = {
                text: text,
                element: document.createElement('span'),
            };
    
            tag.element.classList.add('tag');
            tag.element.textContent = tag.text;
    
            let closeBtn = document.createElement('span');
            closeBtn.classList.add('close');
            closeBtn.addEventListener('click', function () {
                removeTag(tags.indexOf(tag));
            });
            tag.element.appendChild(closeBtn);
    
            tags.push(tag);
    
            el.insertBefore(tag.element, mainInput);
    
            refreshTags();
        }
    
        function removeTag (index) {
            let tag = tags[index];
            tags.splice(index, 1);
            el.removeChild(tag.element);
            refreshTags();
        }
    
        function refreshTags () {
            let tagsList = [];
            tags.forEach(function (t) {
                tagsList.push(t.text);
            });
            hiddenInput.value = tagsList.join(',');
        }
    
        function filterTag (tag) {
            return tag.replace(/[^\w -]/g, '').trim().replace(/\W+/g, '-');
        }
    });
      })
  
    

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