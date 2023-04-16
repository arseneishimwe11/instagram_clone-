import React, { Component } from 'react'
import '../../App.css'
class Footer extends Component {
    render() { 
        return (
            <div>
                <div className='footer'>
                    <a href='https://about.meta.com/'>Meta</a>
                    <a href='https://about.instagram.com/'>About</a>
                    <a href='https://about.instagram.com/blog/'>Blog</a>
                    <a href='https://about.instagram.com/about-us/careers'>Jobs</a>
                    <a href='https://help.instagram.com/'>Help</a>
                    <a href='https://developers.facebook.com/docs/instagram'>API</a>
                    <a href='https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect'>Privacy</a>
                    <a href='https://help.instagram.com/581066165581870/'>Terms</a>
                    <a href='https://www.instagram.com/directory/profiles/'>Top Accounts</a>
                    <a href='https://www.instagram.com/explore/locations/'>Locations</a>
                    <a href='https://play.google.com/store/apps/details?id=com.instagram.lite&hl=en&gl=US'>Instagram Lite</a>
                    <a href='https://web.facebook.com/help/instagram/261704639352628?_rdc=1&_rdr'>Contact Uploading & Non-Users</a>
                    <a href='https://about.meta.com/'>Meta Verified</a>
                </div>
                <div className='copyright'>
                    <p>English</p>
                    <p>© 2023 Instagram from Meta</p>
                </div>
            </div>
        );
    }
}
 
export default Footer;