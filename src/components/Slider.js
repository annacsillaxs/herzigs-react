import React, { useState, useEffect } from "react";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import Button from "../components/Button";
import styled from "styled-components";

const SliderBox = styled.section`
	width: 100%;
	display: grid;
	grid-template-areas: "left slides right";
	grid-template-columns: 1fr 70% 1fr;
	align-items: stretch;
	background-color: transparent;
	margin-top: 2em;

	& .arrow-left {
		grid-area: left;
		place-self: center;
	}

	& .arrow-right {
		grid-area: right;
		place-self: center;
	}

	& .slider-card {
		grid-area: slides;
		transform: translateX(0);
		z-index: 0;
		opacity: 0;
		transition: var(--transition);
		display: flex;
		flex-direction: column;
	}

	& .activeSlide {
		transform: translateX(0);
		opacity: 1;
		z-index: 1;
	}
	& .rightSlide {
		transform: translateX(100%);
		opacity: 0;
		z-index: 0;
	}
	& .leftSlide {
		transform: translateX(-100%);
		opacity: 0;
		z-index: 0;
	}
`;

const Title = styled.h3`
	color: var(--clr-white);
`;

const Text = styled.p`
	color: var(--clr-white);
	font-size: var(--fs-p--slider);
	max-width: 60ch;
`;

const Article = styled.article`
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	display: flex;
	min-height: 400px;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-weight: 300;

	.home__slider & {
		background-size: cover;
		min-height: 200px;
	}

	&.slider__slogan span {
		font-family: "Cormorant Upright", serif;
		display: block;
		line-height: 2;
		color: yellow;
	}

	@media screen and (min-width: 800px) {
		.home__slider & {
			min-height: 350px;
		}
	}
`;

const Slider = ({ data, section, person }) => {
	const [index, setIndex] = useState(0);
	const { slides } = data;

	useEffect(() => {
		const prevIndex = slides.length - 1;

		if (index < 0) {
			setIndex(prevIndex);
		}
		if (index > slides.length - 1) {
			setIndex(0);
		}
	}, [index, slides, slides.length]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 3000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);
	return (
		<SliderBox className={`${section}__slider`}>
			<MdOutlineArrowBackIos className="react-icons--lg arrow-left" onClick={() => setIndex(index - 1)} />
			<MdOutlineArrowForwardIos className="react-icons--lg arrow-right" onClick={() => setIndex(index + 1)} />

			{slides.map((slide, idx) => {
				const { id, icons, title, span, text, btn } = slide;

				let position = "";
				if (idx === index) {
					position = "activeSlide";
				}
				if (idx === index - 1 || (index === 0 && idx === slides.length - 1)) {
					position = "leftSlide";
				}
				if (idx === index + 1 || (index === slides.length - 1 && idx === 0)) {
					position = "rightSlide";
				}

				return (
					<Article className={`${position} slider__${id} slider-card  ${person}`} key={idx}>
						<Title>
							{icons && icons}
							{title} <span>{span}</span>
						</Title>
						{text && <Text>{text}</Text>}
						{btn && <Button data={slide} />}
					</Article>
				);
			})}
		</SliderBox>
	);
};

export default Slider;
