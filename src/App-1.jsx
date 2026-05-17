import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function App() {
  const main = useRef();
  const smoother = useRef();
  const sectionRef = useRef();

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });

      const parts = gsap.utils.toArray('.explode-part');

      // Semua 4 part dimulai dari kanan bawah (serong)
      gsap.set(parts, { opacity: 0, x: 80, y: 60 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Semua 4 part bergerak SERENTAK ke kiri atas dalam 1 scroll
      tl.to(parts, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      });

      // Jeda sebelum unpin agar user sempat melihat hasilnya
      tl.to({}, { duration: 0.5 });
    },
    { scope: main },
  );

  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">

        {/* Section dengan animasi explode */}
        <div
          ref={sectionRef}
          className="w-dvw h-dvh bg-[url(https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/bg-content-pc.webp)] flex justify-between"
        >
          {/* Teks kiri */}
          <div className="px-29 py-47">
            <div className="max-w-107">
              <h4 className="text-2xl leading-9 font-extrabold">
                Segalanya, Dirancang Ramping
              </h4>
              <h3 className="text-4xl leading-9 font-extrabold">
                Layar Depan ArmorGlass
              </h3>
              <p className="mt-4">
                Corning® Gorilla® Glass 7i tahan lebih banyak benturan dan
                lebih kuat terhadap goresan — tak mudah tergores oleh kunci,
                koin, atau bahkan pisau.
              </p>
            </div>
          </div>

          {/* Gambar kanan */}
          <div className="px-29 py-14.5">
            <div
              className='w-152.5 h-154 relative mask-[url("https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-blue-bg-pc.webp")] overflow-hidden'
            >
              {/* Shadow mask */}
              <div className="shadow-mask absolute left-0 top-0 right-0 bottom-0 z-1">
                <img
                  src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-shadow-mask-pc.webp"
                  alt=""
                  className="w-full h-full"
                />
              </div>

              {/* 4 explode parts — bergerak serentak ke serong kiri atas */}
              <div className="explode-content absolute left-0 top-0 right-0 bottom-0 z-2">
                <div className="explode-part part-1 w-88 h-119.5 absolute left-0 z-4">
                  <img
                    src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-1-pc.webp"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="explode-part part-2 w-88 h-119.5 absolute left-30 z-3">
                  <img
                    src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-2-pc.webp"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="explode-part part-3 w-88 h-119.5 absolute left-60 z-2">
                  <img
                    src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-3-pc.webp"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="explode-part part-4 w-88 h-119.5 absolute left-90 z-1">
                  <img
                    src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-4-pc.webp"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Blue background */}
              <div className="blue-bg absolute left-0 top-0 right-0 bottom-0">
                <img
                  src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-blue-bg-pc.webp"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section berikutnya */}
        <div className="w-dvw h-dvh bg-[url(https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/bg-content-pc.webp)]" />
        <div className="w-dvw h-dvh bg-[url(https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/bg-content-pc.webp)]" />

      </div>
    </div>
  );
}