import React, { Component } from 'react'
import HomeImage from '../images/Lockpage'
import footer from '../images/fromMeta'
class Lockpage extends Component {
    state = {  } 
    render() { 
        return (
            <React.StrictMode>
                <img src={HomeImage} alt="Lockpage" />
                <img src={footer} alt="from meta" />
            </React.StrictMode>
        );
    }
}
 
export default Lockpage;