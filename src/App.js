import React, { Component } from 'react';
import './App.css';

import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
// import {Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';

class App extends Component {
  render() {
    return (
      //  {/* Always shows a header, even in smaller screens. */}
<div style={{height: '650px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className='header-color nav-style' 
            title={<span><span style={{ color: '/ddd' }}></span>
            <a href='/'><strong><i class='fa fa-code' id='facolor' aria-hidden='true' />&nbsp;&nbsp;&nbsp;Laurie Aaronson</strong></a></span>}>
            <Navigation>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact Me</a>
                <a href="/resume">Resume</a>
            </Navigation>
        </Header>
        
        {/* <Drawer className='drawer-color' title="Menu">
            <Navigation>
                <a href="/resume">Resume</a>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact Me</a>
            </Navigation>
        </Drawer> */}
          <div className ='page-content' />
          <Main />
        <Content />
    </Layout>
</div>
    );
  }
}

export default App;
