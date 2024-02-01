const Boxes = () => {
  return (
    <>
      {/* <div className='bg-purple bg-opacity-10  '> */}
      <div className='bg-light'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-1 row-cols-sm-2 justify-content-center'>
            <div className='col border border-light-subtle bg-light p-4 w-25-sm'>
              <h5 className='fw-bold'>
                <img src='images/pople.svg' alt='' className='me-3' />
                People
              </h5>
              <p className='container-sm'>
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button className='btn btn-outline-purple'>Connect</button>
            </div>
            <div className='col'>
              <h4 className=''>
                <i class='bi bi-geo-alt-fill'></i>
                Place
              </h4>
              <p className=''>
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
              <button className='btn btn-outline-purple'>Meet up</button>
            </div>

            <div className='col'>
              <h4 className=''>
                <img src='/images/shopping.svg' alt='' className='' />
                Product
              </h4>
              <p className=''>
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
              <button className='btn btn-outline-purple'>Get it</button>
            </div>

            <div className='col'>
              <h4 className=''>
                <i class='bi bi-calendar-check-fill'></i>
                Program
              </h4>
              <p className=''>
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </p>
              <button className='btn btn-outline-purple'>Attend</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Boxes
