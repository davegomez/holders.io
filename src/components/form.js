import React, { Component } from 'react'
import ThemeSelector from './theme-selector'
import ColorPicker from './color-picker'
import Input from './input'
import Selection from './selection'
import { colors, fonts } from '../styles/theme'

const types = [
  { value: 'gif', label: 'gif' },
  { value: 'jpg', label: 'jpg' },
  { value: 'png', label: 'png' }
]

const filters = [
  { value: 'lark', label: 'Lark'},
  { value: 'reyes', label: 'Reyes'},
  { value: 'juno', label: 'Juno'},
  { value: 'slumber', label: 'Slumber'},
  { value: 'crema', label: 'Crema'},
  { value: 'ludwig', label: 'Ludwig'},
  { value: 'aden', label: 'Aden'},
  { value: 'perpetua', label: 'Perpetua'},
  { value: 'amaro', label: 'Amaro'},
  { value: 'mayfair', label: 'Mayfair'},
  { value: 'rise', label: 'Rise'},
  { value: 'hudson', label: 'Hudson'},
  { value: 'valencia', label: 'Valencia'},
  { value: 'xpro2', label: 'Xpro2'},
  { value: 'sierra', label: 'Sierra'},
  { value: 'willow', label: 'Willow'},
  { value: 'lofi', label: 'Lofi'},
  { value: 'earlybird', label: 'Earlybird'},
  { value: 'brannan', label: 'Brannan'},
  { value: 'inkwell', label: 'Inkwell'},
  { value: 'hefe', label: 'Hefe'},
  { value: 'nashville', label: 'Nashville'},
  { value: 'sutro', label: 'Sutro'},
  { value: 'toaster', label: 'Toaster'},
  { value: 'walden', label: 'Walden'},
  { value: 'nineteenSeventySeven', label: 'NineteenSeventySeven'},
  { value: 'kelvin', label: 'Kelvin'}
]

class Form extends Component {
  state = {
    theme: 'empty',
    url: 'https://holders.io'
  }

  onInputChange = event => {
    const {id, value } = event.target
    this.buildUrl({ [id]: value })
  }

  onTypeChange = value => {
    this.buildUrl({ type: value })
  }

  onFilterChange = value => {
    this.setState({ filter: value })
    this.buildUrl()
  }

  buildUrl = state => {

    const protocol = 'https://'
    const theme = this.state.theme ? `${this.state.theme}/` : ''
    const baseUrl = 'holders.io'
    const size = state.size ? `/${state.size}` : `/${this.state.size}`
    const color = this.state.theme && this.state.background ? `/${this.state.background.slice(1)}` : ''
    const text = state.text ? `/${state.text}` : `/${this.state.text}`
    const filter = this.state.theme && this.state.filter ? `/${this.state.filter}` : ''
    const type = state.type ?
      `.${state.type}` :
      this.state.type ? `.${this.state.type}` : ''



    const url = `${protocol}${theme}${baseUrl}${size}${color}${text}${filter}${type}`

    this.setState({
      ...state,
      url
    })
  }

  render() {
    return (
      <div>
        <ThemeSelector onClick={() => {}} />
        <form>
          <div className='row'>
            <Input label='Size' type='text' placeholder='800x600' onChange={this.onInputChange} />
            <Input label='Text' type='text' placeholder='Placeholder text' onChange={this.onInputChange} />
            <ColorPicker label='Background' color='#fff' />
          </div>
          <div className='row'>
            <Selection
              label='Type'
              value={this.state.type}
              options={types}
              onChange={this.onTypeChange}
            />
            <Selection
              label='Filter'
              value={this.state.filter}
              options={filters}
              onChange={this.onFilterChange}
            />
            <ColorPicker label='Foreground' color='#000' />
          </div>
          <div className='row-url'>
            {'Holder URL'}
            <div className='url-display'>{this.state.url}</div>
          </div>
        </form>

        <style jsx>{`
          .row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }

          .row-url {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
          }

          .url-display {
            border: 1px solid ${colors.primary};
            height: 40px;
            line-height: 40px;
            margin-top: 4px;
            overflow: hidden;
            padding: 0 10px;
            width: 880px;
          }
        `}</style>
      </div>
    )
  }
}

export default Form
