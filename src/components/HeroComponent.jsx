const HeroComponent = () => {
  return (
    <div className='bg-body-tertiary bg-secondary hero-component'>
      <div class='container   pt-5'>
        <div class='row align-items-start '>
          <div className=' col'>
            <h1 className='fst-italic'>
              Explore your <span className='text-primary'>hobby</span> or
              <span className='text-purple'> passion</span>
            </h1>
            <p className=''>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p className=''>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <div className='d-inline-flex  mt-5 '>
              <img src='images/hero-01.png' alt='hero' className='col' />
              <img src='images/hero-02.png' alt='hero' className='col' />
            </div>
          </div>
          <div className='col '>
            <ul class='nav nav-underline'>
              <li class='nav-item  '>
                <a
                  class='nav-link  text-purple active'
                  aria-current='page'
                  href='#'
                >
                  Sign In
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-purple' href='#'>
                  Join In
                </a>
              </li>
            </ul>

            <div class='vstack gap-2  mt-4 mx-auto '>
              <button
                type='button'
                class='btn fw-semibold w-100 btn-outline-purple text-black d-flex   align-items-center justify-content-around'
              >
                <img src='images/google.svg' alt='' />
                Continue with Google
              </button>

              <button
                type='button'
                class='btn fw-semibold w-100 btn-outline-purple text-black d-flex   align-items-center justify-content-around'
              >
                <img src='images/facebook.svg' alt='' className='' />
                Continue with Facebook
              </button>

              <div className='row align-items-start mx-1'>
                <span
                  class=' col w-100   border border-gray'
                  style={{ marginTop: '12px' }}
                />
                <small className='col fw-semibold ms-1'>Or connect with</small>
                <span
                  class=' col w-100 border border-gray'
                  style={{ marginTop: '12px' }}
                />
              </div>

              <input
                type='email'
                class='form-control'
                id='email'
                placeholder='Email'
              />
              <input
                type='password'
                class='form-control'
                id='password'
                placeholder='Password'
              />

              <div class='input-group mb-3'>
                <input
                  type='password'
                  class='form-control'
                  id='password'
                  placeholder='Password'
                  aria-label='Password'
                  aria-describedby='Password'
                />
                <span
                  class='input-group-text bi bi-eye-slash-fill'
                  id='Password'
                ></span>
              </div>

              <div className='d-flex justify-content-between  '>
                <div class='form-check  '>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='invalidCheck2'
                    required
                  />
                  <label
                    class='form-check-label'
                    for='invalidCheck2'
                    style={{ fontSize: '12px' }}
                  >
                    Agree to terms and conditions
                  </label>
                </div>

                <p className='icon-link' style={{ fontSize: '12px' }}>
                  <i class='bi bi-lock-fill'></i> Forgot password?
                </p>
              </div>

              <p
                id='invalidCheck2'
                class='form-text'
                style={{ fontSize: '12px' }}
              >
                By continuing, you agree to our
                <span className='fw-bold'> Terms of Service</span> and
                <span className='fw-bold'> Privacy Policy</span>.
              </p>

              <button
                type='button'
                class='btn fw-semibold w-100 btn-outline-purple text-black d-flex   align-items-center justify-content-around'
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroComponent
