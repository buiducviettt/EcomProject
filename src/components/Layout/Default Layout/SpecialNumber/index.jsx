/* eslint-disable react/prop-types */
import styles from './styles.module.scss'
const SpecialNumber = ({ number, title }) => {
    return(
        <div className={`${ styles.wrapper } d-flex flex-row`}>
        <div className={styles.number}>
            <h3>{number}</h3>
            <p>{title}</p>
        </div>
        <span></span>
        </div>
    )
}
export default SpecialNumber