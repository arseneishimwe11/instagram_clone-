import React, { Component } from 'react'
import '../App.css'
import Sidebar from './homepage/sidebar';
import StoriesNav from './homepage/stories'; 

class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div className='homepage'>
                <Sidebar/>
            </div>
        );
    }
}
 
export default Homepage;