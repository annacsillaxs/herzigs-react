import React, { useEffect } from "react";
import { people, aboutPage } from "../data";
import "./bgImages.css";
import Hero from "../components/Hero";
import Card from "../components/Card";
import styled from "styled-components";

const AboutPage = () => {
	const { contentText, contentTitle, managementTitle } = aboutPage;

	useEffect(() => {
		document.title = "HERZIGS | About";
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="about section" id="about">
			<Hero data={aboutPage} />

			<section className="about__content container">
				<h2>{contentTitle}</h2>
				{contentText.map((p, idx) => {
					return <p key={idx}>{p}</p>;
				})}
			</section>

			<section className="about__management container">
				<h2>{managementTitle}</h2>
				<Container className="about__cards-container">
					<Card data={people} section={"about"} />
				</Container>
			</section>
		</main>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-areas: "jon" "alex" "steve" "daniel";
	grid-template-columns: 1fr;
	gap: 1em;
	row-gap: 2.5em;
	margin-top: 2em;

	& .about__person.jon {
		grid-area: "jon";
	}
	& .about__person.alex {
		grid-area: "alex";
	}
	& .about__person.steve {
		grid-area: "steve";
	}
	& .about__person.daniel {
		grid-area: daniel;
	}

	@media screen and (min-width: 750px) {
		& {
			grid-template-areas: "jon alex" "steve daniel";
			grid-template-columns: repeat(2, 1fr);
		}
	}
`;

export default AboutPage;
