import { useEffect } from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { getProducts } from '../store/productSlice'
import StatusCode from '../utils/StatusCode'

const Product = () => {
  const { data, status } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    // fetch('https://fakestoreapi.com/products')
    //   .then(data => data.json())
    //   .then(result => setProducts(result))
  })

  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>
  }

  if (status === StatusCode.ERROR) {
    return <Alert key='danger' variant='danger'>Something went wrong! Please try again later</Alert>
  }

  const addToCart = (product) => {
    dispatch(add(product))
  }

  const cards = data.map(product => (
    <div
      className='col-md-3'
      key={product.id}
      style={{
        marginBottom: '10px',
      }}
    >
      <Card style={{ width: '18rem' }} className='h-100'>
        <div className='text-center'>
          <Card.Img
            variant='top'
            src={product.image}
            style={{
              width: '100px',
              height: '130px',
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: 'white' }}>
          <Button variant='primary' onClick={() => addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className='row'>
        {cards}
      </div>
    </>
  )
}

export default Product
