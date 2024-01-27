const Footer = () => {
  return (
    <nav className='navbar navbar-expand-md bg-body-tertiary shadow'>
      <div className='container-lg'>
        <a className='navbar-brand' href='#'>
          <img
            src='images/hobby-cue-logo-v-21.svg'
            alt='Bootstrap'
            // width='30'
            height='35'
          />
        </a>
        {/* <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button> */}
        {/* desktop view */}
        <div className='collapse navbar-collapse justify-content-between'>
          <div
            className='input-group     '
            style={{
              width: '30%',
            }}
          >
            <input
              type='text'
              className='form-control'
              placeholder='Search here...'
              aria-label='Search here...'
            />

            <button className='btn btn-purple' type='button' id='Search'>
              <i className='bi bi-search'></i>
            </button>
          </div>

          <ul className='navbar-nav  justify-content-between '>
            <li className='nav-item dropdown'>
              <button
                className='btn nav-link text-purple dropdown-toggle  '
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <img src='images/explore.svg' alt='explore' />
                Explore
              </button>
              <ul className='dropdown-menu mt-3'>
                <li>
                  <a className='dropdown-item' href='#'>
                    People - Community
                  </a>
                </li>
                <li>
                  <hr class='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Places - Venues
                  </a>
                </li>
                <li>
                  <hr class='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Programs - Events
                  </a>
                </li>
                <li>
                  <hr class='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Products - Store
                  </a>
                </li>
                <li>
                  <hr class='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Blogs
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <button
                className='btn nav-link text-purple dropdown-toggle  '
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <img src='images/hobbies.svg' alt='explore' />
                Hobbies
              </button>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-purple ' href='#'>
                <i class='bi bi-bookmark-fill'></i>
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link text-purple ' href='#'>
                <i className='bi bi-bell-fill'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-purple mw-25 ' href='#'>
                <i class='bi bi-cart-fill w-25'></i>
              </a>
            </li>
            <li className='nav-item'>
              <button class='btn   btn-outline-purple ' type='button'>
                Sign In
              </button>
            </li>
          </ul>
        </div>

        {/* moblie view */}
        <ul className='nav  d-md-none'>
          <li className='nav-item'>
            <a
              className='nav-link text-purple display-2'
              aria-current='page'
              href='#'
            >
              <i className='bi bi-search'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-purple ' href='#'>
              <i className='bi bi-bell-fill'></i>
            </a>
          </li>
          <li className='nav-item'>
            <button type='button' className='btn m-0 p-0 nav-link'>
              <img src='images/menublock.png' alt='' className='nav-link' />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Footer
