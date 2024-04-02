const Testimonoals = () => {
  return (
    <>
      <div className='bg-light '>
        <div className='container-lg  py-5    '>
          <div className='  bg-opacity-10  bg-secondary  p-4 d-grid gap-3 rounded'>
            <h4 className='  '>
              <img src='images/quote.svg' alt='' className='rounded-circle ' />
              <span className='px-3'>Testimonials</span>
            </h4>
            <p className='  '>
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
            <div className='row'>
              <div className='col bg-purple bg-opacity-25  d-flex rounded align-items-center justify-content-center gap-3'>
                <p className=' btn rounded-circle  bg-white mt-auto'>
                  <i class='bi  bi-play-fill text-purple fs-4   '></i>
                </p>
                <input
                  type='range'
                  class='form-range'
                  defaultValue={0}
                  id='customRange3'
                />
                <span className='fs-6 text-purple '>0.00</span>
                <p className=''>
                  <p className='   '>
                    <i class='bi bi-mic-fill'></i>
                  </p>
                  <img src='images/person01.png' alt='' className='w-100' />
                </p>
              </div>
              <div className='col'>
                <img src='images/person01.png' alt='' />
                <h2 className=''>Shubha Nagarajan</h2>
                <p className='text-primary'>Classical Dancer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Testimonoals
