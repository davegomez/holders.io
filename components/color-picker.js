import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import { colors } from '../styles/theme'

class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = { displayColorPicker: false }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  render() {
    console.log(this.state)

    return (
      <label>
        { this.props.label }
        <div className='picker-frame'>
          <div className='picker'
            onClick={ this.handleClick }
            style={{ backgroundColor: this.props.color }}
          ></div>
        </div>

        { this.state.displayColorPicker ?
          <div className='popover'>
            <div className='cover' onClick={ this.handleClose }/>
            <SketchPicker />
          </div> : null }

        <style jsx>{`
          label {
            position: relative;
          }

          .picker-frame {
            border: 1px solid ${colors.primary};
            margin-top: 4px;
            padding: 4px;
            height: 40px;
            width: 140px;
          }

          .picker {
            height: 100%;
            width: 100%;
          }

          .popover {
            position: absolute;
            top: 70px;
            z-index: 2;
          }

          .cover {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
        `}</style>
      </label>
    )
  }
}

export default ColorPicker
