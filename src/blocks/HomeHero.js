import React from 'react';
import Link from '../resolvers/Link';
import clsx from 'clsx';
import { data } from 'autoprefixer';
import Buttons from '../components/UI/Buttons';

function HomeHero({ data }) {
    const isCentered = data?.variant === 'centered'
    return (
        <section className="SectionWaves">
        <div className="header !dark:bg-black">
          <div className="flex inner-header">
            {/*<h1>Simple CSS Waves</h1>*/}
            <div className="container flex flex-col items-center justify-center px-3 py-24 mx-auto">
              <div className="w-full text-center lg:pt-10 lg:mt-8 lg:w-2/3">
                <div className="flex flex-col pt-16 pb-24 md:pb-20 lg:py-8">
                {data?.title && (
                  <h1 className={clsx("mb-8 text-4xl font-medium title-font sm:text-4xl headline", {
              'mx-auto': isCentered,
            } )}>
                {data?.title}    
                  </h1>
                )}
                {data?.subtitle && (
                  <span className="mt-8 leading-relaxed">{data?.subtitle}</span>
                )}
                </div>
                <div className="flex justify-between py-4 md:mt-10">
                {data?.buttons && (
                <Buttons buttons={data?.buttons} className={" rounded-lg border-white"} />
              )}
                  {/*<Link
                    to="/about"
                    className="px-4 py-3 text-white border-white d-inline-block rounded-2xl "
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    id="work"
                    className="px-4 py-3 font-sans text-blue-600 bg-white rounded-lg d-inline-block"
                  >
                    Work with Us
                  </Link>*/}
                </div>
              </div>
            </div>
          </div>
  
          {/*Waves Container*/}
          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={0}
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={3}
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={5}
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </section>
    );
};

export default HomeHero;