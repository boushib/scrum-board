import classNames from "classnames"
import "./Button.sass"

interface Props {
  children: React.ReactNode
  isDisabled?: boolean
  isSecondary?: boolean
  onClick?: () => void
}

const Button = ({ children, isDisabled, isSecondary, onClick }: Props) => (
  <button
    className={classNames({
      btn: true,
      "btn--secondary": isSecondary,
    })}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
