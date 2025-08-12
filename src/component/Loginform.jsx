import { Link } from 'react-router-dom';
//이미지
import Xgray from '../assets/x_gray.svg'
import Eye from '../assets/login-eye.svg'

const Loginform = () => {
  return(
    <>
      <fieldset className="field02">
        <legend>인풋박스 아이콘 추가</legend>
        <div className="input-icon">
          <input type="text" placeholder="아이디를 입력해주세요." />
          <span><img className='login-icon' src={Xgray} alt="지우기" /></span>
        </div>
        <div className="input-icon">
          <input type="text" placeholder="비밀번호를 입력해주세요." />
          <span><img className='login-icon' src={Eye} alt="지우기" /></span>
        </div>
      </fieldset>

      <div className="login-btn-top">
        <Link to="/signup">회원가입</Link>
        <div>
          <a href="#">아이디 찾기</a>
          <a href="#">비밀번호 찾기</a>
        </div>
      </div>
    
    </>
  )
}

export default Loginform