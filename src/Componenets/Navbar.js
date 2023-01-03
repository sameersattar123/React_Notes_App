import Rect from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({title , about , ToggleMode , mode}) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" d-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" ria-expanded="false" aria-label="Toggle navigation">
      <splinkn className="navbar-toggler-icon"></splinkn>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{about}</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
    </div>
<div className="`form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={ToggleMode} id="flexSwitchCheckChecked"  />
  <label className={`form-check-label text-${mode==="light"? `dark` : `light`}`}  htmlFor="flexSwitchCheckChecked">Enable DarkMode</label>
</div>
</nav>
  </div>
  )
}

export default Navbar

