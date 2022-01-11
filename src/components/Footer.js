import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/herzigs.png";
import { footer } from "../data";
import styled from "styled-components";

const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<Section className="footer__box container">
				<div className="footer__logo">
					<img src={logo} alt="herzigs" className="footer-logo" />
				</div>
				{footer.map((el, idx) => {
					const { id, titleIcon, title, details } = el;

					return (
						<div className={`footer__${id}`} key={idx}>
							<Title>
								{titleIcon} {title}
							</Title>
							<ul>
								{details.map((li, idx) => {
									const { url, textIcon, text } = li;

									return (
										<li key={idx}>
											{url.includes("services") && (
												<StyledLink to={url}>
													{textIcon} {text}
												</StyledLink>
											)}
											{!url.includes("services") && url !== "" && (
												<ATag href={url} target="_blank" rel="noopener noreferrer">
													{textIcon} {text}
												</ATag>
											)}
											{url === "" && (
												<Item>
													{textIcon} {text}
												</Item>
											)}
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</Section>
			<Item className="footer__attribution">
				&copy; Copyright Herzigs 2022, Designed and Coded by{" "}
				<a href="http://annaseregi.me/" target="_blank" rel="noopener noreferrer">
					Anna Seregi
				</a>
			</Item>
		</footer>
	);
};

const Title = styled.h4`
	display: flex;
	align-items: center;
	text-transform: uppercase;
`;

const Section = styled.section`
	display: grid;
	grid-template-areas:
		"address"
		"contact"
		"opening"
		"services"
		"social"
		"logo";

	justify-content: space-evenly;
	padding-block: 3em;
	row-gap: 2em;
	background-color: transparent;

	@media screen and (min-width: 500px) {
		& {
			grid-template-areas:
				"logo services"
				"address services"
				"contact services"
				"opening social";
		}
	}

	@media screen and (min-width: 900px) {
		& {
			grid-template-areas:
				"logo address address services "
				"social contact opening services";
		}
	}
`;

const Item = styled.p`
	font-size: var(--fs-p--footer);
	color: inherit;
	margin-bottom: 0;
	line-height: 1.2;
`;

const ATag = styled.a`
	font-size: var(--fs-p--footer);
	color: inherit;
`;

const StyledLink = styled(Link)`
	font-size: var(--fs-p--footer);
	color: inherit;
`;

export default Footer;
