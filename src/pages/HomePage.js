import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { homePage } from "../data";
import Slider from "../components/Slider";
import styled from "styled-components";

const HomePage = () => {
	const { contentText } = homePage;

	useEffect(() => {
		document.title = "HERZIGS | Home";
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="home" id="home">
			<Hero data={homePage} />

			<Section className="home__content">
				<Text>{contentText}</Text>
			</Section>

			<Slider data={homePage} section={"home"} />
		</main>
	);
};

const Text = styled.p`
	padding-block: 1em;
	max-width: 50ch;
	border-top: 2px solid var(--clr-grey-10);
	border-bottom: 2px solid var(--clr-grey-10);
	line-height: 1.4;
`;

const Section = styled.section`
	padding: 1em;
	display: flex;
	justify-content: center;
	text-align: center;
`;

export default HomePage;
