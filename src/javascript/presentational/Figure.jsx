import React from "react";

const Figure = ({src, alt, text}) => (
	<figure>
		<img src={src} alt={alt} />
		<figurecaption>{text}</figurecaption>
	</figure>
);

export default Figure;