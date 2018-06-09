import React, { Component } from 'react';
import { Link, Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid" title>
          
          
          {/* Project 1 */}
          <Card shadow={4} style={{width: '320px', height: '320px', margin: 'auto'}}>
         
          <CardTitle
            className="card-title align-center"
            style={{
              color: 'white',
              height: '150px',
              background: 'black',
              // 'url(https://image.flaticon.com/icons/svg/69/69084.svg) center / cover'
            }}>
            Project: Click-It
          </CardTitle>

          <CardText>
            A memory game. Click an image earn a point. Images move randomly.  If an image is clicked twice the game is over and the user loses.  
          </CardText>
            <CardActions border className='align-center'>
              <a href='https://github.com/lmaaronson/click-it' rel='noopener noreferrer' target='_blank'><Button colored>GitHub</Button></a>
              <a href='https://lmaaronson.github.io/' rel='noopener noreferrer' target='_blank'>  <Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
          
          
          {/* Project 2 */}
          <Card shadow={4} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle 
            className="card-title align-center"
            style={{
              color: '#fff', 
              height: '150px',
              background: 'black' }}
              // background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} 
              >
              Project: Bootcamp Bookmarks
              </CardTitle>
            <CardText>
             Five (5) day group project.  
             Envisioned the inital concept for the app to solve a problem of organizing resoureces.  
             Developed the backend models, routes and created intial wireframes for app UI.
            </CardText>
            <CardActions border className='align-center'>
            <a href='https://github.com/DMoldenhauer/Bookmarks' rel='noopener noreferrer' target='_blank'><Button colored>GitHub</Button></a>
            <a href='https://bootcamp-bookmarks.herokuapp.com' rel='noopener noreferrer' target='_blank'> <Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
          
          
          {/* Project 3 */}
          <Card shadow={4} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle 
            className="card-title align-center"
            style={{
              color: '#fff', 
              height: '176px',
              background: 'black'
              }} >
              Project: Sequelize
              </CardTitle>
            <CardText>
              Users have the option to add or "eat" a burger.  App uses MySQL and Sequelize to store and retreive data, Express, and Node JS.
            </CardText>
            <CardActions border className="align-center">
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
      )
    
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is HTML/CSS</h1></div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>HTML/CSS</Tab>
         
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
};

export default Projects;