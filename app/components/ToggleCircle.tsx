"use client"

import { useState } from "react"

export default function ToggleCircle() {
    const [on, setOn] = useState<boolean>(false)
  return (
 <div className="flex justify-center items-center gap-2">
    <button
     type="button" 
     onClick={() => setOn(!on)}>
        {on ? 
            <p className="text-3xl text-lime-400 mb-1">●</p> 
            : 
            <p className="text-3xl text-zinc-400 mb-1">○</p>
        }
    </button>

    <p 
     className="
     text-zinc-400
    "
    >
     Remember Me
    </p>
 </div>
  )
}
