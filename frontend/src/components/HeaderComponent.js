import {Navbar, Nav, Container, NavDropdown, Badge, Form, Dropdown, DropdownButton, Button, InputGroup} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="bg-body-tertiary">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="/">Rugz By Q</Navbar.Brand>
                    </LinkContainer>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <InputGroup>
                                        <DropdownButton id="dropdown-basic-button" title="All">
                                            <Dropdown.Item>Abstract</Dropdown.Item>
                                            <Dropdown.Item>Cars</Dropdown.Item>
                                            <Dropdown.Item>Kids</Dropdown.Item>
                                            <Dropdown.Item>Sports</Dropdown.Item>
                                            <Dropdown.Item>Superheros</Dropdown.Item>
                                            <Dropdown.Item>TV Shows</Dropdown.Item>
                                            <Dropdown.Item>Video Games</Dropdown.Item>
                                        </DropdownButton>
                                        <Form.Control size="sm" type="text" placeholder="Search the Shop ..." />
                                        <Button variant="warning"><i className="bi bi-search text-dark"></i></Button>
                                    </InputGroup>
                                </Nav>
                                <Nav>
                                    <LinkContainer to="/admin/orders">
                                        <Nav.Link>Admin
                                            <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                                        </Nav.Link>
                                    </LinkContainer>
                                    <NavDropdown title="John Doe" id="collapsible-nav-dropdown">
                                        <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/user/my-orders">My Orders</NavDropdown.Item>
                                        <NavDropdown.Item eventKey="/user" as={Link} to="/user">My Profile</NavDropdown.Item>
                                        <NavDropdown.Item>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                    <LinkContainer to="/login">
                                        <Nav.Link>Login</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/register">
                                        <Nav.Link>Register</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/cart">
                                        <Nav.Link>
                                            <Badge pill bg="danger">2</Badge><i className="bi bi-cart3"></i><span className="ms-1">Cart</span>
                                        </Nav.Link>
                                    </LinkContainer>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
            </Navbar>
        );
    }

export default HeaderComponent;