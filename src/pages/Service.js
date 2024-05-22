import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

export default function Service({ post }) {
	return (
		<div class="container">
			<h1>Service</h1>
			<div>{post.id}</div>
		</div>
	);
}
