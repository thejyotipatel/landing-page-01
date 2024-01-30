const Boxes = () => {
  return (
    <>
      <div className='bg-body-tertiary bg-secondary hero-component'>
        <div className='container-lg   pt-5'>
          <div className='row'>
            <div className='col'>
              <h1 className=''>
                <img src='images/pople.svg' alt='' className='' />
                People
              </h1>
              <p className=''>
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button className='btn btn-outline-purple'>Connect</button>
            </div>
            <div className='col'>
              <h1 className=''>
                <i class='bi bi-geo-alt-fill'></i>
                Place
              </h1>
              <p className=''>
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
              <button className='btn btn-outline-purple'>Meet up</button>
            </div>

            <div className='col'>
              <h1 className=''>
                <img src='/images/shopping.svg' alt='' className='' />
                Product
              </h1>
              <p className=''>
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
              <button className='btn btn-outline-purple'>Get it</button>
            </div>

            <div className='col'>
              <h1 className=''>
                <i class='bi bi-calendar-check-fill'></i>
                Program
              </h1>
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
