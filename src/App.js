import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./components/Blog";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Service from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";

export default function App() {
	const [posts, setPosts] = useState([]);

	const fetchPosts = () => {
		axios
			.get("//mindfulseeds.torontosharehouse.com/wp/wp-json/wp/v2/posts")
			.then((res) => {
				setPosts(res.data);
			});
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div>
			<p className="text-7xl text-blue-700">Hello</p>
			{posts.map((item) => (
				<Home post={item} />
			))}
			{posts.map((item) => (
				<Services post={item} />
			))}
			{posts.map((item) => (
				<Service key={item.id} post={item} />
			))}
			{posts.map((item) => (
				<AboutUs post={item} />
			))}
			{posts.map((item) => (
				<ContactUs post={item} />
			))}
			{posts.map((item) => (
				<Careers post={item} />
			))}
			{posts.map((item) => (
				<Blog post={item} />
			))}
		</div>
	);
}
