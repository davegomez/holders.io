import { colors, fonts } from './theme'

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

    input:focus {
      border-color: ${colors.outline};
    }

    label {
      display: flex;
      flex-direction: column;
    }
  `}</style>
)

export default BaseStyles
