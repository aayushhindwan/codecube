import React, { Component, useState, useEffect } from 'react'
import Avatar from 'react-avatar-edit'
import MyVerticallyCenteredModalProfile from './myVerticallyCenteralModalProfile';
import axios from 'axios';
import domain from '../domain.js'
import MultiCarouselPage from './multicaro.js'
class Profile extends Component {
  state = {
    FullName: "",
    CodeChefProfile: "",
    CodeForceProfile: "",
    Branch: "",
    GraduationYear: "",
    Interests: [],
    show: false,
    image: ""
  }
  updateProfile = () => {

    axios.post(domain + '/profile/user', {
      FullName: this.state.FullName,
      CodeChefProfile: this.state.CodeChefProfile,
      CodeForceProfile: this.state.CodeForceProfile,
      Branch: this.state.Branch,
      GraduationYear: this.state.GraduationYear,
      Interests: this.state.Interests,
      ImageUrl: this.state.image,
    }, {
      headers: {
        'authorization': 'Bearer ' + localStorage.Token,
      }
    }).then(res => { console.log(res) });
  }
  componentDidMount() {
    axios.get(domain + '/profile/user', {
      headers: {
        'authorization': 'Bearer ' + localStorage.Token,
      }
    }).then((res) => {
      if (res.status == 202)
        this.props.history.push("/");
      console.log(res);
      axios.get('https://competitive-coding-api.herokuapp.com/api/codechef/'+res.data.CodeChefProfile).then((res) => {
      console.log("codechef");
      console.log(res);
     
    });
      this.setState({
        FullName: res.data.FullName,
        CodeChefProfile: res.data.CodeChefProfile,
        CodeForceProfile: res.data.CodeForceProfile,
        Branch: res.data.Branch,
        GraduationYear: res.data.GraduationYear,
        Interests: res.data.Interests,
        image: res.data.ImageUrl,
      })
    });
    
    
  }
  render() {
    return (
      <div>

        <MyVerticallyCenteredModalProfile
          changeName={(f) => { if (f) this.setState({ FullName: f }) }}
          changeBranch={(f) => { if (f) this.setState({ Branch: f }) }}
          changeProfile1={(f) => { if (f) this.setState({ CodeChefProfile: f }) }}
          changeProfile2={(f) => { if (f) this.setState({ CodeForceProfile: f }) }}
          changeYear={(f) => { if (f) this.setState({ GraduationYear: f }) }}
          changeImage={(f) => { if (f) this.setState({ image: f }); console.log("image changed") }}
          submit={this.updateProfile}
          show={this.state.show}
          onHide={() => {
            this.setState({ show: false });
            console.log("closed");
          }}
        />
        <div style={{display:'grid',gridTemplateColumns: 'auto auto auto',background:""}}>
        <div  style={{display:'' ,paddingBottom:"10px"}}>
          <span style={{ padding:"10px",float: "left" }}>
          <img style={{overflow:'none'}} src={this.state.image} width="150px" alt="no_image"  />
          </span>
          <div style={{padding:"20px",float:"",background:""}}>
            <h3>Name: {this.state.FullName}</h3>
            <h3>Branch: {this.state.Branch}</h3>
            <h3>College: NIT Patna</h3>
            <button onClick={()=>{ this.setState({show:true});}}>Update Profile</button>
          </div>
        </div>
        <div  style={{display:'',margin:"20px",borderStyle:'double',borderRadius:'20px',padding:'10px'}}>
          <h2>Different Profiles:</h2>
          <div style={{padding:"20px",float:""}}>
            <h3>Codechef: {this.state.FullName}</h3>
            <h3>Codeforces: {this.state.Branch}</h3>
            <h3>github: {this.state.Branch}</h3>
           
          </div>
        </div>
        </div>
        <MultiCarouselPage/>
       <div style={{display:'inline'}}>
      
          <div style={{padding:'10px',margin:'10px'}}>
          <h1>Work Experience</h1>
          <div>
           <h2>Intern at HappyCode.in</h2>
          </div>
           <div>
             <p style={{textDecoration:'underline'}}>
               Description
             </p>
           </div>
          </div>




         <h1>Achievements</h1>
       <ol>
      <li> Qualified Zonal Computing Olympiad-2017 and participated in 
        Indian National Olympiad in Informatics-2017.</li>
        <li> Secured 900 National Rank in ICPC-2019-20(International Collegiate
Programming Contest) with 3rd Rank in College among all years.</li>
<li>Secured 2618 Global Rank in Code Jam 2020 and 1046 Global Rank in Kickstart Round B 2020.</li>
<li>Qualified Round 1 of TCS CodeVita Season 8 and secured Rank 322 from total participation 
  of 55,654 and Ranked 100 in Round 2. Certificate</li>
       </ol>

       </div>
     
      </div>

    );
  }



};
export default Profile;