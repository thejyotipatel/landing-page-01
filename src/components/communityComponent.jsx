import { useState } from 'react'

const CommunityComponent = () => {
  const [showPopover, setShowPopover] = useState(false)

  return (
    <>
      <div className='bg-body-tertiary bg-secondary hero-component'>
        <div className='container-lg   pt-5'>
          <div className='d-flex flex-column  gap-3'>
            <h1 className='fst-italic'>
              Your <span className='text-purple'>Hobby</span>, Your
              <span className='text-info'> Community...</span>
            </h1>
            <div className='d-inline'>
              <button className='btn btn-purple'>Get started</button>
            </div>
          </div>

          <div className='  d-inline-flex container-lg  mt-5 pt-5 gap-4  hero-bg-img1'>
            <img
              src='images/community01.svg'
              alt='community'
              className=' col  img-fluid'
            />
            <img
              src='images/community02.png'
              alt='community'
              className='col img-fluid'
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default CommunityComponent
