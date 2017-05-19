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

      { /*language=SCSS*/ }
      <style jsx>{`
        button {
          background-color: ${colors.pholderBg};
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border: 1px solid ${colors.primary};
          cursor: pointer;
          height: 90px;
          margin-right: 40px;
          position: relative;
          width: 90px;
        }

        button:focus {
          outline: 0;
        }

        .active::before {
          background-color: ${colors.primary};
          border: 1px solid ${colors.secondary};
          border-radius: 50%;
          color: ${colors.secondary};
          content: '✓';
          font-size: 14px;
          padding: 4px 7px;
          position: absolute;
          right: 4px;
          top: 4px;
        }
      `}</style>
    </button>
  )
}

export default ThemeButton
