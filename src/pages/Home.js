import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
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
			<h1 className="text-7xl text-blue-700">Home</h1>

			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				{posts.map((item) => (
					<li>
						<Link to={`/${item.id}`}>{item.title.rendered}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
