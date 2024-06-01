import React from "react";

const products = [
	{
		category: "Servicers",
		name: "Behavioural Consultation Services",
	},
	{
		category: "Servicers",
		name: "In-home Behavioural Intervention Services",
	},
	{
		category: "Servicers",
		name: "Emotional Awareness and Regulation Program",
	},
	{
		category: "Servicers",
		name: "Workshop Training",
	},
	{
		category: "Servicers",
		name: "Social Skills Training",
	},
	{
		category: "Servicers",
		name: "Parent and Caregiver Training",
	},
	{
		category: "Servicers",
		name: "1-1 ABA In-home Therapy",
	},
	{
		category: "Employment",
		name: "",
	},
	{
		category: "Other",
		name: "",
	},
];

const ContactForm = () => {
	return (
		<>
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
								class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary-300 transition duration-100 focus:ring"
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
								class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary-300 transition duration-100 focus:ring"
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
							<div className="mt-2">
								<select
									name="subject"
									autoComplete="country-name"
									className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary-300 transition duration-100 focus:ring"
								>
									{[...products].map((item) => (
										<option>
											{item.category} {item.name}
										</option>
									))}
								</select>
							</div>
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
								class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary-300 transition duration-100 focus:ring"
								placeholder="Your Message"
							></textarea>
						</div>

						<div class="flex items-center justify-between sm:col-span-2">
							<button class="inline-block rounded-lg bg-primary-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">
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
};

export default ContactForm;
