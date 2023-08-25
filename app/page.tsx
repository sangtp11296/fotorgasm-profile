import ProfileInfo from '@/components/ProfileInfo/ProfileInfo'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.centerContainer}>
        <ProfileInfo/>
      </div>
    </div>
  )
}

export default Home