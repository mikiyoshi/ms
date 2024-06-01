import axios from "axios";
import React, { useEffect, useState } from "react";
import SidebarImage from "./SidebarImage";
// React Router
import { Link } from "react-router-dom";

export default function SideMenu() {
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
					<div className="mb-10">
						<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
							Categories
						</h2>
					</div>
					{/* text - end */}

					<div className="">
						{/* article - start */}

						{posts
							.filter((item) => [206, 218, 219, 122, 78].includes(item.id))
							.map((item, index) => (
								<>
									<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
										<div class="mx-auto max-w-screen-2xl">
											<div class="relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg">
												{/* image - start */}
												<SidebarImage key={index} post={item} />
												{/* image - end */}

												{/* overlay - start */}
												<div class="absolute inset-0 bg-slate-400 mix-blend-multiply"></div>
												{/* overlay - end */}

												{/* text start */}
												<div class="relative flex flex-col items-center p-4 sm:max-w-xl">
													<h2 className="text-xl font-bold text-white">
														<Link
															to={
																"/" +
																item.title.rendered
																	.toLowerCase()
																	.replace(/\s+/g, "-")
															}
															className="transition duration-100 hover:text-slate-500 active:text-slate-600"
														>
															{item.title.rendered}
														</Link>
													</h2>
												</div>
												{/* text end */}
											</div>
										</div>
									</div>
								</>
							))}
						{/* article - end */}
					</div>
				</div>
			</div>
		</>
	);
}
