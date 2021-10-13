import { NextPage } from 'next'
import React from 'react'
import useSWR from 'swr'


// const fetcher = async () => {
//   const _: any[] = [];
//   const usersCollection = collection(db, 'users')
//   const docs = await getDocs(usersCollection)
//   docs.forEach((doc) => _.push(doc.data()))
//   console.log('___: ', _)
//   return _
// };


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