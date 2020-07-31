import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import '../assests/scss/profile.scss'

function Profile(){
        let Component;
   function showComponent(item){
            //  if(item == "Doubts"){return Component = <Doubts />}
            //  if(item == "Posts"){return Component = <Posts />}
            //  if(item == "Articles"){return Component = <Articles />}

    }
    return (
        <div class="main_profile_div">
          <div className="upper_div">
              <div  className="userProfile"> 
               <div className="profile_pic"><img src ="https://homepages.cae.wisc.edu/~ece533/images/mountain.png" alt="no_image"/></div> 
                <div><h2>shivam sigh</h2></div>
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
    )
}

export default Profile