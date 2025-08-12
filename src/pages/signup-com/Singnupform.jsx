import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import Signupgender from './Signupgender';


import Exclamation from '../../assets/signup-exclamation.svg'
import Eye from '../../assets/login-eye.svg'

const Singnupform = () => {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/signupgender'); 
  };

  return(
    <>
    <div id="wrap loading-wrap">
      <div className="inner">
        <div className="signform">

          <fieldset className="field03">
            <legend>인풋박스 아이디</legend>  
            <div>
              <h2>아이디</h2>
              <div className="input-btn">
                <input type="text" placeholder="아이디를 입력해주세요." />
                <button type="button" className="btn-submit">중복확인</button>
              </div>
            </div>
            <p><img src={Exclamation} alt="4~12자 영문 소문자, 숫자 조합" />4~12자 영문 소문자, 숫자 조합</p>
          </fieldset>

          <fieldset className="field02">
            <legend>인풋박스 아이콘 추가</legend>
              <h2>비밀번호</h2>
              <div className="input-icon">
                <input type="text" placeholder="비밀번호를 입력해주세요." />
                <span><img className='login-icon' src={Eye} alt="지우기" /></span>
              </div>
              <div className="input-icon">
                <input type="text" placeholder="비밀번호를 입력해주세요." />
                <span><img className='login-icon' src={Eye} alt="지우기" /></span>
              </div>
              <p><img src={Exclamation} alt="4~12자 영문 소문자, 숫자 조합" />4~12자 영문 대문자, 소문자,  숫자, 특수문자 조합</p>
            </fieldset>

            <fieldset className="field03">
            <legend>인풋박스 아이디</legend>  
            <div>
              <h2>휴대폰 인증</h2>
              

              <div className='sign-call-check'>
                <label className="custom-radio">
                  <input type="radio" name="carrier" value="SKT" />
                  <span className="radio-mark"></span>
                  SKT
                </label>
                <label className="custom-radio">
                  <input type="radio" name="carrier" value="KT" />
                  <span className="radio-mark"></span>
                  KT
                </label>
                <label className="custom-radio">
                  <input type="radio" name="carrier" value="LGU+" />
                  <span className="radio-mark"></span>
                  LGU+
                </label>
              </div>



              <div className="input-btn">
                <input type="text" placeholder="-를 제외하고 입력해주세요." />
                <button type="button" className="btn-submit">전송</button>
              </div>
              <div className="input-icon">
                <input type="text" placeholder="인증번호를 입력해주세요." />
              </div>
              
            </div>
          </fieldset>

            <input type="checkbox" id='check01' /><label for="check01">(필수) 약관에 모두 동의합니다.</label>
            <button
              type="button"
              className="btn-big-01 back gosignupbtn"
              onClick={handleSignupClick}>
              회원가입
            </button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Singnupform