import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react';

export default function Home() {
  const imgElem = useRef<HTMLImageElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(imgElem.current , {
      y: 0,
    },
    {
      y: -200,
      scrollTrigger: {
        trigger: imgElem.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {},
        onEnterBack: () => {},
        scrub: true,
      }
    });
  }, []);
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
            <div className={`${styles.imgWrapper}`}>
              <Image
                ref={imgElem}
                className='js-parallax'
                src="/parallax.jpg"
                alt="視差効果の検証用"
                width={1200}
                height={800}
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
