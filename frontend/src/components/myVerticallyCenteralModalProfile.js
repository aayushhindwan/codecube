import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from 'react-avatar-edit'
import {Button,ListGroup,Modal} from 'react-bootstrap'

export default class myVerticallyCenteralModalProfile extends Component {
   constructor(props){
       super(props);
       this.state={
           preview : null,
           name : "",
           publicProfile1 :"",
           publicProfile2 :"",
           studentBranch :"",
           studentYear :""
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

  componentDidMount(){
    const {...props} = this.props

    this.setState({name:props.name,publicProfile1:props.publicProfile1,publicProfile2:props.publicProfile2,studentBranch:props.studentBranch,studentYear:props.studentYear,preview:props.image})
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
             <form className="profile-changes">
               <h1>Username</h1>
              <input type = "text" value = {this.state.name} placeholder={props.name} onChange={(e)=> {
                         this.setState({name:e.target.value})
              }}/> <br /> 
               <h1>BRANCH </h1>
              <input type = "text" value = {this.state.studentBranch} placeholder={props.studentBranch} onChange={(e)=> {
                         this.setState({studentBranch:e.target.value})
              }}/> <br /> 
               <h1>YEAR</h1>
              <input type = "text" value = {this.state.studentYear} placeholder={props.studentYear} onChange={(e)=> {
                         this.setState({studentYear:e.target.value})
              }}/> <br /> 
               <h1>PUBLIC PROFILE ID_1</h1>
              <input type = "text" value = {this.state.publicProfile1} placeholder={props.publicProfile1} onChange={(e)=> {
                         this.setState({publicProfile1:e.target.value})
              }}/> <br /> 
               <h1>PUBLIC PROFILE ID_2</h1>
              <input type = "text" value = {this.state.publicProfile2} placeholder={props.publicProfile2} onChange={(e)=> {
                         this.setState({publicProfile2:e.target.value})
              }}/> <br /> 

             </form> 
             UPDATE PROFILE IMAGE
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
                props.changePublicProfile1(this.state.publicProfile1)
                props.changePublicProfile2(this.state.publicProfile2)
                props.change_studentBranch(this.state.studentBranch)
                props.change_studentYear(this.state.studentYear)
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
