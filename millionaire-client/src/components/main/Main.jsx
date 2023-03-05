import Questions from '../questions/Questions'
import './Main.css'

const Main = () => {
  return (
    <div className='main-container'>
      <div className="top">
        <div className="timer">
          30
        </div>
      </div>
      <hr/>
      <div className="bottom">
        <Questions/>
      </div>
    </div>
  )
}

export default Main