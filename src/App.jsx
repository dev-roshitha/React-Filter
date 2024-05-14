import { useState, useEffect } from "react"
import Table from "./Table"
import "./sass/main.scss"
import { Users } from "./users"

const App = () => {

  const [query, setQuery] = useState("")

  useEffect(() => {
    console.log(query)
  }, [query])

  const search = (data) => {
    return data.filter((item) => item.first_name.toLowerCase().includes(query))
  }

  return(
    <div className="app">
      <div className="item-wrapper">
        <input type="text"
          placeholder="Search..."
          className="search"
          onChange={(e => setQuery(e.target.value.toLowerCase()))}/>
        <Table data={search(Users)}/>
      </div>
    </div>
  )
}

export default App;