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
                    <div className='card-body p-5 d-grid gap-3'>
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
                      <a href='#' className='btn btn-outline-purple w-fit'>
                        {item.butText}
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className=' row p-2'>
            <div className='card w-100 h-100'>
              <div className='card-body'>
                <h5 className='card-title d-flex gap-2'>
                  <i class='bi bi-plus-circle-fill text-primary' />
                  Add your own
                </h5>
                <p className='card-text '>
                  Are you a teacher or expert? Do you sell or rent out
                  equipment, venue or event tickets? Or, you know someone who
                  should be on hobbycue? Go ahead and Add your Own page
                </p>
                <a href='#' className='btn btn-outline-purple '>
                  Add new
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Boxes
