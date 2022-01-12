import React, { useEffect } from "react";
import { useParams } from "react-router";
import Slider from "../components/Slider";
import { getService, services } from "../data";
import styled from "styled-components";
import { FiTool } from "react-icons/fi";

const SingleServicePage = () => {
	const { serviceId } = useParams();
	const service = getService(serviceId, services);

	useEffect(() => {
		document.title = `HERZIGS | Services - ${service.contentTitle}`;
	}, [serviceId, service.contentTitle]);

	return (
		<section className="services__outlet container">
			<h2>{service.contentTitle} </h2>
			<h3>{service.h3}</h3>
			{service.text.map((p, idx) => {
				return <p key={idx}>{p}</p>;
			})}
			{service.span &&
				service.span.map((p, idx) => {
					const { text, span } = p;
					return (
						<div key={idx}>
							<H4>{span}</H4>
							{text.map((p, index) => {
								return <p key={index}>{p}</p>;
							})}
						</div>
					);
				})}
			{service.list &&
				service.list.map((item, idx) => {
					return (
						<ul key={idx}>
							<Li>
								<Tool /> {item}
							</Li>
						</ul>
					);
				})}
			{service.ps && <p>{service.ps}</p>}
			{service.slides && <Slider data={service} section={service.id} />}
			{service.img && <Img src={service.img} alt={service.contentTitle} />}
		</section>
	);
};

const H4 = styled.h4`
	font-size: var(--fs-h3);
`;

const Tool = styled(FiTool)`
	font-size: var(--fs-p--card);
	color: var(--clr-primary-5);
`;

const Li = styled.li`
	margin-bottom: 0.5em;
	text-transform: capitalize;
`;

const Img = styled.img`
	margin-top: 2.5em;

	@media screen and (min-width: 992px) {
		& {
			margin-top: 4em;
		}
	}
`;
export default SingleServicePage;
