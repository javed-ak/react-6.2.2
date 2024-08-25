import {useMemo, useState } from "react"


function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  // const [count, setCount] = useState(0);

  // This is the better approch in this condition ->
  
  let count = useMemo(() => {
    console.log("hello bacchooo")
    let finalCount = 0;
    for (let i=1; i<=inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);


  // You can also use "useEffect" Hook ->

  // useEffect(() => {
  //   let finalCount = 0;
  //   console.log("useEffect is called")
  //   for(let i=1; i<=inputValue; i++) {
  //     finalCount += i;
  //   }
  //   setCount(finalCount)
  // }, [inputValue])

  return (
    <>
      <input onChange={(e) => {
        setInputValue(e.target.value)
      }} placeholder="Find sum from 1 to n" />
      <div>Sum of 1 to {inputValue} is {count} </div>
      <button onClick={() => setCounter(counter + 1)}>Couner {counter}</button>
    </>
  )
}

export default App
