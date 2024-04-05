const Footer = () => {
  return (
    <>
      <div className='container-lg'>
        <footer className='py-5'>
          <div className='row'>
            <div className='col-3 col-md-2 mb-3'>
              <ul role='list' className='nev flex-column p-0'>
                <li className='nav-item mb-3'>
                  <h6>Hobbycue</h6>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link  text-body-secondary  '>
                    About Us
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary  '>
                    Our Services
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Work with Us
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    FAQ
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-3 col-md-2 mb-3'>
              <ul role='list' className='nev flex-column p-0'>
                <li className='nav-item mb-3'>
                  <h6>How Do I</h6>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Sign Up
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Add a Listing
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Claim Listing
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Post a Query
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Add a Blog Post
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Other Queries
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-3 col-md-2 mb-3'>
              <ul role='list' className='nev flex-column p-0'>
                <li className='nav-item mb-3'>
                  <h6>Quick Links</h6>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Listings
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Blog Posts
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Shop / Store
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a href='' className='nav-link text-body-secondary'>
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-md-5 offset-md-1 mb-3'>
              <h6>Social Media</h6>

              <ul
                role='list'
                className='nev d-flex gap-3 flex-row p-0 mt-3 mb-5 '
              >
                <li className='nav-item mb-2 d-flex'>
                  <a
                    href=''
                    className='nav-link px-2 py-1 bg-body-secondary rounded-circle'
                  >
                    <i class='bi bi-facebook '></i>
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a
                    href=''
                    className='nav-link text-body-secondary px-2 py-1 bg-body-secondary rounded-circle'
                  >
                    <i class='bi bi-twitter-x'></i>
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a
                    href=''
                    className='nav-link text-body-secondary px-2 py-1 bg-body-secondary rounded-circle'
                  >
                    <i class='bi bi-instagram'></i>
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a
                    href=''
                    className='nav-link text-body-secondary px-2 py-1 bg-body-secondary rounded-circle'
                  >
                    <i class='bi bi-pinterest'></i>
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a
                    href=''
                    className='nav-link text-body-secondary px-2 py-1 bg-body-secondary rounded-circle'
                  >
                    <i class='bi bi-google'></i>
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a
                    href=''
                    className='nav-link text-body-secondary px-2 py-1 bg-body-secondary rounded-circle'
                  >
                    <i class='bi bi-youtube'></i>
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a
                    href=''
                    className='nav-link text-body-secondary px-2 py-1 bg-body-secondary rounded-circle'
                  >
                    <i class='bi bi-telegram'></i>
                  </a>
                </li>
                <li className='nav-item mb-2 d-flex'>
                  <a
                    href=''
                    className='nav-link text-body-secondary px-2 py-1 bg-body-secondary rounded-circle'
                  >
                    <i class='bi bi-envelope-fill'></i>
                  </a>
                </li>
              </ul>

              <h5>Invite Friends</h5>
              <inp5t
                type='email'
                className='form-control'
                id='email'
                placeholder='Email ID'
              />
              <button className='btn'>Invite</button>
            </div>
          </div>
        </footer>
      </div>

      <div className='d-flex  justify-content-center py-4    bg-opacity-10  bg-secondary'>
        <h6>© Purple Cues Private Limited</h6>
      </div>
    </>
  )
}
export default Footer
