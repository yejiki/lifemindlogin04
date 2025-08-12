import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logow from "../assets/login-logo-w.png";
import '../App.css';

const Loading = () => {
  const [opacity, setOpacity] = useState(100);
  const navigate = useNavigate();

  useEffect(() => {
    if (opacity <= 0) {
      navigate("/onboarding");
      return;
    }

    const timer = setTimeout(() => {
      setOpacity(prev => {
        if (prev > 90) return prev - 1;
        else if (prev > 5) return prev - 8;
        else return 0;
      });
    }, opacity > 90 ? 100 : 70);

    return () => clearTimeout(timer);
  }, [opacity, navigate]);

  return (
    <div
      id="wrap"
      className="loading-wrap"
      style={{
        opacity: opacity / 100,
        transition: "opacity 0.8s",
        background: "linear-gradient(to bottom, rgb(124,176,255) 0%, rgb(87,154,255) 100%)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="tit-roading">소중한 사람을 위한 믿음직한 선택</p>
      <img className="logo-roading" src={Logow} alt="라이프마인드" />
    </div>
  );
};

export default Loading;
