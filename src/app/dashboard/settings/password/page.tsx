'use client'

import { useRouter } from "next/navigation";

function Password() {

  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div>
      <h1>Password</h1>  

      <div className="py-3">
          <button className="bg-blue-500 rounded-sm p-3" onClick={handleBack}>
            Back
          </button>
      </div>
    </div>
  )
}

export default Password;