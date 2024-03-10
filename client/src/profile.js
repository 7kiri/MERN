import profilephoto from './images/profile.png'
import React from 'react'

const popupwindowstyle={width:'300px',height:'450px', background:'pale yellow'};
const profilephotostyle={width:'75px',height:'75px', position:'absolute', left:'115px', top: '10px'};
const profilephotodivstyle={height: '20px'}
const space={height:'10px'}

function Profile(){
    <div id='popupwindow' className='popupwindow' style={popupwindowstyle} >
        <div style={profilephotodivstyle}>
            <img src={profilephoto} alt='' style={profilephotostyle} />
            </div>


    </div>


}
export default Profile;
