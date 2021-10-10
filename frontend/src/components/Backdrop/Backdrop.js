
import style from './backdrop.module.css'

const Backdrop = ({ click, show }) => {
  return show && <div className={style.backdrop} onClick={click}></div>
}

export default Backdrop
