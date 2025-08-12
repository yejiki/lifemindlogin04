// App.jsx (예시)
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//로딩
import Loading from './onboarding/Loading';
import Onboarding from './onboarding/Onboarding';

// 서브페이지
import Signup from './pages/Signup';
import Signupgender from './pages/signup-com/Signupgender';
import Signupbirth from './pages/signup-com/Signupbirth';
import Signupnext from './pages/signup-com/Signupnext';
import Signupdone from './pages/signup-com/Signupdone';

// 컴포넌트
import Logo from './component/Logo';
import Loginform from './component/Loginform';
import Buttton from './component/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />

        <Route
          path="/login"
          element={
            <div id="wrap">
              <Logo />
              <Loginform />
              <Buttton />
            </div>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signupgender" element={<Signupgender />} />
        <Route path="/signupbirth" element={<Signupbirth />} />
        <Route path="/signupnext" element={<Signupnext />} />
        <Route path="/signupdone" element={<Signupdone />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
