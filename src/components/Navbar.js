import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../images/herzigs.jpeg";
import { links } from "../data";
import styled from "styled-components";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};
	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;

		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);

	return (
		<Nav className="nav" id="nav">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="herzigs" className="logo" />
					<button className="nav-toggle" onClick={toggleLinks}>
						<FaBars className="react-icons" />
					</button>
				</div>
				<div className="links-container" ref={linksContainerRef}>
					<ul className="links" ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;

							return (
								<LinkItem exact activeClassName="active" to={url} key={id} onClick={toggleLinks}>
									{text}
								</LinkItem>
							);
						})}
						<li className="nav__contact">
							{" "}
							<a href="#footer" onClick={toggleLinks}>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</Nav>
	);
};

const Nav = styled.nav`
	position: fixed;
	width: 100%;
	z-index: 500;
	background: var(--clr-white);
	border-bottom: 2px solid var(--clr-primary-10);

	.nav-center {
		display: flex;
		flex-direction: column;
		width: 90vw;
		max-width: var(--max-width);
		margin-inline: auto;
	}
	.nav-header {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: 1rem;
	}
	.nav-toggle {
		font-size: 1.5rem;
		color: var(--clr-primary-5);
		background: transparent;
		border-color: transparent;
		transform: rotate(0deg);
		transition: var(--transition);
		cursor: pointer;
	}
	.nav-toggle:hover {
		color: var(--clr-primary-10);
		transform: rotate(90deg);
	}
	.logo {
		height: 60px;
	}

	.nav__contact {
		padding: 0.5rem 1rem;

		color: var(--clr-grey-6);
		font-size: var(--fs-nav);
		text-transform: capitalize;
		font-weight: 500;
		letter-spacing: var(--spacing);
		display: block;
		transition: var(--transition);
	}
	.nav__contact:hover {
		background: transparent;
		color: var(--clr-primary-5);
	}

	.links-container {
		height: 0;
		overflow: hidden;
		transition: var(--transition);
		/* display: none; */
	}
	.links {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.show-container {
		height: 10rem;
	}

	@media screen and (min-width: 800px) {
		.nav__contact {
			padding: 0;
			margin: 0 0.5rem;
		}

		.nav-center {
			margin: 0 auto;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
		.nav-toggle {
			display: none;
		}
		.links-container {
			height: auto !important;
		}
		.links {
			display: flex;
			flex-direction: row;
		}
	}
`;

const LinkItem = styled(NavLink)`
	padding: 0.5rem 0.2rem;
	color: var(--clr-grey-6);
	font-size: var(--fs-nav);
	text-transform: capitalize;
	font-weight: 500;
	letter-spacing: var(--spacing);
	display: block;
	transition: var(--transition);

	&:hover {
		background: transparent;
		color: var(--clr-primary-5);
	}

	&.active {
		color: var(--clr-primary-5);
		border-bottom: 2px solid var(--clr-primary-5);
	}

	&.active:hover {
		color: var(--clr-grey-6);
		border-bottom: 2px solid var(--clr-grey-6);
	}

	@media screen and (min-width: 800px) {
		padding: 0;
		margin: 0 0.5rem;
	}
`;

export default Navbar;
