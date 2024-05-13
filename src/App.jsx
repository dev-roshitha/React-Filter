import { useState, useEffect

 } from "react"
import "./sass/main.scss"
import { Users } from "./users"

const App = () => {

  const [query, setQuery] = useState("")

  useEffect(() => {
    console.log(query)
  }, [query])

  return(
    <div className="app">
      <div className="item-wrapper">
        <input type="text"
              placeholder="Search..."
              className="search"
              onChange={(e => setQuery(e.target.value))}/>
        <ul className="list">
          {Users.filter((user) =>
            user.first_name.toLowerCase().includes(query)).map((user) => (
            <li key={user.id} className="list-item">
              {user.first_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;