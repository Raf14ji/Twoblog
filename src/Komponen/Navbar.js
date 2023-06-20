import { Button, Container, Nav, Navbar, Dropdown, ButtonGr, ButtonGroup} from "react-bootstrap"
import { useNavigate } from "react-router-dom"



export const NavigationBar = () => {
    return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> 
        <Container>
            <Navbar.Brand href="/home" className="fs-2 font-monospace fw-bold text-warning">TwoBlog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/olahraga" className="text-white fs-5 fw-medium">Olahraga</Nav.Link>
                    <Nav.Link href="/berita" className="text-white fs-5 fw-medium">Berita</Nav.Link>
                    <Nav.Link href="/cuaca" className="text-white fs-5 fw-medium">Cuaca</Nav.Link>
                    <Dropdown as={ButtonGroup}>
                        <Button variant="dark" className="fs-5 text-white">Kategori</Button>
                        <Dropdown.Toggle split variant="dark" id="dropdown-split-basic"/>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/berita">Berita Dunia</Dropdown.Item>
                            <Dropdown.Item href="/olahraga">Olahraga</Dropdown.Item>
                            <Dropdown.Item href="/cuaca">Cuaca</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/register"><Button variant="dark">SignUp</Button></Nav.Link>
                    <Nav.Link href="/login"><Button variant="light">Login</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>

)}
