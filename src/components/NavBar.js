import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../img/pinky.jpg';
import git from '../img/github.jpg';
import ReactTypewriterEffect from 'react-typewriter-effect';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = value => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon">Crystal Sabado();</span>
                </Navbar.Toggle>
                <div className="hello">
                    <span>Hello World, I’m </span>
                </div>
                <div className="crystal">
                    <ReactTypewriterEffect
                        textStyle={{
                            fontWeight: 700,
                            fontSize: '60px',
                            color: 'white',
                        }}
                        startDelay={0.3}     
                        cursorColor="#FFF48E"  
                        multiText={['Crystal Jade Sabado']} 
                        typeSpeed={300}        
                        deleteSpeed={50}               
                    />
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('about')}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('contact')}
                        >
                            Contact
                        </Nav.Link>
                        <Nav.Link
                            href="#portfolio"
                            className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('portfolio')}
                        >
                            Portfolio
                        </Nav.Link>
                        <Nav.Link
                            href="#service"
                            className={activeLink === 'service' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('service')}
                        >
                            Service
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#">
                                <img src={logo} alt="my icon" />
                            </a>
                        </div>
                        <div className="connect-button">
                            <button className="vvd" onClick={() => window.location.href = "https://github.com/kristal-cy"}>
                                <span>Explore More</span>
                            </button>
                        </div>
                    </span>
                    <span className="github">
                        <div className="github-logo">
                            <a href="https://github.com/kristal-cy">
                                <img src={git} alt="my github" />
                            </a>
                        </div>
                    </span>

                    <div className="cap">
                        <span>A 2nd Year IT student at PHINMA-University of Pangasinan. I am a </span>
                        <span>passionate yet delightfully lazy developer and designer who values </span>
                        <span>efficiency above all. </span>
                    </div>
                    <div className="welcome">
                        <span>Welcome to My personal website. 👋🏻</span>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
