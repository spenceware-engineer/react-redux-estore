import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBarPanel = () => {
  const cartProducts = useSelector(state => state.cart)

  return (
    <Navbar className="bg-light" expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>Redux Toolkit</Navbar.Brand>
        <Nav>
          <Nav.Link to='/' as={Link}>Products</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <Nav.Link to='/cart' as={Link}>My Bag {cartProducts.length}</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarPanel
