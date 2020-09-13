import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from 'react-avatar-edit'
import {Button,ListGroup,Modal} from 'react-bootstrap'

export default class myVerticallyCenteralModalProfile extends Component {
   constructor(props){
       super(props);
       this.state={
           preview : null,
           name : ""
       }
       this.onCrop = this.onCrop.bind(this)
       this.onClose = this.onClose.bind(this)
   }

   onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview:preview})
  }
    render() {
       const {...props} = this.props
        return (
            <div>
                <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Change Profile
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <form className="profile-changes" method="POST">
               <h1>Username</h1>
              <input type = "text" value = {this.state.name} placeholder={props.name} onChange={(e)=> {
                         this.setState({name:e.target.value})
              }}/> <br /> 
             </form> 
             <div 
             style={{display:"flex",flexDirection:"row"}}
             >
             <Avatar
             width={390}
             height={295}
                 onCrop={this.onCrop}
                onClose={this.onClose}  
             />
                     <img src ={this.state.preview} alt="no_image" width = "300px" height="300px"/>
             </div>
             
            </Modal.Body>
            <Modal.Footer>
            <Button type="submit"
                
              onClick={() => {
                props.changeName(this.state.name)
                props.changeImage(this.state.preview)
                props.onHide()

              }}
            >Changes</Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
            </div>
        )
    }
}
