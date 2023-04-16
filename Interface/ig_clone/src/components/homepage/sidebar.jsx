import React, { Component } from 'react';
import Instapic from '../../images/instablack.png';
import Field from './field';
import home from '../../images/home.png'  
import search from '../../images/search.svg'
import explore from '../../images/explore.png'
import reels from '../../images/reels.png'
import more from '../../images/menu (1).png'
import create from '../../images/Create.png'
import messages from '../../images/messenger.png'
import nots from '../../images/heart.png'
import profile from '../../images/DSC_0037.jpg'
import '../../App.css';

class Sidebar extends Component {
  state = {};
  style = {
    borderRadius:"50%"
  }

  render() {
    return (
      <div className='sidebar'>
        <img src={Instapic} alt='instagram' className='black_ig' />
        <Field
          field="Home"
          iconImg={home}/>
        <Field
          field="Search"
          iconImg={search}/>
        <Field
          field="Explore"
          iconImg={explore}/>
        <Field
          field="Reels"
          iconImg={reels}/>
        <Field
          field="Messages"
          iconImg={messages}/>
        <Field
          field="Notifications"
          iconImg={nots}/>
        <Field
          field="Create"
          iconImg={create}/>
        <Field
          field="Profile"
          iconImg={profile}
          style={this.style}/>
        <Field
          field="More"
          iconImg={more}/>

      </div>
    );
  }
}

export default Sidebar;
