import React, { useEffect } from "react";
import Hero from "../components/Hero";
import StyledToolbar from "../components/StyledToolbar";
import { Outlet } from "react-router";
import { partnershipPage, partnership } from "../data";
import "./bgImages.css";
import styled from "styled-components";

const PartnershipPage = () => {
	const { contentText } = partnershipPage;

	useEffect(() => {
		document.title = `HERZIGS | Partnership`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<main id="partnership" className="partnership section">
			<Hero data={partnershipPage} />

			<section className="partnership__content container">
				<H3>{contentText}</H3>
				<StyledToolbar data={partnership} />
			</section>

			<Outlet />
		</main>
	);
};

const H3 = styled.h3`
	margin-bottom: 2em;
`;

export default PartnershipPage;
