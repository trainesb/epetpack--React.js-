import React from "react";

const Figure = ({src, alt, text}) => (
	<figure>
		<img src={src} alt={alt} />
		<figcaption>{text}</figcaption>
	</figure>
);

export default Figure;