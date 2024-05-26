import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div class="bg-white py-6 sm:py-8 lg:py-12">
			<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
				<div class="flex flex-col items-center">
					<h1 class="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
						Page not found
					</h1>

					<p class="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">
						The page you&apos;re looking for doesn&apos;t exist.
					</p>

					<Link
						to="/"
						class="inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none bg-primary-500 transition duration-100 hover:bg-primary-600 focus-visible:ring active:text-gray-700 md:text-base"
					>
						Go Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
