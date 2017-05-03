const ThemeButton = (props) => {
  const theme = props.theme || ''
import { colors } from '../styles/theme'

  return (
    <div onClick={props.onClick}>
      {theme ? <img src={`/static/img/${theme}` } /> : null}
      <style jsx>{`
        div {
          background-color: rgb(255, 255, 255);
          border-radius: 10px;
          background-color: ${colors.white};
          border: 1px solid ${colors.primary};
          height: 90px;
          width: 90px;
        }
          border-color: ${colors.secondary}
      `}</style>
    </div>
  )
}

export default ThemeButton
