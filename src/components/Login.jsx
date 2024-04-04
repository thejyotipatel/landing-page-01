const Login = ({ active }) => {
  return (
    <>
      <div className='vstack gap-3  mt-4 mx-md-5'>
        <button
          type='button'
          // className='btn fw-semibold w-100 btn-outline-purple text-black d-flex   align-items-center justify-content-around'
          className='btn fw-semibold w-100 btn-outline-purple text-black d-flex  row m-0'
        >
          <div className='col-2'>
            <img src='images/google.svg' alt='' />
          </div>
          <p className='col m-0'>Continue with Google</p>
        </button>

        <button
          type='button'
          className='btn fw-semibold w-100 btn-outline-purple text-black d-flex  row m-0'
        >
          <div className='col-2'>
            <i class='bi bi-facebook mt-5 text-info'></i>
          </div>
          <p className='col m-0'>Continue with Facebook</p>
        </button>

        <div className='row align-items-start mx-1'>
          <span
            className=' col w-100   border border-gray'
            style={{ marginTop: '12px' }}
          />
          <small className='col fw-semibold ms-1' style={{ fontSize: '12px' }}>
            Or connect with
          </small>
          <span
            className=' col w-100 border border-gray'
            style={{ marginTop: '12px' }}
          />
        </div>

        <input
          type='email'
          className='form-control'
          id='email'
          placeholder='Email'
        />

        <div className='input-group  '>
          <input
            type='password'
            className='form-control border border-end-0'
            id='password'
            placeholder='Password'
            aria-label='Password'
            aria-describedby='Password'
          />
          <span
            className={`input-group-text border border-start-0 bg-white bi bi-eye${
              active ? '-slash-fill' : '-fill'
            }`}
            id='Password'
          ></span>
        </div>

        <div className='d-flex justify-content-between my-0 '>
          {active ? (
            <div className='form-check  '>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='invalidCheck2'
                required
              />
              <label
                className='form-check-label'
                for='invalidCheck2'
                style={{ fontSize: '12px' }}
              >
                Agree to terms and conditions
              </label>
            </div>
          ) : (
            <div className='password-strength d-flex gap-1'>
              <p></p>
              <p></p>
              <p></p>
            </div>
          )}

          <p className='icon-link mb-0' style={{ fontSize: '12px' }}>
            {active ? (
              <>
                <i className='bi bi-lock-fill'></i> Forgot password?
              </>
            ) : (
              ' Password strength'
            )}
          </p>
        </div>

        {!active && (
          <p
            id='invalidCheck2'
            className='form-text my-0'
            style={{ fontSize: '12px' }}
          >
            By continuing, you agree to our
            <span className='fw-bold'> Terms of Service</span> and
            <span className='fw-bold'> Privacy Policy</span>.
          </p>
        )}

        <button
          type='button'
          className={`btn fw-semibold w-100 ${
            active ? 'btn-outline-secondary text-black' : 'btn-purple'
          } d-flex   align-items-center justify-content-around`}
        >
          {active ? 'Continue' : 'Agree and Continue'}
        </button>
      </div>
    </>
  )
}
export default Login
