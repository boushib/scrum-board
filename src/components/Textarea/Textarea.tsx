import './Textarea.sass'

interface Props {
  value: string
  maxLength?: number
  disabled?: boolean
  autoFocus?: boolean
  placeholder?: string
  onChange: (value: string) => void
}

const Textarea = ({
  value,
  maxLength,
  disabled = false,
  autoFocus = false,
  placeholder,
  onChange,
}: Props) => (
  <textarea
    className="textarea"
    value={value}
    maxLength={maxLength}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    disabled={disabled}
    autoFocus={autoFocus}
  />
)

export default Textarea
