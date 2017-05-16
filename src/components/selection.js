import Select from 'react-select'
import ReactSelectStyles from '../styles/react-select'

const Selection = props => {
  const fieldName = props.label.toLowerCase()

  return (
    <label htmlFor={fieldName}>
      {props.label}
      <Select
        placeholder={props.placeholder || 'Select...'}
        options={props.options}
        clearable={true}
        searchable={true}
        simpleValue
        value={props.value}
        onChange={props.onChange}
      />
    <ReactSelectStyles />
    </label>
  )
}

export default Selection
