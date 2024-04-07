'use client'

import { useRouter } from "next/navigation";

export default function BackLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const handleBack = () => {
      router.back()
    }

    return (
        <div className="py-3">
            { children }
            <button className="bg-blue-500 rounded-sm p-3" onClick={handleBack}>
              Back
            </button>
        </div>
    )
}