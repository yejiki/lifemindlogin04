import Logob from '../assets/login-logo-b.png'

const Logo = () => {
  return(
    <>
    <div className='logowrap'>
      <p>소중한 사람을 위한 믿음직한 선택</p>
      <img className='logob' src={Logob} alt="lifemind-logo" />
    </div>
    
    </>
  )
}

export default Logo