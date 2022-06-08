import DarkModeIcon from '../../icons/DarkMode'
import LightModeIcon from '../../icons/LightMode'
import './ThemeSwitch.sass'

interface Props {
  isLight: boolean
  onChange: () => void
}

const ThemeSwitch = ({ isLight, onChange }: Props) => (
  <div className="theme-switch" onClick={onChange}>
    {isLight ? <DarkModeIcon /> : <LightModeIcon />}
  </div>
)
export default ThemeSwitch
