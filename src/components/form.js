import React, { Component } from 'react'
import validate from '../validate'
import buildUrl from '../uri-builder'
import ThemeSelector from './theme-selector'
import ColorPicker from './color-picker'
import Input from './input'
import Selection from './selection'
import { colors, fonts } from '../styles/theme'
import { validTypes, types, filters } from '../data'

class Form extends Component {
  state = {
    sizeIsValid: true,
    textIsValid: true
  }

  handleThemeSelection = state => {
    this.setState(state)
  }

  handleInputBlur = event => {
    const { id, value } = event.target
    const isValid = validate(id, value)
    this.setState({ [`${id}IsValid`]: isValid })
    if (isValid) {
      this.setState({ [id]: value })
    } else {
      this.setState({ [id]: '' })
    }
  }

  handleTypeSelection = value => {
    this.setState({ type: value || '' })
  }

  handleFilterSelection = value => {
    this.setState({ filter: value || '' })
  }

  handleChangeComplete = (id, color) => {
    this.setState({ [id]: color });
  };

  handleOnClick = event => {
    window.getSelection().selectAllChildren(event.target)
  }

  render() {
    return (
      <div>
        <ThemeSelector onClick={ this.handleThemeSelection } />
        <form>
          <div className='row'>
            <Input
              label='Size'
              isValid={ this.state.sizeIsValid }
              type='text'
              placeholder='800x600'
              required
              onBlur={ this.handleInputBlur }
            />
            <Input
              label='Text'
              isValid={ this.state.textIsValid }
              type='text'
              placeholder='Placeholder text'
              onBlur={ this.handleInputBlur }
            />
            <ColorPicker
              label='Background'
              color='#fff'
              onChangeComplete={ this.handleChangeComplete }
            />
          </div>
          <div className='row'>
            <Selection
              label='Filter'
              value={ this.state.filter }
              options={ filters }
              onChange={ this.handleFilterSelection }
            />
            <Selection
              label='Type'
              value={ this.state.type}
              options={ types }
              onChange={ this.handleTypeSelection }
            />
            <ColorPicker
              label='Foreground'
              color='#000'
              onChangeComplete={ this.handleChangeComplete }
            />
          </div>
          <div className='row-url'>
            { 'Holder URL' }
            <div className='url-display' onClick={ this.handleOnClick }>{ buildUrl(this.state) }</div>
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
