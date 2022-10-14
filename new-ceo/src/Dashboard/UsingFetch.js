import React, { useEffect, useState } from "react"



const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
        <h5 className="client">Clients Data</h5>
      {users.length > 0 && (
        <ol>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default UsingFetch