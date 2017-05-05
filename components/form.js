import React, { Component } from 'react'
import ColorPicker from './color-picker'
import Input from './input'

class Form extends Component {
  state = {
    background: '#fff',
    foreground: '#000',
    baseUrl: 'holders.io/'
  }

  handleChange = event => {

  }

  render() {
    return (
      <div>
        <form>
          <div>
            <Input label='Size' type='text' placeholder='800x600' />
            <Input label='Text' type='text' placeholder='Placeholder text' />
            <ColorPicker label='Background' color={this.state.background} />
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
