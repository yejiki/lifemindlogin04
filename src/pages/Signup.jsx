import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Signuphead from './signup-com/Signuphead.jsx';
import Singnupform from './signup-com/Singnupform.jsx';


const Signup = () => {
  return(
    <>
    <div id="wrap">
      <Signuphead />
      <Singnupform />

    </div>
    
    </>
  )
}

export default Signup


