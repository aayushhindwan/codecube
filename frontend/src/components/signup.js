import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class signup extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="main-form-container">
            
               <div className="form-data">
                   <h4>Email</h4>
                   <input value={this.props.email} onChange={this.props.emailChange} type="email" />
               </div>
               <div className="form-data">
                   <h4>Password</h4>
                   <input value={this.props.password} onChange={this.props.passwordChange} type="password" />
               </div>
              
            </div>
        )
    }
}
