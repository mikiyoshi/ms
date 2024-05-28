import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import custom Swiper styles
import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Home() {
	return (
		<>
			<section class="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
				{/* content - start */}
				<div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
					<h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-4xl">
						Nurturing Behaviour Grouth
					</h1>

					<p class="mb-4 font-semibold text-slate-500 md:mb-6 md:text-lg xl:text-xl font-protest-riot-regular">
						Mindful Seeds Inc. provides behaviour therapy services to
						individuals with developmental disabilities and special needs,
						including family-centered coaching to caregivers, and behavioural
						management training to staff working with clients with complex
						needs.
					</p>

					<div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
						<a
							href="/"
							class="inline-block rounded-lg bg-primary-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
						>
							About Us
						</a>
					</div>
				</div>
				{/* content - end */}
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: false,
					}}
					navigation={false}
					modules={[Autoplay, Navigation]}
					className="mySwiper h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-96 lg:w-5/12 xl:w-5/12"
				>
					<SwiperSlide className="swiper-w">
						{/* image - start */}
						<div>
							<img
								src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/girl_in_coloring_letter_a_with_red_on_kitchen_table-scopio-11a0e6d0-04ae-4a12-8788-ce48c1b5a343.jpg"
								loading="lazy"
								alt="Fakurian Design"
								class="h-full w-full object-cover object-center"
							/>
						</div>
						{/* image - end */}
					</SwiperSlide>
					<SwiperSlide className="swiper-w">
						{/* image - start */}
						<div class="">
							<img
								src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/girl_in_coloring_letter_a_with_red_on_kitchen_table-scopio-11a0e6d0-04ae-4a12-8788-ce48c1b5a343.jpg"
								loading="lazy"
								alt="Fakurian Design"
								class="h-full w-full object-cover object-center"
							/>
						</div>
						{/* image - end */}
					</SwiperSlide>
					<SwiperSlide className="swiper-w">
						{/* image - start */}
						<div class="">
							<img
								src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/girl_in_coloring_letter_a_with_red_on_kitchen_table-scopio-11a0e6d0-04ae-4a12-8788-ce48c1b5a343.jpg"
								loading="lazy"
								alt="Fakurian Design"
								class="h-full w-full object-cover object-center"
							/>
						</div>
						{/* image - end */}
					</SwiperSlide>
				</Swiper>
			</section>
			<div>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
							{/* content - start */}
							<div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
								<p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
									Very proud to introduce
								</p>

								<h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
									Revolutionary way to build the web
								</h1>

								<p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
									This is a section of some simple filler text, also known as
									placeholder text. It shares some characteristics of a real
									written text but is random.
								</p>

								<div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
									<a
										href="/"
										class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
									>
										Start now
									</a>

									<a
										href="/"
										class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
									>
										Take tour
									</a>
								</div>
							</div>
							{/* content - end */}

							{/* image - start */}
							<div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
								<img
									src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
									loading="lazy"
									alt="Fakurian Design"
									class="h-full w-full object-cover object-center"
								/>
							</div>
							{/* image - end */}
						</section>
					</SwiperSlide>
					<SwiperSlide>
						<section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
							{/* content - start */}
							<div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
								<p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
									Very proud to introduce
								</p>

								<h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
									Revolutionary way to build the web
								</h1>

								<p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
									This is a section of some simple filler text, also known as
									placeholder text. It shares some characteristics of a real
									written text but is random.
								</p>

								<div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
									<a
										href="/"
										class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
									>
										Start now
									</a>

									<a
										href="/"
										class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
									>
										Take tour
									</a>
								</div>
							</div>
							{/* content - end */}

							{/* image - start */}
							<div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
								<img
									src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
									loading="lazy"
									alt="Fakurian Design"
									class="h-full w-full object-cover object-center"
								/>
							</div>
							{/* image - end */}
						</section>
					</SwiperSlide>
					<SwiperSlide>
						<section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
							{/* content - start */}
							<div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
								<p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
									Very proud to introduce
								</p>

								<h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
									Revolutionary way to build the web
								</h1>

								<p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
									This is a section of some simple filler text, also known as
									placeholder text. It shares some characteristics of a real
									written text but is random.
								</p>

								<div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
									<a
										href="/"
										class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
									>
										Start now
									</a>

									<a
										href="/"
										class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
									>
										Take tour
									</a>
								</div>
							</div>
							{/* content - end */}

							{/* image - start */}
							<div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
								<img
									src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
									loading="lazy"
									alt="Fakurian Design"
									class="h-full w-full object-cover object-center"
								/>
							</div>
							{/* image - end */}
						</section>
					</SwiperSlide>
				</Swiper>
			</div>
			<div class="bg-white py-6 sm:py-8 lg:py-12">
				<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
					{/* text - start */}
					<div class="mb-10 md:mb-16">
						<h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
							Contact Us
						</h2>

						<p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
							This is a section of some simple filler text, also known as
							placeholder text. It shares some characteristics of a real written
							text but is random or otherwise generated.
						</p>
					</div>
					{/* text - end */}

					{/* form - start */}
					<form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
						<div>
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
							<button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
								Submit
							</button>

							<span class="text-sm text-gray-500">*Required</span>
						</div>
					</form>
					{/* form - end */}
				</div>
			</div>
		</>
	);
}
