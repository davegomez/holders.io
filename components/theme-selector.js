import React, { Component } from 'react'
import ThemeButton from '../components/theme-button'

const themes = ['empty', 'puppy', 'kitty']

class ThemeSelector extends Component {
  constructor(props) {
    super(props)
    this.state = { theme: 'empty' }
  }

  handleClick = event => {
    const theme = event.target.dataset.theme
    this.setState({ theme })
    this.props.onClick(theme)
  }

  render() {
    return (
      <div>
        {
          themes.map(theme => (
            <ThemeButton
              key={theme}
              theme={theme}
              active={theme === this.state.theme ? true : false}
              onClick={this.handleClick}
            />
          ))
        }
        <style jsx>{`
          div {
            display: flex;
            marging-bottom: 50px;
          }
        `}</style>
      </div>
    )
  }
}

export default ThemeSelector
