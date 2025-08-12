import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Man from "../../assets/login-gender-2.png";
import Woman from "../../assets/login-gender-1.png";

  const Signupgender = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate(); // 네비게이션 객체

  // 다음 버튼 클릭 시 페이지 이동
  const handleNext = () => {
    navigate("/signupbirth");
  };

  return (
    <div id="wrap">
      <div className="inner">
        <h2 className="signup-gender-tit">대상자의 성별을 선택해주세요.</h2>
        <div className="signup-gender">
          <div
            className={`gender-option ${selectedGender === "male" ? "selected" : ""}`}
            onClick={() => setSelectedGender("male")}
          >
            <img src={Man} alt="남성" />
            <p>남성</p>
          </div>

          <div
            className={`gender-option ${selectedGender === "female" ? "selected" : ""}`}
            onClick={() => setSelectedGender("female")}
          >
            <img src={Woman} alt="여성" />
            <p>여성</p>
          </div>
        </div>

        <button
          type="button"
          className="btn-big-01 back gender-btn"
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Signupgender;
