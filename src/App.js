import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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
			{data.map((item, index) => (
				<li key={index}>
					<a href={item.link}>
						<date>{item.date}</date>
						<p>{item.guid.rendered}</p>
						<p>{item.slug}</p>
						<p>{item.link}</p>
						<p>{item.title.rendered}</p>
						<p>{item.content.rendered}</p>
						<div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
						<p>{item.excerpt.rendered}</p>
						<p>{item.author}</p>
						<p>{item.featured_media}</p>
					</a>
				</li>
			))}
		</>
	);
};

export default App;
