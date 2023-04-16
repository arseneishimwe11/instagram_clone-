import React, { Component } from 'react'
import Msbutton from '../../images/microsoft.png'
class Badge extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <p>Get the app.</p>
                <div className='button-references'>
                    <a href='https://play.google.com/store/apps/details?id=com.instagram.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' id="google-play"/></a>
                    <div className='microsoft-button'>
                        <img src={Msbutton} id='ms-button' alt="ms-button"/>
                        <div>
                            <p>Get it from </p><br/>
                            <h3>Microsoft</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Badge;