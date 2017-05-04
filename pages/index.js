import Layout from '../components/layout'
import ThemeSelector from '../components/theme-selector'

const getTheme = theme => console.log(theme)

const Index = props => (
  <Layout url={ props.url }>
    <ThemeSelector onClick={getTheme} />
  </Layout>
)

export default Index
