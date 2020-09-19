import React, { Component ,Fragment} from 'react'
import PropTypes from 'prop-types'
import Post_Doubt from './doubt_post.js'
import '../assests/scss/practiceAllQuestion.scss'

import 'react-image-crop/lib/ReactCrop.scss';
import ReactCrop from 'react-image-crop';
import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom';

const imageMaxSize = 1000000000 // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})
export default class practice extends Component {
 
    constructor(props) {
        super(props);
       
      this.state = {
        selected : "question",
        crop : "",
        imgSrc : ""
     }
      }
 



    render() {
        return (
           <Fragment>
           <div>
             <div className="main-all-practice">
               
                 <div className="practice-question">
              <Link to='/practiceById'> <div className="question-title">Knapsack problem - Java solution with thinking process O(nm) Time and O(m) Space </div></Link>
                   <div className="question-body">This problem is essentially let us to find whether there are several numbers in a set which are able to sum to a specific value (in this problem, the value is sum/2).

                    Actually, this is a 0/1 knapsack problem, for each number, we can pick it or not. Let us assume dp[i][j] means whether the specific sum j can be gotten from the first i numbers. If we can pick such a series of numbers from 0-i whose sum is j, dp[i][j] is true, otherwise it is false.

                    Base case: dp[0][0] 
                   </div>
                 <div className="tags-container">
                       <div>c</div>
                       <div>java</div>
                       <div>c++</div>
                 </div>
              </div>
              <div className="practice-question">
                   <div className="question-title">HTML comments are not displayed in the browser, but they can help document your HTML source code.</div>
                   <div className="question-body">This problem is essentially let us to find whether there are several numbers in a set which are able to sum to a specific value (in this problem, the value is sum/2).

                    Actually, this is a 0/1 knapsack problem, for each number, we can pick it or not. Let us assume dp[i][j] means whether the specific sum j can be gotten from the first i numbers. If we can pick such a series of numbers from 0-i whose sum is j, dp[i][j] is true, otherwise it is false.

                    Base case: dp[0][0] 
                   </div>
                 <div className="tags-container">
                       <div>c</div>
                       <div>java</div>
                       <div>c++</div>
                 </div>
              </div>
              <div className="practice-question">
                   <div className="question-title">HTML comments are not displayed in the browser, but they can help document your HTML source code.</div>
                   <div className="question-body">This problem is essentially let us to find whether there are several numbers in a set which are able to sum to a specific value (in this problem, the value is sum/2).

                    Actually, this is a 0/1 knapsack problem, for each number, we can pick it or not. Let us assume dp[i][j] means whether the specific sum j can be gotten from the first i numbers. If we can pick such a series of numbers from 0-i whose sum is j, dp[i][j] is true, otherwise it is false.

                    Base case: dp[0][0] 
                   </div>
                 <div className="tags-container">
                       <div>c</div>
                       <div>java</div>
                       <div>c++</div>
                 </div>
              </div>
             </div>
           </div>
        
           </Fragment>
        )
    }
}
  
                 {/* <Dropzone onDrop={acceptedFiles => {
                     console.log(acceptedFiles)
                     
                     console.log(acceptedFiles[0].path)
                     this.setState({imgSrc : acceptedFiles[0].path})
                 }}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                    </section>
                                )}
                             </Dropzone> */}