import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div>
       <Grid className='aboutme-grid'>
          <Cell col={12}> 
          <h2> Laurie Aaronson</h2>
          <hr/>
          <img
              src="https://www.shareicon.net/data/512x512/2015/10/04/112038_glasses_512x512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
          <p style={{ width: '85%', margin: 'auto', paddingTop: '1em'}}> 
          Laurie possesses strong project management experience with unique attention to detail, 
          business analysis, and application design, development, and implementation proficiencies.  
          An innovative and creative with technical background creating the perfect balance of developer 
          and team member.  
          <br /><br />
          As a former educator and coach, Laurie Aaronson leverages her love of 
          learning and gift of teaching to, deliver, mentor and explore a diversity of technology-based 
          innovations.  he has taken projects from concept to reality for over 10 years.  
          Laurie is a passionate, community-minded “geek” who continually advocates for underdogs, 
          especially girls and youth.    </p>
        </Cell> 
      </Grid>
      </div>
    )
  }
}

export default About;