import React from "react";
// React Router
import { NavLink, Link } from "react-router-dom";

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

const Footer = () => {
	return (
		<div className="bg-[#fff1df]">
			<footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<div className="mb-4 grid grid-cols-3 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
					<div className="col-span-full lg:col-span-2">
						{/* logo - start */}
						<div className="mb-4 lg:-mt-2">
							<Link
								to="/"
								className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
								aria-label="mindfulseeds.ca"
							>
								<img
									src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2022/11/mindfulseeds.ca-b.png"
									alt="mindfulseeds.ca"
									className="w-1/2"
								/>
							</Link>
						</div>
						{/* logo - end */}
					</div>

					{[...contacts].map((item) => (
						<>
							<div className="col-span-full lg:col-span-2">
								{/* Contact Email start */}
								<div className="flex gap-4 md:gap-6">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-10 md:w-10 md:rounded-xl">
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
										<h3 className="mb-2 text-lg font-semibold md:text-xl">
											Email
										</h3>
										<p className="mb-2 text-gray-500">
											<a
												href={`mailto:${item.email}?subject=Mindful Seeds Contact Email`}
												className="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700"
											>
												{item.email}
											</a>
										</p>
									</div>
								</div>
								{/* Contact Email End */}
							</div>

							<div className="col-span-full lg:col-span-2">
								{/* Contact Phone Start */}
								<div className="flex gap-4 md:gap-6">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg md:h-10 md:w-10 md:rounded-xl">
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
										<h3 className="mb-2 text-lg font-semibold md:text-xl">
											Phone
										</h3>
										<table className="table-auto">
											<tr>
												<td className="font-bold pr-4">Dr. Don Togade</td>
												<td>
													<a
														href={`tel:${item.phone["Dr. Don Togade"]}`}
														className="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700"
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
														className="font-bold text-primary-500 transition duration-100 hover:text-primary-600 active:text-primary-700"
													>
														{item.phone["Harvey Quan"]}
													</a>
												</td>
											</tr>
										</table>
									</div>
								</div>
								{/* Contact Phone End */}
							</div>
						</>
					))}
				</div>
				<div className="border-t border-gray-300 py-8 text-left text-lg text-gray-400">
					<div className="flex flex-col items-center justify-between gap-4  md:flex-row">
						{/* logo - start */}
						<div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
							Mindful Seeds © {new Date().getFullYear()}.{" "}
							<Link to="/">mindfulseeds.ca</Link>
						</div>
						{/* logo - end */}

						{/* nav - start */}
						<nav className="flex gap-4">
							<NavLink
								to="/"
								className={({ isActive }) => {
									return (
										"font-semibold text-gray-500 transition duration-100 hover:text-primary-900 active:text-primary-900 focus:text-primary-900" +
										(isActive ? " text-primary-900" : {})
									);
								}}
							>
								Home
							</NavLink>
							<NavLink
								to="/about-us"
								className={({ isActive }) => {
									return (
										"font-semibold text-gray-500 transition duration-100 hover:text-primary-900 active:text-primary-900 focus:text-primary-900" +
										(isActive ? " text-primary-900" : {})
									);
								}}
							>
								About Us
							</NavLink>
							<NavLink
								to="/services"
								className={({ isActive }) => {
									return (
										"font-semibold text-gray-500 transition duration-100 hover:text-primary-900 active:text-primary-900 focus:text-primary-900" +
										(isActive ? " text-primary-900" : {})
									);
								}}
							>
								Services
							</NavLink>
							{/* <NavLink
                to="/careers"
                className={({ isActive }) => {
                  return (
                    "font-semibold text-gray-500 transition duration-100 hover:text-primary-900 active:text-primary-900 focus:text-primary-900" +
                    (isActive ? " text-primary-900" : {})
                  );
                }}
              >
                Careers
              </NavLink> */}
							<NavLink
								to="/contact"
								className={({ isActive }) => {
									return (
										"font-semibold text-gray-500 transition duration-100 hover:text-primary-900 active:text-primary-900 focus:text-primary-900" +
										(isActive ? " text-primary-900" : {})
									);
								}}
							>
								Contact
							</NavLink>
						</nav>
						{/* nav - end */}
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
