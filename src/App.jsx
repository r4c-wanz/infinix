import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function App() {
  const main = useRef();
  const smoother = useRef();

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
        }
      })

      
    },
    { scope: main },
  );

  return (
    <div
      id="smooth-wrapper"
      ref={main}>
      <div id="smooth-content">
        <div className="section-6 w-dvw h-dvh bg-[url(https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/bg-content-pc.webp)] flex justify-between">
          <div className="px-29 py-47">
            <div className="max-w-107">
              <h4 className="text-2xl leading-9 font-extrabold">Segalanya, Dirancang Ramping</h4>
              <h3 className="text-4xl leading-9 font-extrabold">Layar Depan ArmorGlass</h3>
              <p className="mt-4">Corning® Gorilla® Glass 7i tahan lebih banyak benturan dan lebih kuat terhadap goresan — tak mudah tergores oleh kunci, koin, atau bahkan pisau.</p>
            </div>
          </div>
          <div className="px-29 py-14.5">
            <div className='w-152.5 h-154 relative mask-[url(https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-blue-bg-pc.webp)] overflow-hidden'>
              <div className="shadow-mask absolute left-0 top-0 right-0 bottom-0 z-2">
                <img
                  src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-shadow-mask-pc.webp"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="explode-content absolute left-0 top-0 right-0 bottom-0 z-1 mask-[url(https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-blue-bg-pc.webp)] overflow-hidden">
                <div className="explode-part part-1 w-88 h-119.5 absolute left-[-20.6%] top-[-13%] z-4">
                  <img
                    src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-1-pc.webp"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="explode-part part-2 w-88 h-119.5 absolute right-[24%] bottom-[14%] z-3">
                  <img
                    src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-2-pc.webp"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="explode-part part-3 w-88 h-119.5 absolute right-[9%] bottom-[-12%] z-2">
                  <img
                    src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-3-pc.webp"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="explode-part part-4 w-88 h-119.5 absolute right-[-7.1%] bottom-[-31%] z-1">
                  <img
                    src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-4-pc.webp"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
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
        <div className="w-dvw h-dvh bg-[url(https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/bg-content-pc.webp)]"></div>
      </div>
    </div>
  );
}
