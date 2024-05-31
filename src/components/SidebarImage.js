import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

export default function SidebarImage({ post }) {
	console.log(post);
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
		<>
			<img
				src={featuredImage}
				loading="lazy"
				alt={post.title.rendered}
				class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
			/>
		</>
	);
}
