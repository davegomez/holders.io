import React, { Component } from 'react'
import ColorPicker from './color-picker'
import Input from './input'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      background: '#ffffff',
      filter: '',
      foreground: '#000000',
      size: '',
      text: '',
      type: ''
    }
  }

  handleChange = (event) => {

  }

  render() {
    return (
      <div>
        <form>
          <div>
            <Input label='Size' type='text' placeholder='800x600' />
            <Input label='Text' type='text' placeholder='Placeholder text' />
            <ColorPicker label='Background' color='#000000' />
          </div>
        </form>

        <div className='url-display'>
        </div>

        <style jsx>{`
          form div {
            display: flex;
            justify-content: space-between;
          }
        `}</style>
      </div>
    )
  }
}

export default Form
