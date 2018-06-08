import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style= {{ width: '100%', height: '100vh', margin: 'auto'   }} > 
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src='https://wordsmith.org/words/images/avatar2_large.png'
              alt= 'avatar' 
              className='avatar-img'
            />
          
            <div className='banner-text'>
              <h1> Full Stack Web Developer </h1>

              <hr/>
            
          <p> HTML5/CSS&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Javascript&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Node JS&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;React&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;MySQL/MongoDB&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;&nbsp;&nbsp;&nbsp; </p>
            
        <div className='social-links'> 
            
            {/* linkedin icon */}
              <a href='https://www.linkedin.com/in/laurie-aaronson/' rel='noopener noreferrer' target='_blank'>
                <i class='fa fa-linkedin-square' aria-hidden='true'/>
              </a>

            {/* github icon */}
              <a href='https://github.com/lmaaronson' rel='noopener noreferrer' target='_blank'>
                <i class='fa fa-github-square' aria-hidden='true'/>
              </a>
            
            {/* github icon */}
              <a href='https://twitter.com/lmaaronson?lang=en' rel='noopener noreferrer' target='_blank'>
                <i class='fa fa-twitter-square' aria-hidden='true'/>
              </a>
              </div>
            </div>
        </Cell>
      </Grid>
    </div>
  )
}
}

export default Landing;