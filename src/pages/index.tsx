import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Test from '@/component/Test';

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.pageMain}>
          <div className={styles.layoutHeadingL}>
            <h1>GSAP使ってみるよ〜</h1>
          </div>
          <div>
            <div className={styles.layoutHeadingL}>
              <h2>parallax</h2>
            </div>
            <div className={styles.layoutHeadingL}>
              <h3>1つ目</h3>
            </div>
            <Test />
          </div>
          <div>
            <div className={styles.layoutHeadingL}>
              <h3>2つ目</h3>
            </div>
            <Test />
          </div>
        </div>
      </main>
    </>
  )
}
