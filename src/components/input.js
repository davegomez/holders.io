import { colors } from '../styles/theme'

const Input = (props) => {
  const fieldName = props.label.toLowerCase()
  return (
    <label htmlFor={fieldName}>
      {props.label}
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={fieldName}
        onChange={props.onChange}
      />

      <style jsx>{`
        input {
          border: 1px solid ${colors.primary};
          height: 40px;
          margin-top: 4px;
          padding: 0 10px;
          width: 300px;
        }

        input:focus {
          border-color: ${colors.outline};
        }

        input::placeholder {
          color: ${colors.pholderText};
        }
      `}</style>
    </label>
  )
}

export default Input
