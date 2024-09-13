// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, location }) => (
  <Layout>
    <div style={styles.container}>
      <h1 style={styles.title}>Gatsby supports <b>TypeScript by default</b></h1>
      <p style={styles.text}>
        This means that you can create and write <code>.ts/.tsx</code> files for
        your pages, components, and <code>gatsby-*</code> configuration files (for
        example <code>gatsby-config.ts</code>).
      </p>
      <p style={styles.text}>
        For type checking you'll want to install <code>typescript</code> via npm
        and run <code>tsc --init</code> to create a <code>tsconfig</code> file.
      </p>
      <p style={styles.text}>
        You're currently on the page <code>{location.pathname}</code> which was
        built on {data.site.buildTime}.
      </p>
      <p style={styles.text}>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/" style={styles.link}>
          documentation about TypeScript
        </a>.
      </p>
      <Link to="/" style={styles.button}>Go back to the homepage</Link>
    </div>
  </Layout>
)

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '2rem' },
  title: { color: '#003366', marginBottom: '1rem' },
  text: { marginBottom: '1rem' },
  link: { color: '#003366', textDecoration: 'underline' },
  button: {
    display: 'inline-block',
    background: '#003366',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    textDecoration: 'none',
    marginTop: '1rem'
  }
}

export const Head: HeadFC<DataProps> = () => <Seo title="Using TypeScript" />

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`