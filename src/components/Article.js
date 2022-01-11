import React from "react";

const Article = ({ details }) => {
	return (
		<article className={`${position} slider__${section.id} slider-card`} key={idx}>
			<h2>
				{icons && icons}
				{title} <span>{span}</span>
			</h2>
			{text && <p>{text}</p>}
			{btn && <Button text={details[0].sections2} />}
		</article>
	);
};

export default Article;
