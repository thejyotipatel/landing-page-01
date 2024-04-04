import { BoxesData } from './Data'
const Boxes = () => {
  return (
    <>
      {/* <div className='bg-purple bg-opacity-10  '> */}

      <div className='bg-light'>
        <div className='container'>
          <div className=' row py-5 '>
            {/* <div className=' d-flex justify-content-center flex-wrap gap-3  '> */}
            {BoxesData.map((item) => {
              return (
                <div className='col-sm-6 p-2' key={item.id}>
                  <div
                    className='card w-100 h-100'
                    // className='col border border-light-subtle bg-light box-contant '
                  >
                    <div className='m-3 card-body d-grid gap-3'>
                      {/* <div className='m-3 box-contant d-flex flex-column justify-content-start  gap-2 '> */}
                      <h4 className='d-flex card-title gap-3'>
                        <span className='fs-3'>{item?.icon}</span>

                        {item.title}
                      </h4>
                      <p className='card-text'>{item.text}</p>
                      <div className=''>
                        <a href='#' class='btn btn-outline-purple px-4     '>
                          {item.butText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='bg-primary bg-opacity-10  '>
        <div className='container'>
          <div className='py-5'>
            <div className='card w-100 h-100'>
              <div className='m-3 card-body d-grid gap-3'>
                <h4 className='card-title d-flex gap-3'>
                  <i class='bi bi-plus-circle-fill text-info fs-3' />
                  Add your own
                </h4>
                <p className='card-text '>
                  Are you a teacher or expert? Do you sell or rent out
                  equipment, venue or event tickets? Or, you know someone who
                  should be on hobbycue? Go ahead and Add your Own page
                </p>
                <div className=''>
                  <a href='#' class='btn btn-outline-purple px-4'>
                    Add new
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Boxes
