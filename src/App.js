import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Blog from "./components/Blog";

const App = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("//mindfulseeds.torontosharehouse.com/wp/wp-json/wp/v2/posts")
			.then((response) => setData(response.data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<>
			<p className="text-7xl text-blue-700">Hello</p>
			{posts.map((item, index) => (
				<Blog key={index} post={item} />
			))}
		</>
	);
};

export default App;
