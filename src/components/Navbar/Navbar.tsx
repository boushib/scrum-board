// import Button from '../Button'
import './Navbar.sass'

const Navbar = () => (
  <nav className="nav">
    <div className="container nav__container">
      <div className="nav__logo">Scrumify</div>
      <div className="nav__tail">
        {/* <Button>Login</Button> */}
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80")`,
          }}
          className="nav__user"
        ></div>
      </div>
    </div>
  </nav>
)

export default Navbar
