import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}> 
          <h2> Laurie Aaronson</h2>
          <hr/>
          <img
              src="https://www.shareicon.net/data/512x512/2015/10/04/112038_glasses_512x512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
          <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}> Looking for opportunities for learning, engagement and professional/personal development to build my knowledge base and abilities.</p>
          </Cell>
          <Cell col={6}> 
          <h2> Contact Me</h2>
          <hr/>

          <div className='contact-list'>
          <List>
            <ListItem>
              <ListItemContent style={{ fontSize: '24px', fontFamily: 'Oswald' }}>
                <i className= 'fa fa-phone-square' aria-hidden= 'true'/>
              (651) 208-0936</ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{ fontSize: '24px', fontFamily: 'Oswald' }}>
                <i className= 'fa fa-envelope-square' aria-hidden= 'true'/>
              Email</ListItemContent> </ListItem>
            <ListItem>
              <ListItemContent style={{ fontSize: '24px', fontFamily: 'Oswald' }}>
                <i className= 'fa fa-github-square' aria-hidden= 'true'/>
              GitHub</ListItemContent> </ListItem>
            <ListItem>
              <ListItemContent style={{ fontSize: '24px', fontFamily: 'Oswald' }}>
                <i className= 'fa fa-linkedin-square' aria-hidden= 'true'/>
              Linkedin</ListItemContent> </ListItem>
            
            
            
            </List>
          </div>
          </Cell>
        </Grid>
      </div>
      
    )
  }
}

export default Contact;