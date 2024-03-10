import React from 'react'
import logo from './logo.png'
import { callApi, errorResponse, setSession } from './main';
import {Link} from 'react-router-dom'

const popupwindowstyle={width:'300px',height:'450px', background:'white'};
const logostyle={width:'75px',height:'75px', position:'absolute', left:'115px', top: '10px'};
const logodivstyle={height: '100px'}
const space={height:'10px'}

function Login(){
    window.onload = function(){
        var login = document.getElementById('login');
        login.style.display="block";
    }

    function validate() {
        var T1=document.getElementById('T1');
        var T2=document.getElementById('T2');

        var url = "http://localhost:5000/login/signin";
        var data = JSON.stringify({
            emailid : T1.value,
            pwd : T2.value
        });
        callApi("POST", url, data, loginSuccess, errorResponse);
    }

    function loginSuccess(res) {
        var data = JSON.parse(res);
        var T1 = document.getElementById('T1');
        
        if (data === 1) {
            if (/^\d{5}$/.test(T1.value)) { // Check if T1 contains only digits
                setSession("sid", T1.value, 0.5);
                window.location.replace("/admin");
            } else {
                setSession("sid", T1.value, 1.0);
                window.location.replace("/home");
            }
        } else {
            alert("Invalid Credentials!");
        }
    }
    
    function registration(){
        var T1 = document.getElementById('T1');
        var T2 = document.getElementById('T2');
        T1.value="";
        T2.value="";
        
        var reg = document.getElementById('registration');
        var login = document.getElementById('login');
        login.style.display = "none";
        reg.style.display = "block";
    }

    function register(){
        var RT1 = document.getElementById('RT1');
        var RT2 = document.getElementById('RT2');
        var RT3 = document.getElementById('RT3');
        var RT4 = document.getElementById('RT4');
        var RT5 = document.getElementById('RT5');
        var RT6 = document.getElementById('RT6');
        RT1.style.border="";
        RT2.style.border="";
        RT3.style.border="";
        RT4.style.border="";
        RT5.style.border="";
        RT6.style.border="";
        
        // Capitalize the first letter of the first name
        var firstName = RT1.value.charAt(0).toUpperCase() + RT1.value.slice(1);

        // Validate phone number
        if(RT3.value.length !== 10 || !/^\d+$/.test(RT3.value)) {
            RT3.style.border = "1px solid red";
            alert("Phone number should be a 10-digit number");
            RT3.focus();
            return;
        }

        // Validate email
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(RT4.value) || !RT4.value.endsWith('@gmail.com')) {
            RT4.style.border = "1px solid red";
            alert("Please enter a valid email ending with @gmail.com");
            RT4.focus();
            return;
        }

        // Validate password
        if(RT5.value.length < 8 || !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(RT5.value)) {
            RT5.style.border = "1px solid red";
            alert("Password should contain at least 8 characters with at least one special character and one number");
            RT5.focus();
            return;
        }

        // Check if passwords match
        if(RT5.value !== RT6.value) {
            alert("Password and Re-type Password must be same");
            RT5.style.border = "1px solid red";
            RT6.style.border = "1px solid red";
            RT5.focus();
            return;
        }

        // Proceed with registration
        var url = "http://localhost:5000/registration/signup";
        var data = JSON.stringify({
            firstname: firstName,
            lastname: RT2.value,
            contactno: RT3.value,
            emailid: RT4.value,
            pwd: RT5.value
        });
        callApi("POST", url,  data, registeredSuccess, errorResponse);

        // Clear input fields
        RT1.value = "";
        RT2.value = "";
        RT3.value = "";
        RT4.value = "";
        RT5.value = "";
        RT6.value = "";

        // Show login and hide registration
        var login = document.getElementById('login');
        var registration = document.getElementById('registration');
        registration.style.display = 'none';
        login.style.display = 'block';
    }

    function registeredSuccess(res) {
        var data = JSON.parse(res);
        alert(data);
    }

    return(
        <div className='full-height'>
            <div id='header' className='loginheader'>Grading system 
            <Link to='/about' className='abt'>About</Link>
            <Link to='/Plan' className='pgp'>Plan</Link>
             
            </div>
            <div id='content' className='logincontent'>
                <div id='login' className='popup'>
                    <div id='popupwindow' className='popupwindow' style={popupwindowstyle} >
                        <div className='loginstyle1'>Login</div>
                        <div className='loginstyle2'>
                            <div style={logodivstyle}>
                                <img src={logo} alt='' style={logostyle} />
                            </div>
                            <div>Username*</div>
                            <div><input type='text' id='T1' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Password*</div>
                            <div><input type='password' id='T2' className='txtbox' /></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={validate}>Sign In</button></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div>New user? <label className='linklabel' onClick={registration}>Register here</label></div>
                        </div>
                    </div>
                </div>
                <div id='registration' className='popup'>
                    <div id='registrationwindow' className='popupwindow'  style={popupwindowstyle}>
                        <div className='loginstyle1'>New Registration</div>
                        <div className='loginstyle2'>
                            <div>First Name*</div>
                            <div><input type='text' id='RT1' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Last Name*</div>
                            <div><input type='text' id='RT2' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Contact Number*</div>
                            <div><input type='text' id='RT3' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Email ID*</div>
                            <div><input type='text' id='RT4' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Password*</div>
                            <div><input type='password' id='RT5' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Re-type Password*</div>
                            <div><input type='password' id='RT6' className='txtbox' /></div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={register}>Register</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer' className='loginfooter'>Copyright @ Student Grading management system.</div>
        </div>
    );
}

export default Login;
