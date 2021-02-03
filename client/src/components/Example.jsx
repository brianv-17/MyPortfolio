import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
export default () => {

        return (
        <Fragment>
            <Navbar color="faded" light expand="md">

            <NavbarBrand >
                <h1>Welcome to my Porfolio</h1>
            </NavbarBrand>
            <Nav className="ml-auto" navbar>

                <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/about">More About Me</NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="https://github.com/brianv-17">Github</NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="https://www.linkedin.com/in/brian-eduardo-vazquez/">
                    Linkedin
                </NavLink>
                </NavItem>


            </Nav>
            </Navbar>
        </Fragment>
        );
}