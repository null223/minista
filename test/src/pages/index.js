import { Helmet } from "react-helmet"
import { render, Comment } from "minista"
import { ServerStyleSheet } from 'styled-components'

import AppLayout from "../components/app-layout"
import Heading from '../components/heading'

const Home = () => {
  const sheet = new ServerStyleSheet()
  sheet.collectStyles(element)
  const styleTags = sheet.getStyleTags()
  return render(
    <AppLayout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Comment text="Comment Test" />
      <Heading>Hello</Heading>
    </AppLayout>
  , styleTags)
}

export default Home
