import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import { colors } from '../styles/theme'

class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayColorPicker: false,
      color: props.color
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  handleChangeComplete = color => {
    this.setState({ color: color.hex });
    this.props.onChangeComplete(
      this.props.label.toLowerCase(),
      color.hex.slice(1)
    )
  };

  render() {
    return (
      <label>
        {this.props.label}
        <div className='picker-frame'>
          <div className='picker'
            onClick={this.handleClick}
            style={{ backgroundColor: this.state.color }}
          ></div>
        </div>

        {this.state.displayColorPicker ?
          <div className='popover'>
            <div className='cover' onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              disableAlpha={true}
              onChangeComplete={this.handleChangeComplete}
            />
          </div> : null}

        <style jsx>{`
          label {
            position: relative;
          }

          .picker-frame {
            border: 1px solid ${colors.primary};
            height: 40px;
            margin-top: 4px;
            padding: 4px;
            width: 140px;
          }

          .picker {
            cursor: pointer;
            height: 100%;
            width: 100%;
          }

          .popover {
            position: absolute;
            top: 70px;
            z-index: 2;
          }

          .cover {
            bottom: 0;
            left: 0;
            position: fixed;
            right: 0;
            top: 0;
          }
        `}</style>
      </label>
    )
  }
}

export default ColorPicker
