import { memo } from "react"

const NavBar = () => {


  return (
    <header class="p-3 bg-dark text-white all-navbar-custom">
    <div class="container">
      <div class="navbar-custom">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <spam class="navbar-header-custom">BLOG</spam>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-white">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-login-custom">Login</button>
          <button type="button" class="btn btn-signup-custom">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    
  )
}

export default memo(NavBar);