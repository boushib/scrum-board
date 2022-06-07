import './FormInput.sass'

interface Props {
  type?: string
  value: string
  maxLength?: number
  disabled?: boolean
  autoFocus?: boolean
  placeholder?: string
  onChange: (value: string) => void
}

const FormInput = ({
  type = 'text',
  value,
  maxLength,
  disabled = false,
  autoFocus = false,
  placeholder,
  onChange,
}: Props) => (
  <input
    className="form-input"
    type={type}
    value={value}
    maxLength={maxLength}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    disabled={disabled}
    autoFocus={autoFocus}
  />
)

export default FormInput
