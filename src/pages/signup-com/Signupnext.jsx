import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Signupillust1 from '../../assets/login-plus-1.png'

const Signupnext = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate(); 

  const handleNext = () => {
    navigate("/signupdone");
  };
  return (
    <div id="wrap">
      <div className="inner">
        <h1 className='sign-schedule-tit'>약 먹을 시간, 병원 가는 날도<br /> 일상 속 돌봄으로 이어 드립니다.</h1>
        <p className='sign-schedule-subtit'>약 복용, 병원 일정, 놓치지 않게 알림으로 <br />
        안내해드려요.</p>
        <img className='signupillust1' src={Signupillust1} alt="약 먹을 시간, 병원 가는 날도 일상 속 돌봄으로 이어 드립니다. 약 복용, 병원 일정, 놓치지 않게 알림으로 안내해드려요." />
        <div className='schedule-btn-wrap'>
          <button type="button"
          className="btn-big-02"
          onClick={handleNext}
          >건너뛰기</button>
          <button type="button"
          className="btn-big-01">추가하기</button>
        </div>
      </div>
    </div>
  );
};

export default Signupnext;
