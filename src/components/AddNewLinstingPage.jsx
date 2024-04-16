import { BoxesData } from './Data'

const AddNewLinstingPage = () => {
  return (
    <>
      <div className='bg-body-tertiary  '>
        <div className='container-md   '>
          <h5 className='d-flex gap-2 justify-content-center '>
            <i className='bi bi-plus-circle-fill text-primary '></i>Add Your
            Listing
          </h5>

          {/* <div className=' row  row-cols-1 row-cols-sm-1 row-cols-md-2 justify-content-between '> */}
          <div class='container text-center'>
            <div className='row row-cols-2'>
              <div className='col-4 '>
                <div className=''>
                  <h5 className='  d-flex gap-2'>
                    <i className='bi bi-people-fill text-purple'></i>
                    People
                  </h5>
                  <p className='  '>
                    An Individual or Organization. Teacher, Coach, Professional
                    or Online Seller. Company, Business or Association.
                  </p>
                </div>
              </div>

              <div className=' col-4'>
                <div className=''>
                  <h5 className='  d-flex gap-2'>
                    <i className='bi bi-geo-alt-fill text-success' />
                    Place
                  </h5>
                  <p className='  '>
                    An Address. Classroom, Shop, Performance or Event Venue,
                    Sports Arena, Play Area, Studio, School or Campus.
                  </p>
                </div>
              </div>
              <div className=' col-4'>
                <div className=''>
                  <h5 className='  d-flex gap-2'>
                    <i className='bi bi-bag-check-fill text-danger'></i>
                    Product
                  </h5>
                  <p className='  '>
                    An Item that you can Book, Buy or Rent. Appointment, Ticket,
                    or Voucher. Equipment, Instrument or Activity Kit.
                  </p>
                </div>
              </div>
              <div className=' col-4'>
                <div className=''>
                  <h5 className='  d-flex gap-2'>
                    <i className='bi bi-calendar-check-fill text-primary' />
                    Program
                  </h5>
                  <p className='  '>
                    An Event with Venue and Date. Meetup, Workshop or Webinar.
                    Exhibition, Performance or Competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddNewLinstingPage
