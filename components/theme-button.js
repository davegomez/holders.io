import { colors } from '../styles/theme'

const ThemeButton = props => {
  const backgroundUrl = `url('/static/img/themes/${props.theme}.png')`
  const buttonStyle = props.theme !== 'empty' ?
    { backgroundImage: backgroundUrl } : null

  return (
    <button
      className={props.active ? 'active' : null}
      onClick={props.onClick}
      style={buttonStyle}
      data-theme={props.theme || null}
    >
      <style jsx>{`
        button {
          background-color: ${colors.white};
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border: 1px solid ${colors.primary};
          border-radius: 4px;
          cursor: pointer;
          margin-right: 20px;
          height: 90px;
          width: 90px;
        }

        button:focus {
          outline: 0;
        }

        .active {
          border-color: ${colors.secondary}
        }
      `}</style>
    </button>
  )
}

export default ThemeButton
