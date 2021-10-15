import { NextPage } from 'next'
import React from 'react'
import useSWR from 'swr'

const fetcher = () => fetch('/api/hello').then((res) => res.json())

const User: NextPage = () => {
  const { data, error } = useSWR('/api/hello', fetcher)

  if (error) return <h1>{error}</h1>
  if (!data) return <div>loading...</div>

  console.log('data: ', data)
  return (
    <div>
      <h1>User Page</h1>
      <main>
        <div>
          <p>UserList</p>
          {JSON.stringify(data.name)}
        </div>
      </main>
    </div>
  )
}

export default User