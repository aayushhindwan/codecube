import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class login extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            
             <div className="main-form-container">
               
               <div className="form-data">
                   <h4>Email</h4>
                   <input type="text" />
               </div>
               <div className="form-data">
                   <h4>Password</h4>
                   <input type="text" />
               </div>
              
            </div>
            
        )
    }
}
