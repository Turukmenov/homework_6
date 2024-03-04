import React from "react"
import { useRef, useEffect, useState } from "react"

export default function App() {
//ПРИМЕР С USEREF
  const inputRef = useRef(null)
  const focusInput = () => {
    inputRef.current.focus()
  }

//ПРИМЕР С USEEFFECT
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  return (
    <div>
      <div style={{display: "flex", justifyContent: "center", marginTop: "200px"}}>
        {}
        <input type="text" ref={inputRef} />
        {}
        <button style={{backgroundColor: "#b781f3", border: "none", width: "120px", borderRadius: "10px", color: "white", fontSize: "16px"}} onClick={focusInput}>Фокус на поле ввода</button>
      </div>

      <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
        <h2>Текущее время:</h2>
        <h2>{currentTime.toLocaleTimeString()}</h2>
      </div>
    </div>
  )
}
