import Signupillust2 from '../../assets/login-plus-2.png'

const Signupndone = () => {
  return(
    <>
    <div id="wrap">
          <div className="inner">
              <h1 className='sign-schedule-tit'>사람과 기술로 일상을 돌보는 <br />
              정직하고 따뜻한 스마트 케어.
              </h1>
              <p className='sign-schedule-subtit'>약 복용, 병원 일정, 놓치지 않게 알림으로 <br />
                      안내해드려요.</p>
            <img className='signupillust2' src={Signupillust2} alt="약 먹을 시간, 병원 가는 날도 일상 속 돌봄으로 이어 드립니다. 약 복용, 병원 일정, 놓치지 않게 알림으로 안내해드려요." />
            <div className='schedule-btn-wrap'>
              <button type="button"
              className="btn-big-01">시작하기</button>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Signupndone;


