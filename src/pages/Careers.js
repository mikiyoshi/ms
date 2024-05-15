import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Careers({ post }) {
	const [featuredImage, setFeaturedimage] = useState();

	const getImage = () => {
		axios.get(post?._links["wp:featuredmedia"][0]?.href).then((response) => {
			setFeaturedimage(response.data.source_url);
		});
	};

	useEffect(() => {
		getImage();
	}, []);

	return (
		<div class="container">
			<h1>Careers</h1>
		</div>
	);
}
