import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post_Doubt from './doubt_post.js'
import '../assests/scss/practice.scss'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default class practice extends Component {
 
    constructor(props) {
        super(props);
       
      }
 
      state = {
        selected : "question"
     }
    render() {
        return (
           <>
           <div>
               <div className="main-practice-container">
                 <div className="practice-title">
                 Knapsack problem - Java solution with thinking process O(nm) Time and O(m) Space
                 </div>
                 <div className="sub-details">
                     <div className="toggle-question">
                          <div id="question"
                          style={{boxShadow : (this.state.selected==="question")? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" : null,
                                background:(this.state.selected==="question") ? "grey":null,
                                color : (this.state.selected==="question") ? "white":null
                                 }}
                           onClick={() => {
                            this.setState({selected:"question"})
                            document.getElementById("question").style.cssText = " box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                            document.getElementById("editorial").style.cssText = " box-shadow: none,color:black"

                        }}
                          >QUESTION</div>
                          <div
                          id="editorial"
                          onClick={() => {
                              this.setState({selected:"editorial"})
                              document.getElementById("editorial").style.cssText = " box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                              document.getElementById("question").style.cssText = "box-shadow:none,background:none,color:black"
                          }}
                          style={{boxShadow : (this.state.selected==="editorial")? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" : null,
                                background:(this.state.selected==="editorial") ? "grey":null,
                                color : (this.state.selected==="editorial") ? "white":null
                                 }}
                          >EDITORIAL</div>
                     </div>
                     {
                             (this.state.selected === "question") ?
                                <div className="details">
                         
                                This problem is essentially let us to find whether there are several numbers in a set which are able to sum to a specific value (in this problem, the value is sum/2).
        
                                Actually, this is a 0/1 knapsack problem, for each number, we can pick it or not. Let us assume dp[i][j] means whether the specific sum j can be gotten from the first i numbers. If we can pick such a series of numbers from 0-i whose sum is j, dp[i][j] is true, otherwise it is false.
        
                                Base case: dp[0][0] is true; (zero number consists of sum 0 is true)
        
                                Transition function: For each number, if we don't pick it, dp[i][j] = dp[i-1][j], which means if the first i-1 elements has made it to j, dp[i][j] would also make it to j (we can just ignore nums[i]). If we pick nums[i]. dp[i][j] = dp[i-1][j-nums[i]], which represents that j is composed of the current value nums[i] and the remaining composed of other previous numbers. Thus, the transition function is dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]] 
                                 </div>  :
                                  <div className="details">
                                      This is a classic knapsack problem. Honestly, I'm not good at knapsack problem, it's really tough for me.

                                        dp[i][j] : the number of combinations to make up amount j by using the first i types of coins
                                        State transition:

                                        not using the ith coin, only using the first i-1 coins to make up amount j, then we have dp[i-1][j] ways.
                                        using the ith coin, since we can use unlimited same coin, we need to know how many ways to make up amount j - coins[i-1] by using first i coins(including ith), which is dp[i][j-coins[i-1]]
                                        Initialization: dp[i][0] = 1

                                        Once you figure out all these, it's easy to write out the code:
                                    </div> 

                         }
                    
                 </div>

               </div>
           </div>
        
           </>
        )
    }
}
