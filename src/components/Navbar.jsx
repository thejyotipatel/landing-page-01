const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg sticky-top bg-body-tertiary p-2   shadow'>
      <div className='container-lg d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-start'>
          <a className='navbar-brand w-50 ' href='#'>
            <img
              src='images/hobby-cue-logo-v-21.svg'
              className='w-50 '
              alt='Bootstrap'
            />
          </a>

          <div className='input-group   d-none d-md-flex   w-25 '>
            <input
              type='text'
              className='form-control'
              placeholder='Search here...'
              aria-label='Search here...'
              aria-describedby='Search'
            />

            {/* desktop view */}
            <button className='btn btn-purple' type='button' id='Search'>
              <i className='bi bi-search'></i>
            </button>
          </div>
        </div>

        <div className='d-none d-md-flex'>
          <div className='dropdown-center'>
            <button
              className='btn text-purple dropdown-toggle  '
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
          </div>

          <div className='dropdown-center'>
            <button
              className='btn text-purple dropdown-toggle d-flex-inline'
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <img src='images/hobbies.svg' alt='explore' />
              Hobbies
            </button>
          </div>

          <ul className='nav'>
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
              <button
                type='button'
                class='nav-link btn border border-purple px-4  text-purple'
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
        {/* moblie view */}
        <ul className='nav  d-md-none   '>
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
export default Navbar
