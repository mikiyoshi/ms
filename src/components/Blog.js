import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import "./blog.css";
import ContactForm from "./ContactForm";
import Sidebar from "./Sidebar";

export default function Blog({ post }) {
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
			<div class="bg-white">
				<div class="mx-auto max-w-screen-2xl">
					<section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
						{/* image - start */}
						<img
							src={featuredImage}
							loading="lazy"
							alt={post.title.rendered}
							class="absolute inset-0 h-full w-full object-cover object-center"
						/>
						{/* image - end */}

						{/* overlay - start */}
						<div class="absolute inset-0 bg-slate-400 mix-blend-multiply"></div>
						{/* overlay - end */}

						{/* text start */}
						<div class="relative flex flex-col items-center p-4">
							<h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
								{post.title.rendered}
							</h1>
						</div>
						{/* text end */}
					</section>
				</div>
			</div>
			<div className="bg-white pb-6 sm:pb-8 lg:py-12 px-4 md:px-8">
				<div class="blog-container">
					<div
						className="blog-excerpt"
						dangerouslySetInnerHTML={{ __html: post.content.rendered }}
					></div>
					<Sidebar />
					<ContactForm />
				</div>
			</div>
		</>
	);
}
