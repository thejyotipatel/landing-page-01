const Testimonoals = () => {
  return (
    <>
      <div className='bg-light '>
        <div className='container-lg  py-5 '>
          <div className='  bg-opacity-10  bg-secondary  p-4   rounded'>
            <div className='m-3 d-grid gap-3'>
              <h4 className='  '>
                <img
                  src='images/quote.svg'
                  alt=''
                  className='rounded-circle '
                />
                <span className='px-3'>Testimonials</span>
              </h4>
              <p>
                In a fast growing and ever changing city like Bangalore, it
                sometimes becomes very difficult to find or connect with like
                minded people. Websites like hobbycue.com is a great service
                which helps me get in touch with, communicate, connect, and
                exchange ideas with other dancers. It also provides the extra
                benefit of finding products and services that I can avail, which
                I can be assured is going to be of great quality as it comes
                recommended by people of the hobbycue community. To have
                discussions, to get visibility, and to be able to safely explore
                various hobbies and activities in my city, all under one roof,
                is an excellent idea and I highly recommend it.
              </p>

              <div className='row gap-5 '>
                <div className=' col-6 col-sm-4    position-relative w-100 '>
                  <div className='bg-purple bg-opacity-25  d-flex rounded align-items-center   gap-3 h-auto w-75'>
                    <i class='bi  bi-play-circle-fill text-purple fs-1   ' />
                    <input
                      type='range'
                      class='form-range'
                      defaultValue={0}
                      id='customRange3'
                    />
                    <span className='fs-6 text-purple '>0.00</span>
                    <div className=' '>
                      <p className=' position-absolute top-50  '>
                        <i class='bi bi-mic-fill fs-5 text-white'></i>
                      </p>
                      <img src='images/person01.png' alt='' className='w-100' />
                    </div>
                  </div>
                </div>

                <div className='col-6 col-sm-4 d-flex gap-2'>
                  <img src='images/person01.png' alt='' className='h-75' />
                  <div className='vstack gap-0'>
                    <h5 className='text-purple'>Shubha Nagarajan</h5>
                    <p className='text-info'>Classical Dancer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Testimonoals
