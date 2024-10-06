/* eslint-disable react/prop-types */
import styles from './layout.module.scss'
const FeedbackLayout = ({ name, body }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <h3>{name}</h3>
                <p>{body}</p>
            </div>
        </div>
    )

}
export default FeedbackLayout