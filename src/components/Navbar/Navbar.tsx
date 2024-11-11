// import Button from '../Button'
import ThemeSwitch from "@/components/ThemeSwitch"
import "./Navbar.sass"

interface Props {
  isLight: boolean
  onThemeChange: () => void
}

const Navbar = ({ isLight, onThemeChange }: Props) => (
  <nav className="nav">
    <div className="container nav__container">
      <div className="nav__logo">Scrumify</div>
      <div className="nav__tail">
        <ThemeSwitch isLight={isLight} onChange={onThemeChange} />
        <div className="nav__user">
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80")`,
            }}
            className="nav__user__avatar"
          ></div>
          <div className="nav__user__dropdown">
            <div className="nav__user__dropdown__item">Profile</div>
            <div className="nav__user__dropdown__item">Stories</div>
            <div className="nav__user__dropdown__item">Account Settings</div>
            <div className="nav__user__dropdown__item">Logout</div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
