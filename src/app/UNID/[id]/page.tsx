import React from 'react'

interface PageProps {
    params: {
        id:string
    }
}

const page = ({params}: PageProps) => {
  return (
    <h1>el id es: {params.id}</h1>
  )
}

export default page