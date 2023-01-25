import { useState } from 'react'

function NameList(){
  const [list, setList] = useState(["jack", "jill", "john"]);
  const [name, setName] = useState('');

  const addName = () =>{
    setList([...list, name]);
  }

  return(
    <div>
      <ul>
        {list.map((name) =>(
          <li key={name}>
            {name}
          </li>
        ))}
      </ul>
      <input type="text"
       value={name}
       onChange={(e) => setName(e.target.value)}
       />
       <button
       onClick={addName}
       >
        addname
       </button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);

  function addOne(){
    setCount(count + 1)
  }

  return <div className="App">

    <button onClick={addOne}>Count = {count}</button>
  </div>
  
}
function App(){
  return (
    <div>
      <Counter/>
      <NameList/>
    </div>
  )
}

export default App
