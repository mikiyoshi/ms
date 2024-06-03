import React from "react";
// React Router
import { Link } from "react-router-dom";

const categories = [
	{
		category: "Home",
		description: "",
		href: "/",
		img: "http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/girl_in_coloring_letter_a_with_red_on_kitchen_table-scopio-11a0e6d0-04ae-4a12-8788-ce48c1b5a343.jpg",
	},
	{
		category: "Services",
		description: "",
		href: "",
		img: "https://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2022/12/kids61-400x200.jpg",
	},
	{
		category: "About Us",
		description: "",
		href: "",
		img: "https://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/boy_playing_play_dough-scopio-6eeab8aa-3a2d-4f08-9988-ddb71a0a044c-400x200.jpg",
	},
	{
		category: "Contact",
		description: "",
		href: "",
		img: "https://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2022/11/kids16-400x200.jpg",
	},
	// {
	// 	category: "Career",
	// 	description: "",
	// href: "/",
	// 	img: "https://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2022/11/kids21-400x200.jpg",
	// },
];

export default function SideMenu() {
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

						{categories.map((item) => (
							<>
								<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
									<div class="mx-auto max-w-screen-2xl">
										<div class="relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg">
											{/* image - start */}
											<img
												src={item.img}
												loading="lazy"
												alt={item.category}
												class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
											/>
											{/* image - end */}

											{/* overlay - start */}
											<div class="absolute inset-0 bg-slate-400 mix-blend-multiply"></div>
											{/* overlay - end */}

											{/* text start */}
											<div class="relative flex flex-col items-center p-4 sm:max-w-xl">
												<h2 className="text-xl font-bold text-white">
													{item.category === "Home" ? (
														<Link
															to="/"
															className="transition duration-100 hover:text-slate-500 active:text-slate-600"
														>
															{item.category}
														</Link>
													) : (
														<Link
															to={
																"/" +
																item.category.toLowerCase().replace(/\s+/g, "-")
															}
															className="transition duration-100 hover:text-slate-500 active:text-slate-600"
														>
															{item.category}
														</Link>
													)}
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
