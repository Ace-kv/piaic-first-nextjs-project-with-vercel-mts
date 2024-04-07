'use client'

import { useRouter } from "next/navigation";

function Settings() {
    const router = useRouter()

    const handleProfile = () => {
      router.push('/dashboard/settings/profile')
    }

    const handlePassword = () => {
      router.push('/dashboard/settings/password')
    }

    return (
      <div>
        <h1>Settings</h1>
        <div className="flex gap-5">
          <div className="py-3">
            <button className="bg-yellow-300 rounded-sm p-3 text-black" onClick={handleProfile}>
              Check Profile
            </button>
          </div>
          <div className="py-3">
            <button className="bg-orange-300 rounded-sm p-3 text-black" onClick={handlePassword}>
              Check Password
            </button>
          </div>
        </div>
      </div>
  )
}

export default Settings;