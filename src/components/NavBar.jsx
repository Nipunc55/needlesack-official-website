/** @format */

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';


export default function NavBar() {
	return (
		<div>
			{' '}
			<Navbar expand='lg' className={styles.navBar}>
				<Container fluid>
					<Navbar.Brand href='#'>NeedlSack</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse className={styles.navContainer}    id='navbarScroll'>
					<Nav className={`${styles.navSubContainer} me-auto my-2 my-lg-0`} style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link className={styles.NavLink}  href='#action1'>Home</Nav.Link>
                    <Nav.Link className={styles.NavLink}  href='#action2'>Products</Nav.Link>
                    <Nav.Link className={styles.NavLink}  href='#'>
                      ContactUS
                    </Nav.Link>
             </Nav>

					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
