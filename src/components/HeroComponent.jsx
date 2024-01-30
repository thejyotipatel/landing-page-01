import { useState } from 'react'
import Login from './Login'

const HeroComponent = () => {
  const [active, setActive] = useState(true)

  return (
    <div className='bg-body-tertiary bg-secondary hero-component'>
      <div className='container   pt-5'>
        <div className='row align-items-start '>
          <div className=' col'>
            <h1 className='fst-italic'>
              Explore your <span className='text-primary'>hobby</span> or
              <span className='text-purple'> passion</span>
            </h1>
            <p>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <div className='d-md-inline-flex     mt-5 '>
              <img src='images/hero-01.png' alt='hero' className='col' />
              <img src='images/hero-02.png' alt='hero' className='col' />
            </div>
          </div>

          <div className='col '>
            <ul className='nav nav-underline'>
              <li className='nav-item  '>
                <a
                  href='#'
                  role='button'
                  onClick={() => setActive(true)}
                  className={`nav-link  text-purple ${active ? 'active' : ''} `}
                >
                  Sign In
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='#'
                  role='button'
                  onClick={() => setActive(false)}
                  className={`nav-link text-purple ${!active ? 'active' : ''}`}
                >
                  Join In
                </a>
              </li>
            </ul>

            <Login active={active} />
          </div>

          {/* <div className='d-flex  mt-5 w-100 '>
            <img src='images/hero-01.png' alt='hero' className='col' />
            <img src='images/hero-02.png' alt='hero' className='col' />
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default HeroComponent
