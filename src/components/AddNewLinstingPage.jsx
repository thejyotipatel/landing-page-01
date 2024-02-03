import { BoxesData } from './Data'

const AddNewLinstingPage = () => {
  return (
    <>
      <div className='bg-body-tertiary   bg-purple bg-opacity-10 hero-component'>
        <div className='container w-50   pt-5'>
          <div className=''>
            <h5 className='d-flex gap-2 text-center '>
              <i class='bi bi-plus-circle-fill text-primary '></i>Add Your
              Listing
            </h5>
            <div className=' row  '>
              <div className='col-sm-6 p-2'>
                <div className='card w-100 h-100'>
                  <div className='card-body'>
                    <h5 className='card-title d-flex gap-2'>
                      <i class='bi bi-people-fill text-purple'></i>
                      People
                    </h5>
                    <p className='card-text '>
                      An Individual or Organization. Teacher, Coach,
                      Professional or Online Seller. Company, Business or
                      Association.
                    </p>
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
export default AddNewLinstingPage
