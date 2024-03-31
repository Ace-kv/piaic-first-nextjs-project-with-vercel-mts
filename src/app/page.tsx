import Link from 'next/link'

function HomePage() {
  return (
    <div>
      <h1>Hello, I am Muhammad Talha and this is my first Next.js project.</h1>
      <br />
      <Link href='/dashboard'>Go to Dashboard</Link>
    </div>
  )
}
export default HomePage;