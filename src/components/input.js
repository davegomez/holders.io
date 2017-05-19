import { colors } from '../styles/theme'

const Input = props => {
  const fieldName = props.label.toLowerCase()
  return (
    <label htmlFor={fieldName}>
      <span className={ props.required ? 'required': null }>
        { props.label }
      </span>
      <input
        className={props.isValid ? null : 'invalid'}
        type={props.type}
        placeholder={props.placeholder}
        id={fieldName}
        onBlur={props.onBlur}
      />

      { /*language=SCSS*/ }
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

        .invalid,
        .invalid:focus {
          border-color: ${colors.errorOutline};
          background-color: ${colors.errorBackground};
        }

        span {
          position: relative;
        }

        .required::after {
          color: ${colors.errorOutline};
          content: '*';
          left: 40px;
          position: absolute;
          top: -4px;
        }
      `}</style>
    </label>
  )
}

export default Input
