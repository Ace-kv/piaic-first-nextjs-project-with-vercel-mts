import Link from 'next/link'

function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <br />
        <Link href='/dashboard/analytics'>Go to Analyics</Link>
        <br />
        <Link href='/dashboard/settings'>Go to Settings</Link>
      </div>
    
    )
  }
  export default Dashboard;