import Layout from '../src/components/layout'
import ThemeSelector from '../src/components/theme-selector'
import Form from '../src/components/form'

const getTheme = theme => console.log(theme)

const Index = props => (
  <Layout url={ props.url }>
    <ThemeSelector onClick={getTheme} />
    <Form />
  </Layout>
)

export default Index
