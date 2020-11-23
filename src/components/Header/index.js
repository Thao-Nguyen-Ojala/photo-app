import React from "react"
import { NavLink } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"
import "./Header.scss"

Header.propTypes = {};

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header_link header_title"
                            href="https://www.oikotie.fi/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Thao Nguyen Ojala
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header_link"
                            to="/photos"
                            activeClassName="header_link--active"
                        >
                            React Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
