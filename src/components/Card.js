import React from "react";
import Button from "./Button";
import styled from "styled-components";

const Card = ({ data, section }) => {
	return (
		<>
			{data.map((person, idx) => {
				const { id, name, position, desc, img, btn } = person;
				return (
					<Article key={idx} className={`${section}__person person-card ${id}`}>
						<header className="person__header">
							<img src={img} alt={name} />
							<div className="person__desc-box">
								<H3>{name}</H3>
								<p>{position}</p>
							</div>
						</header>
						<div>
							{desc.map((p, i) => {
								return <Text key={i}>{p}</Text>;
							})}
						</div>
						{btn && <Button data={btn} />}
					</Article>
				);
			})}
		</>
	);
};

const Text = styled.p`
	font-family: var(--ff-sans-normal);
	font-size: var(--fs-p--card);
	line-height: 1.3;
	color: var(--clr-primary-9);
	max-width: 40ch;
`;

const H3 = styled.h3`
	margin-bottom: 0;
`;

const Article = styled.article`
	background-color: var(--clr-grey-10);
	border: 1px solid var(--clr-grey-9);
	border-radius: 7px;
	padding: 1em;
	box-shadow: var(--light-shadow);
	text-align: center;

	& .person__header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-bottom: 1em;
	}
	& .person__header img {
		height: 6rem;
		border-radius: 50%;
	}
	& .person__desc-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 1em;
	}
	& .person__desc-box p {
		color: var(--clr-primary-9);
		font-family: "Bellefair", serif;
	}

	@media screen and (min-width: 1000px) {
		& {
			padding-inline: 2.5em;
		}
		& .person__header {
			flex-direction: row;
		}

		& .person__desc-box {
			margin-left: 1em;
			text-align: start;
		}
	}
`;

export default Card;
