import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

export default function Services({ post }) {
	const [featuredImage, setFeaturedimage] = useState();

	const getImage = useCallback(() => {
		axios
			.get(post?._links["wp:featuredmedia"][0]?.href)
			.then((response) => {
				setFeaturedimage(response.data.source_url);
			})
			.catch((error) => console.log(error));
	}, [post]); // post が変更された場合にのみ getImage を再生成

	useEffect(() => {
		getImage();
	}, [getImage]);

	return (
		<div class="container">
			<h1>Services</h1>
			<img src={featuredImage} alt={post.title.rendered} class="mask" />
		</div>
	);
}
