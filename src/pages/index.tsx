import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Home() {
  const img = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(img.current, {
      y: 0,
    },
    {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: img.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });
  }, [img]);
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
            <div ref={img} className={`${styles.imgWrapper} js-parallax`}>
              <Image
                src="/parallax.jpg"
                alt="視差効果の検証用"
                fill
              />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra diam. Risus viverra adipiscing at in. Augue lacus viverra vitae congue eu consequat ac felis donec. Volutpat sed cras ornare arcu dui. Vitae nunc sed velit dignissim sodales ut eu sem integer. Faucibus in ornare quam viverra orci. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Nulla facilisi nullam vehi</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra diam. Risus viverra adipiscing at in. Augue lacus viverra vitae congue eu consequat ac felis donec. Volutpat sed cras ornare arcu dui. Vitae nunc sed velit dignissim sodales ut eu sem integer. Faucibus in ornare quam viverra orci. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Nulla facilisi nullam vehi</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra diam. Risus viverra adipiscing at in. Augue lacus viverra vitae congue eu consequat ac felis donec. Volutpat sed cras ornare arcu dui. Vitae nunc sed velit dignissim sodales ut eu sem integer. Faucibus in ornare quam viverra orci. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Nulla facilisi nullam vehi</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra diam. Risus viverra adipiscing at in. Augue lacus viverra vitae congue eu consequat ac felis donec. Volutpat sed cras ornare arcu dui. Vitae nunc sed velit dignissim sodales ut eu sem integer. Faucibus in ornare quam viverra orci. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Nulla facilisi nullam vehi</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra diam. Risus viverra adipiscing at in. Augue lacus viverra vitae congue eu consequat ac felis donec. Volutpat sed cras ornare arcu dui. Vitae nunc sed velit dignissim sodales ut eu sem integer. Faucibus in ornare quam viverra orci. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Nulla facilisi nullam vehi</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra diam. Risus viverra adipiscing at in. Augue lacus viverra vitae congue eu consequat ac felis donec. Volutpat sed cras ornare arcu dui. Vitae nunc sed velit dignissim sodales ut eu sem integer. Faucibus in ornare quam viverra orci. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Nulla facilisi nullam vehi</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
