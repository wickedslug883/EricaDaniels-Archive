import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faGoogle} from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Loginsignup() {
  const [state, setState] = useState({ email: '', password: '' });
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    try {
      const res = await axios.post('http://localhost:3000/login/sign-up', { email, password });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  const handleSignup = async (e) => {
    console.log("hello");
    e.preventDefault();
    const { email, password } = state;
    try {
      const res = await axios.post('http://localhost:3000/login/sign-up', { email, password });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer id="loginContainer" className="px-5 py-3 my-0 mx-0 mw-100 mh-100" style={{ overflow: 'hidden' }}>

      <MDBCard id="loginCard" className="w-100">
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://cdn.discordapp.com/attachments/304399938949742594/1066226954841358386/image.png' alt="login form" id="loginImage" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              
            <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <image src="https://www.freeiconspng.com/uploads/music-note-icon-33.png" alt="Bootstrap" width="30" height="24" style={{color:"#ff0101"}}/> 
            <span className="loginBrand" style={{color:"#FF9966"}}>L</span>
            <span className="loginBrand" style={{color:"#ff0101"}}>O</span>
            <span className="loginBrand" style={{color:"#ffea00"}}>O</span>
            <span className="loginBrand" style={{color:"#1b0093"}}>S</span>
            <span className="loginBrand" style={{color:"#006e37"}}>E</span>
            <span className="loginBrand" style={{margin:" 1%"}}>  </span>
            <span className="loginBrand" style={{color:"#FF9966"}}>B</span>
            <span className="loginBrand" style={{color:"#ff0101"}}>I</span>
            <span className="loginBrand" style={{color:"#ffea00"}}>T</span>
            <span className="loginBrand" style={{color:"#1b0093"}}>S</span>
              </div>
            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} className="loginRegSwap">
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} className="loginRegSwap">
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p style={{ fontWeight: '750' }}>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <FontAwesomeIcon className="loginIcons" icon={[faGoogle]} />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <FontAwesomeIcon className="loginIcons" icon={[faTwitter]} />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <FontAwesomeIcon className="loginIcons" icon={[faGithub]} />
              </MDBBtn>
            </div>

            <p className="text-center mt-3" style={{ fontWeight: '750' }}>or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn onClick={handleLogin}>Login</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p style={{ fontWeight: '750' }}>Sign up with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
            
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <FontAwesomeIcon className="loginIcons" icon={[faGoogle]} />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <FontAwesomeIcon className="loginIcons" icon={[faTwitter]} />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <FontAwesomeIcon className="loginIcons" icon={[faGithub]} />
              </MDBBtn>
            </div>

            <p className="text-center mt-3" style={{ fontWeight: '750' }}>or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput onChange={(e) => setState({ ...state, email: e.target.value })}wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput onChange={(e) => setState({ ...state, password: e.target.value })} wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn onClick={handleSignup}>Signup</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>
      
    </MDBContainer>
  );
}



export default Loginsignup;