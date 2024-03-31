import Link from 'next/link'

function Settings() {
    return (
      <div>
        <h1>Settings</h1>
        <br />
        <Link href='/dashboard/settings/profile'>Check Profile</Link>
        <br />
        <Link href='/dashboard/settings/password'>Check Password</Link>
      </div>
    )
  }
  export default Settings;