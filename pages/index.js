import Layout from '../components/layout'
import ThemeSelector from '../components/theme-selector'
import Form from '../components/form'

const getTheme = theme => console.log(theme)

const Index = props => (
  <Layout url={ props.url }>
    <ThemeSelector onClick={getTheme} />
    <Form />
  </Layout>
)

export default Index
