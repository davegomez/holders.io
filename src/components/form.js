import React, { Component } from 'react'
import validate from '../validate'
import ThemeSelector from './theme-selector'
import ColorPicker from './color-picker'
import Input from './input'
import Selection from './selection'
import { colors, fonts } from '../styles/theme'
import { validTypes, types, filters } from '../data'

class Form extends Component {
  state = {
    theme: 'empty',
    url: 'https://holders.io',
    sizeIsValid: true,
    textIsValid: true
  }

  handleInputBlur = event => {
    const { id, value } = event.target
    const isValid = validate(id, value)
    this.setState({ [`${id}IsValid`]: isValid })
    if (isValid) this.buildUrl({ [id]: value })
  }

  onTypeSelection = value => {
    this.buildUrl({ type: value || '' })
  }

  onFilterSelection = value => {
    this.buildUrl({ filter: value || '' })
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
            <Input
              label='Size'
              isValid={this.state.sizeIsValid}
              type='text'
              placeholder='800x600'
              onBlur={this.handleInputBlur}
            />
            <Input
              label='Text'
              isValid={this.state.textIsValid}
              type='text'
              placeholder='Placeholder text'
              onBlur={this.handleInputBlur}
            />
            <ColorPicker label='Background' color='#fff' />
          </div>
          <div className='row'>
            <Selection
              label='Type'
              value={this.state.type}
              options={types}
              onChange={this.onTypeSelection}
            />
            <Selection
              label='Filter'
              value={this.state.filter}
              options={filters}
              onChange={this.onFilterSelection}
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
          }
        `}</style>
      </div>
    )
  }
}

export default Form
