import React from 'react';
import './A.css';




class Form extends React.Component{
    constructor(){
        super() ;
    }
    render(){
        return(
          <form className = 'loginbox'>
            <p>Username</p>
            <input type="text" name="username" placeholder="Enter Username" /> <br/><br/><br/>
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter Password " /> <br/>
            <p>Username</p>
            <input type="text" name="username" placeholder="Enter Username" /> <br/><br/><br/>
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter Password " /> <br/>
            <input type="submit" name="log" value="login" style={{opacity: 100}}/> <br/><br/>
            <center><a href="#">Lost your password ?</a></center><br/>
            <center style={{opacity:100}}><a href="#">Don't have an account ?</a></center>
          </form>
        )
    }
}


export default Login ;







  



  

/*
<div aria-haspopup="dialog" aria-label="Open new message" class="_3GvcBFnnOqEvAbpxb4K9_">
  <button class="_2So8ItJQ9P6IqaCUlCO-2f flex-center IMAGE _1gnOKXWkiErWpwukGzkFAe _3S6qOFxcrgO0yM2f9_l6JZ j8lkf_ta2sl2WMvjiqiaK" id="widgetButton" style="background-color: rgb(30, 39, 64); background-image: url(&quot;https://s3.amazonaws.com/drift-public-prod/1162167/496e65bb8ce2a7335b8058fb1db9cd69aa52r4kmazhu&quot;); fill: rgb(255, 255, 255);">
    <div class="darkenButton" style="z-index: 1;">

    </div>
    </button><div class="_2zlCNz6GWncyQ9b6a9KhmX"><!-- react-empty: 16 -->
    </div>
    <div class="-zOcMNdFsi7uCebRFihg7">
      <div class="_2d_Bp-Kt5gkBPBdwssn49b" role="dialog" aria-label="You have received a message">
        <span>
        <div class="l82_D_KImuLA5zRjJBNjH">
          <div class="mTzHPSKdhS7SRFrqMCAlW">
            <button class="_1lVdwgQwG8iYSXC1rtIUn- _6eWTYUKsxoA_IdO5RL7zQ" title="Dismiss" aria-label="Dismiss">
              <img class="_3sY_jwfgYHGUb3-n-s6cwm" src="/deploy/assets/static/images/4a3c1161b81f906ccb7e41df6b548811.svg" alt="×">
            </button>
            </div>
            <div class="_2Am0IsT9lH_Ptdj-CW2uiy _2hJjohH-EqiCHgHG2iPxnD _1w6YXZ6Lh2aJD2goJRtLx3">
              <span class="_2IOZNDmRPpIkWq7_LHNMMH">
                </span>
              <div class="_2fl3RiMFMzxYgTM_TjTg8I">
                <div class="_1QMEkp0zgBS93G6kHWmAHJ">
                  <span>How can I help?</span>
                </div>
                </div>
                </div>
                </div>
                </span>
                </div>
                </div>
                </div>

                */