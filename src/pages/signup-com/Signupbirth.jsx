import { useState } from "react";
import { useNavigate } from "react-router-dom";
//이미지
import Man from "../../assets/login-gender-2.png";
import Xgray from '../../assets/x_gray.svg'
import Eye from '../../assets/login-eye.svg'

const Signupbirth = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/signupnext");
  };

  return (
    <div id="wrap">
      <div className="inner">
        <h2 className="signup-gender-tit">대상자의 정보를 입력해주세요.</h2>
      <div className="sign-man">
        <img src={Man} alt="남성" />
      </div>

    <fieldset className="field02">
      <legend>인풋박스 아이콘 추가</legend>
      <h2 className="s-brt">이름</h2>
      <div className="input-icon">
        <input type="text" placeholder="대상자의 이름을 입력해주세요." />
        <span><img className='login-icon b-close' src={Xgray} alt="지우기" /></span>
      </div>
      <div className="input-icon">
        <h2 className="s-brt">생년월일</h2>
        <input type="text" placeholder="대상자의 생년월일을 입력해주세요." />
        <span><img className='login-icon s-close' src={Xgray} alt="지우기" /></span>
      </div>
    </fieldset>



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

export default Signupbirth;
