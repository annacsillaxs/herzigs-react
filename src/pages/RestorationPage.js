import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { restorationPage } from "../data";
import "./bgImages.css";
import Card from "../components/Card";
import styled from "styled-components";

const RestorationPage = () => {
	const { contentTitle, contentText, people } = restorationPage;

	useEffect(() => {
		document.title = "HERZIGS | Restoration";

		window.scrollTo(0, 0);
	}, []);

	return (
		<main id="restoration" className="restoration section">
			<Hero data={restorationPage} />

			<section className="restoration__content container">
				<h2 className="restoration__content-header">{contentTitle}</h2>
				<div className="restoration__content-text">
					{contentText.map((p, idx) => {
						return <p key={idx}>{p}</p>;
					})}
				</div>
				<div className="restoration__card">
					<Card data={people} section={"restoration"} />
				</div>
			</section>
			<Section className="restoration__bottom"></Section>
		</main>
	);
};

const Section = styled.section`
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 180px;
	width: 85%;
	max-width: 90vw;
	margin-inline: auto;

	@media screen and (min-width: 500px) {
		&.restoration__bottom {
			min-height: 260px;
		}
	}

	@media screen and (min-width: 800px) {
		& {
			min-height: 320px;
		}
	}
`;

export default RestorationPage;
