import React, { useEffect, useState } from "react";

// React Router
import { Routes, Route, NavLink, Link } from "react-router-dom";

import axios from "axios";
import Blog from "./components/Blog";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";

// const products = [
// 	{
// 		name: "Behavioural Consultation Services",
// 		href: "/behavioural-consultation-services",
// 	},
// 	{
// 		name: "In-home Behavioural Intervention Services",
// 		href: "/in-home-behavioural-intervention-services",
// 	},
// 	{
// 		name: "Emotional Awareness and Regulation Program",
// 		href: "/emotional-awareness-and-regulation-program",
// 	},
// 	{
// 		name: "Workshop Training",
// 		href: "/workshop-training",
// 	},
// 	{
// 		name: "Social Skills Training",
// 		href: "/social-skills-training",
// 	},
// 	{
// 		name: "Parent and Caregiver Training",
// 		href: "/parent-and-caregiver-training",
// 	},
// 	{
// 		name: "1-1 ABA In-home Therapy",
// 		href: "/1-1-aba-in-home-therapy",
// 	},
// ];

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
		<div className="font-montserrat">
			<ScrollToTop />
			<Header />
			<div className="bg-white">
				<div className="mx-auto max-w-screen-2xl">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about-us" element={<AboutUs />}></Route>
						<Route path="/services" element={<Services />}></Route>
						{posts.map((item, index) =>
							item.id === 122 ? (
								<Route
									path={
										"/" + item.title.rendered.toLowerCase().replace(/\s+/g, "-")
									}
									element={<Blog key={index} post={item} />}
								/>
							) : item.id === 78 ? (
								<Route
									path={
										"/" + item.title.rendered.toLowerCase().replace(/\s+/g, "-")
									}
									element={<ContactUs key={index} post={item} />}
								/>
							) : item.id === 227 ? (
								<Route
									path={
										"/" + item.title.rendered.toLowerCase().replace(/\s+/g, "-")
									}
									element={<Blog key={index} post={item} />}
								/>
							) : item.id === 229 ? (
								<Route
									path={
										"/" + item.title.rendered.toLowerCase().replace(/\s+/g, "-")
									}
									element={<Blog key={index} post={item} />}
								/>
							) : item.id === 231 ? (
								<Route
									path={
										"/" + item.title.rendered.toLowerCase().replace(/\s+/g, "-")
									}
									element={<Blog key={index} post={item} />}
								/>
							) : item.id === 233 ? (
								<Route
									path={
										"/" + item.title.rendered.toLowerCase().replace(/\s+/g, "-")
									}
									element={<Blog key={index} post={item} />}
								/>
							) : item.id === 77 ? (
								<Route
									path={
										"/" + item.title.rendered.toLowerCase().replace(/\s+/g, "-")
									}
									element={<Blog key={index} post={item} />}
								/>
							) : item.id === 76 ? (
								<Route
									path={
										"/" + item.title.rendered.toLowerCase().replace(/\s+/g, "-")
									}
									element={<Blog key={index} post={item} />}
								/>
							) : item.id === 75 ? (
								<Route
									path={
										"/" + item.title.rendered.toLowerCase().replace(/\s+/g, "-")
									}
									element={<Blog key={index} post={item} />}
								/>
							) : (
								<Route path="*" element={<NotFound />} />
							)
						)}
					</Routes>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;
