import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Blog from "./components/Blog";
import Home from "./pages/Home";

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
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
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
