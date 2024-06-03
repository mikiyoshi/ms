import axios from "axios";
import React, { useEffect, useState } from "react";
import SidebarImage from "./SidebarImage";
// React Router
import { Link } from "react-router-dom";

export default function Sidebar() {
	const [posts, setPosts] = useState([]);

	const fetchPosts = () => {
		axios
			.get(
				"//mindfulseeds.torontosharehouse.com/wp/wp-json/wp/v2/posts/?per_page=100"
			)
			.then((res) => {
				setPosts(res.data);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<>
			<div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					{/* text - start */}
					<div className="mb-10 md:mb-16">
						<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
							Services
						</h2>
					</div>
					{/* text - end */}

					<div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
						{/* article - start */}

						{posts
							.filter((item) => ![206, 218, 219, 122, 78].includes(item.id))
							.map((item, index) => (
								<div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
									<Link
										to={
											"/" +
											item.title.rendered.toLowerCase().replace(/\s+/g, "-")
										}
										className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
									>
										<SidebarImage key={index} post={item} />
									</Link>

									<div className="flex flex-col gap-2">
										{/* <span className="text-sm text-gray-400">July 19, 2021</span> */}

										<h2 className="text-xl font-bold text-gray-800">
											<Link
												to={
													"/" +
													item.title.rendered.toLowerCase().replace(/\s+/g, "-")
												}
												className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
											>
												{item.title.rendered}
											</Link>
										</h2>

										<div
											className="text-gray-500 line-clamp-3"
											dangerouslySetInnerHTML={{
												__html: item.content.rendered,
											}}
										></div>

										<div>
											<Link
												to={
													"/" +
													item.title.rendered.toLowerCase().replace(/\s+/g, "-")
												}
												className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
											>
												Read more
											</Link>
										</div>
									</div>
								</div>
							))}
						{/* article - end */}
					</div>
				</div>
			</div>
		</>
	);
}
