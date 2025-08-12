import { useState } from "react";
import { useNavigate } from "react-router-dom";
//이미지
import Logow from "../../src/assets/login-logo-w.png"

const Onboarding2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/onboarding3");
  };

  return (
    <div id="wrap">
      <div className="inner">
        <img src={Logow} alt="라이프마인드 로고" />
        
      </div>
    </div>
  );
};

export default Onboarding2;
