import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
	grid-area: hero;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	min-height: 180px;
	position: relative;

	&.home__hero {
		background-position: left;
	}

	&.about__hero {
		background-position: left;
		justify-content: flex-end;
	}

	&.about__hero h1 {
		max-width: 7ch;
	}

	&.partnership__hero::after,
	&.services__hero::after {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: rgba(0, 0, 0, 0.3);
	}

	@media screen and (min-width: 500px) {
		& {
			min-height: 260px;
		}
	}

	@media screen and (min-width: 800px) {
		& {
			min-height: 320px;
		}
	}
`;

const Hero = ({ data, service, index, title }) => {
	const { id, heroTitle } = data;

	return (
		<HeroSection className={`${id}__hero ${service}`}>
			{service === undefined && heroTitle && <h1>{heroTitle}</h1>}
			{service && <h1>{title[index].contentTitle}</h1>}
		</HeroSection>
	);
};

export default Hero;
