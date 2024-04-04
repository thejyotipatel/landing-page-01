const CommunityComponent = () => {
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

            <div className='me-auto'>
              <button
                type='button'
                class='btn btn-secondary'
                data-bs-toggle='tooltip'
                data-bs-placement='bottom'
                data-bs-title='Tooltip on bottom'
              >
                Tooltip on bottom
              </button>
              <p className='p-2'>
                <i class='bi bi-chevron-up text-purple'></i>
              </p>
              <p className='muted'>
                Placeholder text to demonstrate some{' '}
                <a
                  href='#'
                  data-bs-toggle='tooltip'
                  data-bs-title='Default tooltip'
                >
                  inline links
                </a>{' '}
                with tooltips. This is now just filler, no killer. Content
                placed here just to mimic the presence of{' '}
                <a
                  href='#'
                  data-bs-toggle='tooltip'
                  data-bs-title='Another tooltip'
                >
                  real text
                </a>
                . And all that just to give you an idea of how tooltips would
                look when used in real-world situations. So hopefully you've now
                seen how{' '}
                <a
                  href='#'
                  data-bs-toggle='tooltip'
                  data-bs-title='Another one here too'
                >
                  these tooltips on links
                </a>{' '}
                can work in practice, once you use them on{' '}
                <a
                  href='#'
                  data-bs-toggle='tooltip'
                  data-bs-title='The last tip!'
                >
                  your own
                </a>{' '}
                site or project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CommunityComponent
