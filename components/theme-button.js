import { colors } from '../styles/theme'

const ThemeButton = props => {
  const backgroundUrl = `url('/static/img/themes/${props.theme}.jpg')`
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
          background-color: ${colors.background};
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border: 1px solid ${colors.primary};
          border-radius: 4px;
          cursor: pointer;
          margin-right: 40px;
          position: relative;
          height: 90px;
          width: 90px;
        }

        button:focus {
          outline: 0;
        }

        .active::before {
          content: '✓';
          background-color: ${colors.primary};
          color: ${colors.white};
          border-radius: 50%;
          border: 1px solid ${colors.white};
          font-size: 14px;
          padding: 4px 7px;
          position: absolute;
          top: 4px;
          right: 4px;
        }
      `}</style>
    </button>
  )
}

export default ThemeButton
