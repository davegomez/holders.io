import Select from 'react-select'
import ReactSelectStyles from '../styles/react-select'

const Selection = props => {
  const fieldName = props.label.toLowerCase()

  return (
    <label htmlFor={fieldName}>
      {props.label}
      <Select
        name={props.label.toLowerCase()}
        options={props.options}
        placeholder={props.placeholder || 'Select...'}
        simpleValue
        searchable={true}
        value={props.value}
        onChange={props.onChange}
      />
    <ReactSelectStyles />
    </label>
  )
}

export default Selection
