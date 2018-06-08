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
          <Card shadow={2} style={{width: '320px', height: '320px', margin: 'auto'}}>
          <CardTitle
            className="card-title"
            style={{
              color: 'black',
              height: '175px',
              background: 'url(http://i1.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg) center / cover'
            }}
          >
            Click-It
          </CardTitle>
          <CardText>
            A memory game. Everytime an image is clicked, they move randomly to another position and a point is scored.  If an image is clicked twice the game is over and the user loses.  
          </CardText>
            <CardActions border className='align-center'>
            <a href='https://github.com/lmaaronson/click-it' rel='noopener noreferrer' target='_blank'><Button colored>GitHub</Button></a>
            <a href='https://lmaaronson.github.io/' rel='noopener noreferrer' target='_blank'>  <Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
          
          {/* Project 2 */}
          <Card shadow={2} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
          
          {/* Project 3 */}
          <Card shadow={2} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
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
          <Tab>React</Tab>
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