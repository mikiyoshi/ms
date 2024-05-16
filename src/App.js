import React, { useEffect, useState } from "react";
import axios from "axios";

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
		</div>
	);
}
