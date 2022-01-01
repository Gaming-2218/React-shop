import { useEffect, useState } from "react"

const useGetProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    fetch("http://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(result => {
        setProducts(result)
        console.log(result)
      })
      .catch(error => console.log('error', error))
  }, [])

  return products
}

export default useGetProducts