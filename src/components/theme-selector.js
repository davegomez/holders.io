import React, { Component } from 'react'
import ThemeButton from '../components/theme-button'

const themes = ['empty', 'puppy', 'kitten']

class ThemeSelector extends Component {
  constructor(props) {
    super(props)
    this.state = { theme: 'empty' }
  }

  handleClick = event => {
    const state = { theme: event.target.dataset.theme }
    this.setState(state)
    this.props.onClick(state)
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

        { /*language=SCSS*/ }
        <style jsx>{`
          div {
            display: flex;
            margin-bottom: 50px;
          }
        `}</style>
      </div>
    )
  }
}

export default ThemeSelector
