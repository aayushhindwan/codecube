import React, { Component, useState,useEffect } from 'react'
import {Button,ListGroup,Modal} from 'react-bootstrap'
import '../assests/scss/profile.scss'
import Avatar from 'react-avatar-edit'
import MyVerticallyCenteredModalProfile from './myVerticallyCenteralModalProfile';
import axios from 'axios';
class  Profile extends Component{
  state={
              FullName: "",
              CodeChefProfile:  "",
              CodeForceProfile: "",
              Branch: "",
              GraduationYear:"",
              Interests:[],
              show:true,
              image:"https://homepages.cae.wisc.edu/~ece533/images/mountain.png"
  }
  componentDidMount()
  {
          axios.get('http://localhost:3001/profile/user',{
            headers: {
              'authorization': 'Bearer '+ localStorage.Token,
            }
          }).then((res)=>{
            console.log(res);
            this.setState({
              FullName: res.data.FullName,
              CodeChefProfile:  res.data.CodeChefProfile,
              CodeForceProfile: res.data.CodeForceProfile,
              Branch: res.data.Branch,
              GraduationYear:res.data.GraduationYear,
              Interests:res.data.Interests,
              image:res.data.imageUrl,
          })
          });
         
        }
        render()
        {
          return(
<div>
<div class="main_profile_div">
          <div className="upper_div">
              <div  className="userProfile"> 
<div className="profile_pic"><img src ={this.state.image} alt="no_image"/></div> 
</div>
</div>
</div>
  <MyVerticallyCenteredModalProfile
  changeName={(f)=>{this.setState({FullName:f})}}
  changeBranch={(f)=>{this.setState({Branch:f})}}
  changeProfile1={(f)=>{this.setState({CodeChefProfile:f})}}
  changeProfile2={(f)=>{this.setState({CodeForceProfile:f})}}
  changeYear={(f)=>{this.setState({GraduationYear:f})}}
  changeImage={(f)=>{this.setState({image:f})}}

  show={this.state.show}
  onHide={()=>{
    this.setState({show:false});
    console.log("closed");
  }}
  />
 <h1>Details</h1>

 <div>Name:{this.state.FullName}</div>
 <div>Branch:{this.state.Branch}</div>
 <div>Year:{this.state.GraduationYear}</div>
<div>CodeChef:{this.state.CodeChefProfile}</div>
<div>CodeForce:{this.state.CodeForceProfile}</div>
<Button onClick={()=>{ this.setState({show:true});}}>Update Profile</Button>

</div>

          );
        }


   
      };
      export default  Profile;