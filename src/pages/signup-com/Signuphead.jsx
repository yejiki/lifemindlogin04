import { Link } from 'react-router-dom';
//이미지
import BACK from '../../assets/tit-arrow.svg'

const Signuphead = () => {
  return(
    <>

    <div id="wrap">
      <header className="header head1">
        <div className="inner">
          <ul>
            <li>
              <Link to="/"><img src={BACK} alt="로그인 페이지로 돌아가기" /></Link>
            </li>
            <li><h1>회원가입</h1></li>

          </ul>
        </div>
      </header>
    </div>
    
    </>
  )
}

export default Signuphead