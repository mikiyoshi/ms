import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Blog from "./components/Blog";

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
			<Router>
				<ul>
					{posts.map((item) => (
						<li>
							<Link to={`/${item.id}`}>{item.title.rendered}</Link>
						</li>
					))}
				</ul>
				<Routes>
					{posts.map((item, index) => (
						<Route
							path={`/${item.id}`}
							element={<Blog key={index} post={item} />}
						/>
					))}
				</Routes>
			</Router>
		</>
	);
};

export default App;
