import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Blog from "./components/Blog";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Service from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";

const App = () => {
	const [posts, setPosts] = useState([]);

	const fetchPosts = () => {
		axios
			.get("//mindfulseeds.torontosharehouse.com/wp/wp-json/wp/v2/posts")
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
			<p className="text-7xl text-blue-700">Hello</p>
			{posts.map((item, index) => (
				<Home key={index} post={item} />
			))}
			{posts.map((item, index) => (
				<Services key={index} post={item} />
			))}
			{posts.map((item, index) => (
				<Service key={index} post={item} />
			))}
			{posts.map((item, index) => (
				<AboutUs key={index} post={item} />
			))}
			{posts.map((item, index) => (
				<ContactUs key={index} post={item} />
			))}
			{posts.map((item, index) => (
				<Careers key={index} post={item} />
			))}
			{posts.map((item, index) => (
				<Blog key={index} post={item} />
			))}
		</>
	);
};

export default App;
