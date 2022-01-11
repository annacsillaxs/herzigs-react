import React from "react";

const Lists = ({ data, section }) => {
	console.log(data);
	return (
		<>
			{data.map((el, idx) => {
				const { id, titleIcon, title, details } = el;

				return (
					<div className={`${section}__${id}`} key={idx}>
						<h4>
							{titleIcon} {title}
						</h4>
						<ul>
							{details.map((li, idx) => {
								const { url, textIcon, text } = li;
								return (
									<li key={idx}>
										<a href={url} target="_blank" rel="noopener noreferrer">
											{textIcon} {text}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</>
	);
};

export default Lists;
