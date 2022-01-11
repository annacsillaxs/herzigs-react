import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const List = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	text-align: center;
`;

const Section = styled.section`
	width: 90%;
	margin: 0 auto;
	max-width: var(--max-width);
	background-color: var(--clr-white);
`;

const LinkItem = styled(NavLink)`
	margin-block: 0.25em;
	padding-inline: 0.3em;

	color: var(--clr-grey-6);
	font-size: var(--fs-h4);
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
		& {
			padding-bottom: 0.25em;
		}
	}
`;

const StyledToolbar = ({ data, id, services }) => {
	return (
		<Section>
			{services === true && <h3>What we can do for you?</h3>}
			<List className="links toolbar">
				{data.map((item, index) => {
					return (
						<LinkItem exact activeClassName="active" to={item.id} key={index}>
							{item.contentTitle}
						</LinkItem>
					);
				})}
			</List>
		</Section>
	);
};

export default StyledToolbar;
