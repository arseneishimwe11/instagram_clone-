import React, { Component } from 'react'
import '../../App.css'
class Field extends Component {
    state = {  } 
    render() { 
        return (
            <div className='field'>
                <a href=''> 
                    <img src={this.props.iconImg} alt={this.props.field} style={this.props.style}/>
                    <p>{this.props.field}</p>
                </a>
            </div>
        );
    }
}

export default Field;