import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data }) => setProductList(data))
  }, [setProductList])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
