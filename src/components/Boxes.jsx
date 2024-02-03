import { CardBody } from 'react-bootstrap'
import { BoxesData } from './Data'
const Boxes = () => {
  return (
    <>
      {/* <div className='bg-purple bg-opacity-10  '> */}
      <div className='bg-light'>
        <div className='container'>
          <div className=' row  '>
            {/* <div className=' d-flex justify-content-center flex-wrap gap-3  '> */}
            {BoxesData.map((item) => {
              return (
                <div className='col-sm-6 p-2' key={item.id}>
                  <div
                    className='card w-100 h-100'
                    // className='col border border-light-subtle bg-light box-contant '
                  >
                    <div className='card-body'>
                      {/* <div className='m-3 box-contant d-flex flex-column justify-content-start  gap-2 '> */}
                      <h5 className='card-title d-flex gap-2'>
                        {item?.icon}
                        {item?.img && (
                          <img
                            src={item?.img}
                            alt={item.title}
                            className='d-inline-flex'
                          />
                        )}
                        {item.title}
                      </h5>
                      <p className='card-text '>{item.text}</p>
                      <a href='#' className='btn btn-outline-purple '>
                        {item.butText}
                      </a>
                    </div>
                  </div>
                </div>
                // </div>
              )
            })}
          </div>
          {/* <div className='row row-cols-1 row-cols-sm-1 row-cols-sm-2 justify-content-center'>
            <div className='col border border-light-subtle bg-light p-4 box-contant '>
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
          </div> */}
        </div>
      </div>
    </>
  )
}
export default Boxes
