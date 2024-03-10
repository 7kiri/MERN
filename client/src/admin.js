import React from 'react';
import './admin.css';
import logouticon from './logout.jpg';
import { callApi, getSession, setSession } from './main';
import useicon from './menu.png';

const space = { height: '10px' };
const space1 = { height: '5px' };

const HS1 = { "padding-left": "5px", "font-weight": "bold" };
const HS2 = { "float": "right", "padding-right": "5px", "cursor": "pointer" };
const HS3 = { "float": "right", "height": "16px", "margin-top": "6px", "cursor": "pointer" };
const HS4 = { "float": "right", "padding-right": "10px" };

const errorResponse = (error) => {
  console.error('An error occurred:', error);
  // Additional error handling logic can be added here
};

export function loadMenu(res) {
  var data = JSON.parse(res);
  var useitems = "";
  for (var x in data) {
    useitems += `<li>
                        <label id='${data[x].mid}L' >${data[x].mtitle}</label>
                        <div id='${data[x].mid}' class='suse'></div>
                      </li>`;
  }
  var mlist = document.getElementById('mlist');
  mlist.innerHTML = useitems;

  for (x in data) {
    document.getElementById(`${data[x].mid}L`).addEventListener("click", showSMenu.bind(null, data[x].mid));
  }
}

export function showSMenu(mid) {
  var surl = "http://localhost:5000/admin/uses";
  var ipdata = JSON.stringify({
    mid: mid
  });
  callApi("POST", surl, ipdata, loadSMenu, errorResponse);

  var suse = document.getElementById(mid);
  if (suse.style.display === "block")
    suse.style.display = "none";
  else
    suse.style.display = "block";
}

export function loadSMenu(res) {
  var data = JSON.parse(res);
  var suseitems = "";
  for (var x in data) {
    suseitems += `<label>${data[x].smtitle}</label>`;
  }
  var suse = document.getElementById(`${data[x].mid}`);
  suse.innerHTML = suseitems;
}

class Admin extends React.Component {
  constructor() {
    super();
    this.sid = getSession("sid");
    //alert(this.sid);
    if (this.sid === "")
      window.location.replace("/");

    var url = "http://localhost:5000/admin/uname";
    var data = JSON.stringify({
      emailid: this.sid
    });
    callApi("POST", url, data, this.loadUname, errorResponse);

    url = "http://localhost:5000/admin/use";
    callApi("POST", url, "", loadMenu, errorResponse);
  }

  loadUname(res) {
    var data = JSON.parse(res);
    var HL1 = document.getElementById("HL1");
    HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
  }

  logout() {
    setSession("sid", "", -1);
    window.location.replace("/");
  }

  Submit() {
    // Implement your submit logic here
  }

  render() {
    return (
      <div className='full-height'>
        <div className='header'>
          <label style={HS1}>KL University |admin/faculty portal</label>
          <label style={HS2} onClick={this.logout}>Logout</label>
          <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
          <label id='HL1' style={HS4}></label>
        </div>
        <div className='content'>
          <div className='menubar'>
            <div className='menuheader'>
              <img src={useicon} alt='' />
              <label>MENU</label>
            </div>
            <div className='use'>
              <nav><ul id='mlist' className='mlist'></ul></nav>
            </div>
          </div>

          <div className='outlet'>

            <div style={space}></div>
            <div style={space}></div>
            <div style={space1}></div>


          </div>
        </div>
        <div className='footer'>
          Copyright @ KL University. All rights reserved.
        </div>
      </div>
    );
  }
}

export default Admin;
