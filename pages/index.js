import Head from 'next/head'
import Layout, { siteTitle } from './components/layout'
import utilStyles from './styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to this place where I share a little about who I am and what I am learning to become a better engineer and growing my career in tech.</p>
        <p>I love computer science and tech as it is always exciting and fun. I have been working as System-Engineer on several companies like Teradata and Thomson Reuters, exposed to a variety of environments and a diversity of challenges.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
