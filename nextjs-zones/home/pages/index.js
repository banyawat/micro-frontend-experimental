import Link from 'next/link'
import dynamic from 'next/dynamic'

const Header = dynamic(import('../components/Header'))

export default () => (
  <div>
    <Header />
    <p>This is our homepage</p>
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Link href='/company'>
        <a>See companies</a>
      </Link>
      <Link href='/resume'>
        <a>See resumes</a>
      </Link>
      <Link href='/about'>
        <a>About us</a>
      </Link>
    </div>
    <img width={200} src='/static/nextjs.png' />
  </div>
)
