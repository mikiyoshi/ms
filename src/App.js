import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Link,
} from "react-router-dom";
import axios from "axios";
import Blog from "./components/Blog";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

const App = () => {
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
			<Router>
				<div class="bg-white lg:pb-4">
					<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
						{/* text - start */}
						<div class="mb-4 md:mt-10">
							{/* logo - start */}
							<div class="text-center">
								<Link
									to="/"
									class="inline-flex justify-center items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
									aria-label="mindfulseeds.ca"
								>
									<img
										src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2022/11/mindfulseeds.ca-b.png"
										alt="mindfulseeds.ca"
										className="w-1/3"
									/>
								</Link>
							</div>
							{/* logo - end */}
						</div>
						{/* text - end */}
					</div>
				</div>
				<div class="bg-slate-100">
					<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
						<header class="flex items-center justify-between">
							{/* nav - start */}
							<nav class="hidden lg:flex mx-auto">
								<NavLink
									to="/"
									className="text-lg font-semibold text-gray-600 transition duration-100 border-slate-100 border-b-4 hover:border-secondary-500 hover:border-b-4 active:bg-secondary-200 focus:bg-secondary-200 focus:border-b-4 py-4 md:py-4 px-4 md:px-4"
								>
									Home
								</NavLink>
								<NavLink
									to="/about-us"
									className="text-lg font-semibold text-gray-600 transition duration-100 border-slate-100 border-b-4 hover:border-secondary-500 hover:border-b-4 active:bg-secondary-200 focus:bg-secondary-200 focus:border-b-4 py-4 md:py-4 px-4 md:px-4"
								>
									About Us
								</NavLink>
								<div className="relative group">
									<NavLink
										to="/services"
										className="inline-flex items-center gap-1 text-lg font-semibold text-gray-600 transition duration-100 border-slate-100 border-b-4 hover:border-secondary-500 hover:border-b-4 active:bg-secondary-200 focus:bg-secondary-200 focus:border-b-4 py-4 md:py-4 px-4 md:px-4"
									>
										Services
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5 text-gray-800"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</NavLink>
									<div class="absolute right-0 w-48 bg-white rounded shadow-lg z-10 hidden group-hover:block">
										<div className="absolute right-0 w-80 bg-white rounded shadow-lg z-10">
											<NavLink
												to="/behavioural-consultation-services"
												className="font-semibold block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-500"
												style={({ isActive }) => {
													return isActive
														? { "background-color": "#c5e1f1" }
														: {};
												}}
											>
												Behavioural Consultation Services
											</NavLink>
											<NavLink
												to="/in-home-behavioural-intervention-services"
												className="font-semibold block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-500"
												style={({ isActive }) => {
													return isActive
														? { "background-color": "#c5e1f1" }
														: {};
												}}
											>
												In-home Behavioural Intervention Services
											</NavLink>
											<NavLink
												to="/emotional-awareness-and-regulation-program"
												className="font-semibold block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-500"
												style={({ isActive }) => {
													return isActive
														? { "background-color": "#c5e1f1" }
														: {};
												}}
											>
												Emotional Awareness and Regulation Program
											</NavLink>
											<NavLink
												to="/workshop-training"
												className="font-semibold block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-500"
												style={({ isActive }) => {
													return isActive
														? { "background-color": "#c5e1f1" }
														: {};
												}}
											>
												Workshop Training
											</NavLink>
											<NavLink
												to="/social-skills-training"
												className="font-semibold block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-500"
												style={({ isActive }) => {
													return isActive
														? { "background-color": "#c5e1f1" }
														: {};
												}}
											>
												Social Skills Training
											</NavLink>
											<NavLink
												to="/parent-and-caregiver-training"
												className="font-semibold block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-500"
												style={({ isActive }) => {
													return isActive
														? { "background-color": "#c5e1f1" }
														: {};
												}}
											>
												Parent and Caregiver Training
											</NavLink>
											<NavLink
												to="/1-1-aba-in-home-therapy"
												className="font-semibold block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-500"
												style={({ isActive }) => {
													return isActive
														? { "background-color": "#c5e1f1" }
														: {};
												}}
											>
												1-1 ABA In-home Therapy
											</NavLink>
										</div>
									</div>
								</div>
								{/* <NavLink
									to="/careers"
									className="text-lg font-semibold text-gray-600 transition duration-100 border-slate-100 border-b-4 hover:border-secondary-500 hover:border-b-4 active:bg-secondary-200 focus:bg-secondary-200 focus:border-b-4 py-4 md:py-4 px-4 md:px-4"
								>
									Careers
								</NavLink> */}
								<NavLink
									to="/contact"
									className="text-lg font-semibold text-gray-600 transition duration-100 border-slate-100 border-b-4 hover:border-secondary-500 hover:border-b-4 active:bg-secondary-200 focus:bg-secondary-200 focus:border-b-4 py-4 md:py-4 px-4 md:px-4"
								>
									Contact
								</NavLink>
							</nav>
							{/* nav - end */}
						</header>
					</div>
				</div>
				<div class="bg-white pb-6 sm:pb-8 lg:py-12">
					<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route path="/about-us" element={<AboutUs />}></Route>
							<Route path="/services" element={<Services />}></Route>
							{posts.map((item, index) =>
								item.id === 122 ? (
									<Route
										path={`/careers`}
										element={<Blog key={index} post={item} />}
									/>
								) : item.id === 78 ? (
									<Route
										path={`/contact`}
										element={<Blog key={index} post={item} />}
									/>
								) : item.id === 227 ? (
									<Route
										path={`/behavioural-consultation-services`}
										element={<Blog key={index} post={item} />}
									/>
								) : item.id === 229 ? (
									<Route
										path={`/in-home-behavioural-intervention-services`}
										element={<Blog key={index} post={item} />}
									/>
								) : item.id === 231 ? (
									<Route
										path={`/emotional-awareness-and-regulation-program`}
										element={<Blog key={index} post={item} />}
									/>
								) : item.id === 233 ? (
									<Route
										path={`/workshop-training`}
										element={<Blog key={index} post={item} />}
									/>
								) : item.id === 77 ? (
									<Route
										path={`/social-skills-training`}
										element={<Blog key={index} post={item} />}
									/>
								) : item.id === 76 ? (
									<Route
										path={`/parent-and-caregiver-training`}
										element={<Blog key={index} post={item} />}
									/>
								) : item.id === 75 ? (
									<Route
										path={`/1-1-aba-in-home-therapy`}
										element={<Blog key={index} post={item} />}
									/>
								) : (
									<Route path="*" element={<NotFound />} />
								)
							)}
						</Routes>
					</div>
				</div>

				<div class="bg-[#fff1df]">
					<footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
						<div class="mb-4 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
							<div class="col-span-full lg:col-span-2">
								{/* logo - start */}
								<div class="mb-4 lg:-mt-2">
									<Link
										to="/"
										class="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
										aria-label="mindfulseeds.ca"
									>
										<img
											src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2022/11/mindfulseeds.ca-b.png"
											alt="mindfulseeds.ca"
											className="w-1/2"
										/>
									</Link>
								</div>
								{/* logo - end */}

								{/* <p class="mb-6 text-gray-400 sm:pr-8">
								Filler text is dummy text which has no meaning however looks
								very similar to real text.
							</p> */}
							</div>
						</div>

						<div class="border-t border-gray-300 py-8 text-left text-sm text-gray-400">
							<div class="flex flex-col items-center justify-between gap-4  md:flex-row">
								{/* logo - start */}
								<div class="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
									Mindful Seeds © {new Date().getFullYear()}.{" "}
									<Link to="/">mindfulseeds.ca</Link>
								</div>
								{/* logo - end */}

								{/* nav - start */}
								<nav class="flex gap-4">
									<Link
										to="/"
										class="font-semibold text-gray-500 transition duration-100 hover:text-gray-900 active:text-gray-900 focus:text-gray-900"
									>
										Home
									</Link>
									<Link
										to="/about-us"
										class="font-semibold text-gray-500 transition duration-100 hover:text-gray-900 active:text-gray-900 focus:text-gray-900"
									>
										About Us
									</Link>
									<Link
										to="/services"
										class="font-semibold text-gray-500 transition duration-100 hover:text-gray-900 active:text-gray-900 focus:text-gray-900"
									>
										Services
									</Link>
									{/* <Link
										to="/careers"
										class="font-semibold text-gray-500 transition duration-100 hover:text-gray-900 active:text-gray-900 focus:text-gray-900"
									>
										Careers
									</Link> */}
									<Link
										to="/contact"
										class="font-semibold text-gray-500 transition duration-100 hover:text-gray-900 active:text-gray-900 focus:text-gray-900 focus:text-secondary-600"
									>
										Contact
									</Link>
								</nav>
								{/* nav - end */}
							</div>
						</div>
					</footer>
				</div>
			</Router>
		</>
	);
};

export default App;
