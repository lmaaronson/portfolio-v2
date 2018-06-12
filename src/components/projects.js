import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';


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
    <Card shadow={4} style={{width: '320px', height: '320px', margin: 'auto', align:'left'}}>
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
              <Button colored></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
      )
  } else if(this.state.activeTab === 1) {
    return (
      <div>
         <Card shadow={4} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle 
            className="card-title align-center"
            style={{
              color: '#fff', 
              height: '100px',
              background: 'black' }}
              // background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} 
              >
              Project: Bootcamp Bookmarks
              </CardTitle>
            <CardText>
             Group project with a 5 day timeline.  
             HTML, CSS, Javascript, Jquery, Bootstrap, SQL, Node, NPM, Express, Sequelize, 
             Handlebars, MVC framework, Postman for testing.  Deployed on Heroku
            </CardText>
            <CardActions border className='align-center'>
            <a href='https://github.com/DMoldenhauer/Bookmarks' rel='noopener noreferrer' target='_blank'><Button colored>GitHub</Button></a>
            <a href='https://bootcamp-bookmarks.herokuapp.com' rel='noopener noreferrer' target='_blank'> <Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
      </div>
    )
  } else if(this.state.activeTab === 2) {
    return (
      <div>
         <Card shadow={4} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle 
            className="card-title align-center"
            style={{
              color: '#fff', 
              height: '176px',
              background: 'black'
              }} >
              Project: Code Savvy Website
              </CardTitle>
            <CardText>
              Created new UI/UX for this non-profit and then developed the website from 
              scratch using WordPress and plugins. Also completed the domain transfer and new host
              site.  Perform on-going maintenance and updates to site.
            </CardText>
            <CardActions border className="align-center">
              <Button colored>GitHub</Button>
              <Button colored></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
      </div>
    )
}
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab className='tab-titles tab-background'>Inidvidual Projects</Tab>
          <Tab className='tab-titles'>Group Projects</Tab>
          <Tab className='tab-titles'>Web Development</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;