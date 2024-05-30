import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

const contacts = [
	{
		address: "1521-320 Richmond St. East, Toronto, ON. M5A 1P9",
		email: "info.mindfulseeds@gmail.com",
		phone: {
			"Dr. Don Togade": "416-660-8262",
			"Harvey Quan": "416-568-3098",
		},
		"In-home ABA Services":
			"Toronto, Scarborough, Mississauga, Durham, Pickering",
		contents:
			"We would like to hear from you! If you have any inquiries about our services and company, feel free to send us a message. It is our pleasure to connect with you.",
		"sub contents":
			"Please allow between 24-48 hours during business days (Monday-Friday) for us to respond to your inquiries. We thank you in advance for your understanding and patience.",
	},
];

export default function ContactUs({ post }) {
	const [featuredImage, setFeaturedimage] = useState();

	const getImage = useCallback(() => {
		axios
			.get(post?._links["wp:featuredmedia"][0]?.href)
			.then((response) => {
				setFeaturedimage(response.data.source_url);
			})
			.catch((error) => console.log(error));
	}, [post]); // post が変更された場合にのみ getImage を再生成

	useEffect(() => {
		getImage();
	}, [getImage]);

	return (
		<>
			<div class="bg-white">
				<div class="mx-auto max-w-screen-2xl">
					<section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
						{/* image - start */}
						<img
							src={featuredImage}
							loading="lazy"
							alt={post.title.rendered}
							class="absolute inset-0 h-full w-full object-cover object-center"
						/>
						{/* image - end */}

						{/* overlay - start */}
						<div class="absolute inset-0 bg-slate-400 mix-blend-multiply"></div>
						{/* overlay - end */}

						{/* text start */}
						<div class="relative flex flex-col items-center p-4">
							<h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
								{post.title.rendered}
							</h1>
						</div>
						{/* text end */}
					</section>
				</div>
			</div>

			{[...contacts].map((item) => (
				<div class="bg-white p-6 sm:p-8 lg:py-12 px-4 md:p-8">
					<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
						<div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-2 xl:gap-16 mb-10 md:mb-16">
							<div class="flex gap-4 md:gap-6">
								<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
										/>
									</svg>
								</div>

								<div>
									<h3 class="mb-2 text-lg font-semibold md:text-xl">Address</h3>
									<p class="mb-2 text-gray-500">{item.address}</p>
								</div>
							</div>

							<div class="flex gap-4 md:gap-6">
								<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
										/>
									</svg>
								</div>

								<div>
									<h3 class="mb-2 text-lg font-semibold md:text-xl">Email</h3>
									<p class="mb-2 text-gray-500">
										<a
											href={`mailto:${item.email}?subject=Mindful Seeds Contact Email`}
											class="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700"
										>
											{item.email}
										</a>
									</p>
								</div>
							</div>

							<div class="flex gap-4 md:gap-6">
								<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
										/>
									</svg>
								</div>

								<div>
									<h3 class="mb-2 text-lg font-semibold md:text-xl">Phone</h3>
									<table class="table-auto">
										<tr>
											<td className="font-bold pr-4">Dr. Don Togade</td>
											<td>
												<a
													href={`tel:${item.phone["Dr. Don Togade"]}`}
													class="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700"
												>
													{item.phone["Dr. Don Togade"]}
												</a>
											</td>
										</tr>
										<tr>
											<td className="font-bold pr-4">Harvey Quan</td>
											<td>
												<a
													href={`tel:${item.phone["Harvey Quan"]}`}
													class="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700"
												>
													{item.phone["Harvey Quan"]}
												</a>
											</td>
										</tr>
									</table>
								</div>
							</div>

							<div class="flex gap-4 md:gap-6">
								<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
										/>
									</svg>
								</div>

								<div>
									<h3 class="mb-2 text-lg font-semibold md:text-xl">
										In-home ABA Services
									</h3>
									<p class="mb-2 text-gray-500">
										{item["In-home ABA Services"]}
									</p>
								</div>
							</div>
						</div>

						<div class="">
							<p class="mb-4 mx-auto text-left text-gray-500 md:text-lg">
								{item.contents}
							</p>
							<p class="mb-4 mx-auto text-left text-gray-500 md:text-lg">
								<a
									href={`mailto:${item.email}?subject=Mindful Seeds Contact Email`}
									class="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700"
								>
									{item.email}
								</a>
							</p>

							<p class="mx-auto text-left text-gray-500 md:text-lg">
								{item["sub contents"]}
							</p>
						</div>

						<div class="bg-white py-6 sm:py-8 lg:py-12">
							<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
								{/* text - start */}
								<div class="mb-10 md:mb-16">
									<h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
										Contact Us
									</h2>
								</div>
								{/* text - end */}

								{/* form - start */}
								<form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
									<div class="sm:col-span-2">
										<label
											for="your-name"
											class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
										>
											Your name * (required)
										</label>
										<input
											name="your-name"
											class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
											placeholder="Your Full Name"
										/>
									</div>

									<div class="sm:col-span-2">
										<label
											for="email"
											class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
										>
											Your email * (required)
										</label>
										<input
											name="email"
											class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
											placeholder="yourmail@example.com"
										/>
									</div>

									<div class="sm:col-span-2">
										<label
											for="subject"
											class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
										>
											Subject * (required)
										</label>
										<input
											name="subject"
											class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
											placeholder="Subject"
										/>
									</div>

									<div class="sm:col-span-2">
										<label
											for="message"
											class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
										>
											Your message (optional)
										</label>
										<textarea
											name="message"
											class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
											placeholder="Your Message"
										></textarea>
									</div>

									<div class="flex items-center justify-between sm:col-span-2">
										<button class="inline-block rounded-lg bg-primary-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">
											Submit
										</button>

										<span class="text-sm text-gray-500">*Required</span>
									</div>
								</form>
								{/* form - end */}
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
