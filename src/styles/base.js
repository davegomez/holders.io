import { colors, fonts } from './theme'

// language=SCSS
const BaseStyles = () => (
  <style jsx global>{`
    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body,
    input {
      color: ${colors.text};
      font-family: ${fonts.primary};
      font-size: 16px;
    }

    input {
      outline: none;
    }

    label {
      display: flex;
      flex-direction: column;
    }
  `}</style>
)

export default BaseStyles
