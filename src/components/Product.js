import React from 'react'
import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'

function Product() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)
  let check = true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch("https://fakestoreapi.com/products")
      if (check) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
        console.log(filter)
      }
      return () => {
        check = false

      }

    }
    getProducts()

  },
    [])

  const Loading = () => {
    return (
      <>
        <div className='col-md-3'>
          <Skeleton height={350} />

        </div>
      </>
    )

  }
  const filterProduct=(cat)=>{
    const updatedList=data.filter((x)=>x.category===cat)
    setFilter(updatedList)

  }

  const ShowProduct = () => {
    return (
      <>
        <div className='buttons d-flex  justify-content-center mb-4 pb-4'>
          <button className='btn btn-outline-dark me-2 ' onClick={() => setFilter(data)}>Hepsi</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Erkek Kıyafetleri</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Kadın Kıyafetleri</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct( "jewelery")}>Takılar</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Elektronik</button>



        </div>
        {filter.map((product) => {
          return (
            <>
              <div className='col-md-3 mb-4'>
                <div className="card h-100 text-center p-4  " key={product.id} >
                  <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                  <div className="card-body">
                    <h5 className="card-title">{product.title.substring(0, 12)}......</h5>
                    <p className="card-text lead fw-bold">{product.price} $</p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Satın Al</NavLink>
                  </div>
                </div>

              </div>
            </>
          )
        })}
      </>
    )

  }

  return (
    <div className='container my-4 py-4'>
      <div className='row'>
        <div className='col-12 mb-5 '>
          <h1 className='display-6 fw-bolder text-center'>Ürünler</h1>
          <hr />

        </div>

      </div>
      <div className='row justify-content-center'>
        {loading ? <Loading /> : <ShowProduct />}

      </div>


    </div>

  )
}

export default Product