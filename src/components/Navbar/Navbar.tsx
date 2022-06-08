import Button from '../Button'
import './Navbar.sass'

const Navbar = () => (
  <nav className="nav">
    <div className="container nav__container">
      <div className="nav__logo">Scrumify</div>
      <div className="nav__tail">
        <Button>Login</Button>
      </div>
    </div>
  </nav>
)

export default Navbar
