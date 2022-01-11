import React, { useEffect } from "react";
import Card from "../components/Card";
import Slider from "../components/Slider";
import { partnership } from "../data";
import { useParams } from "react-router";
import { getService } from "../data";
import styled from "styled-components";

const PartnerPage = () => {
	const { partnerId } = useParams();
	const partner = getService(partnerId, partnership);
	console.log(partner);

	useEffect(() => {
		document.title = `HERZIGS | Partnership - ${partner.contentTitle}`;
		window.scrollTo(0, 320);
	}, [partner]);

	return (
		<section id="partner" className="partner section">
			<section className="partner__content container">
				<h2 className="partner__content-header">{partner.contentTitle}</h2>
				<div className="partner__content-text">
					{partner.contentText.map((p, idx) => {
						return <p key={idx}>{p}</p>;
					})}
					{partner.links &&
						partner.links.map((item, idx) => {
							return (
								<Link href={item.url} target="_blank" rel="noopener noreferrer" key={idx}>
									{item.text}
									{item.textIcon}
								</Link>
							);
						})}
				</div>

				<div className="partner__card">
					<Card data={partner.people} section={"partnership"} />
				</div>
			</section>

			<Slider data={partner} section={"partner"} person={partner.id} />
		</section>
	);
};

const Link = styled.a`
	display: flex;
	align-items: baseline;
	justify-self: flex-start;
	font-size: var(--fs-p);
	color: var(--clr-primary-10);
	border-bottom: 1px solid;
	width: max-content;
	margin-bottom: 0.5em;

	svg {
		margin-left: 0.25em;
		color: red;
	}
`;

export default PartnerPage;
