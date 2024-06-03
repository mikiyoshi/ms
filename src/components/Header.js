import React, { useEffect, useState } from "react";
// React Router
import { NavLink, Link } from "react-router-dom";

import axios from "axios";

// Navigation
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
	Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Header = () => {
	// Navigation
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [posts, setPosts] = useState([]);

	const fetchPosts = () => {
		axios
			.get(
				"//mindfulseeds.torontosharehouse.com/wp/wp-json/wp/v2/posts/?per_page=100"
			)
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
			<div className="bg-white lg:pb-4">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					{/* text - start */}
					<div className="mb-4 mt-4 md:mt-10">
						{/* logo - start */}
						<div className="text-center">
							<Link
								to="/"
								className="inline-flex justify-center items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
								aria-label="mindfulseeds.ca"
							>
								<img
									src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2022/11/mindfulseeds.ca-b.png"
									alt="mindfulseeds.ca"
									className="w-1/3"
								/>
							</Link>
						</div>
						{/* logo - end */}
					</div>
					{/* text - end */}
				</div>
			</div>
			{/* Navigation - start */}

			<header className="bg-slate-100 sticky top-0 z-10">
				<nav
					className="mx-auto flex justify-center max-w-7xl items-center relative"
					aria-label="Global"
				>
					{/* <div className="flex lg:flex-1">
							<Link to="/" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									alt=""
								/>
							</Link>
						</div> */}
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-4 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
						<NavLink
							to="/"
							className={({ isActive }) => {
								return (
									"text-lg font-semibold leading-6 text-gray-900 border-slate-100 border-b-4 hover:border-secondary-500 hover:border-b-4 active:bg-secondary-200 focus:bg-secondary-200 focus:border-b-4 py-4 md:py-4 px-4 md:px-4" +
									(isActive ? " bg-secondary-200" : {})
								);
							}}
						>
							Home
						</NavLink>
						<Popover className="relative">
							<PopoverButton className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 border-slate-100 border-b-4 hover:border-secondary-500 hover:border-b-4 active:bg-secondary-200 focus:bg-secondary-200 focus:border-b-4 py-4 md:py-4 px-4 md:px-4">
								Services
								<ChevronDownIcon
									className="h-5 w-5 flex-none text-gray-400"
									aria-hidden="true"
								/>
							</PopoverButton>

							<Transition
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<PopoverPanel className="absolute -left-8 top-full z-10 w-screen max-w-md overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5">
									<div>
										{posts
											.filter(
												(item) => ![206, 218, 219, 122, 78].includes(item.id)
											)
											.map((item, index) => (
												<div
													key={index}
													className="group relative flex items-center gap-x-6 text-sm leading-6"
												>
													<div className="flex-auto">
														<NavLink
															to={
																"/" +
																item.title.rendered
																	.toLowerCase()
																	.replace(/\s+/g, "-")
															}
															// className="block font-semibold text-gray-900 p-4 hover:bg-secondary-500 active:bg-secondary-200 focus:bg-secondary-200"
															className={({ isActive }) => {
																return (
																	"block font-semibold text-gray-900 p-4 hover:bg-secondary-500 active:bg-secondary-200 focus:bg-secondary-200" +
																	(isActive ? " bg-secondary-200" : {})
																);
															}}
														>
															{item.title.rendered}
															<span className="absolute inset-0" />
														</NavLink>
													</div>
												</div>
											))}
									</div>
								</PopoverPanel>
							</Transition>
						</Popover>
						<NavLink
							to="/about-us"
							className={({ isActive }) => {
								return (
									"text-lg font-semibold leading-6 text-gray-900 border-slate-100 border-b-4 hover:border-secondary-500 hover:border-b-4 active:bg-secondary-200 focus:bg-secondary-200 focus:border-b-4 py-4 md:py-4 px-4 md:px-4" +
									(isActive ? " bg-secondary-200" : {})
								);
							}}
						>
							About Us
						</NavLink>
						{/* <NavLink
								to="/careers"
								className="text-lg font-semibold leading-6 text-gray-900 border-slate-100 border-b-4 hover:border-secondary-500 hover:border-b-4 active:bg-secondary-200 focus:bg-secondary-200 focus:border-b-4 py-4 md:py-4 px-4 md:px-4"
							>
								Careers
							</NavLink> */}
						<NavLink
							to="contact"
							className={({ isActive }) => {
								return (
									"text-lg font-semibold leading-6 text-gray-900 border-slate-100 border-b-4 hover:border-secondary-500 hover:border-b-4 active:bg-secondary-200 focus:bg-secondary-200 focus:border-b-4 py-4 md:py-4 px-4 md:px-4" +
									(isActive ? " bg-secondary-200" : {})
								);
							}}
						>
							Contact
						</NavLink>
					</PopoverGroup>
				</nav>
				<Dialog
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-10" />
					<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<NavLink to="/" className="-m-1.5 p-1.5">
								<span className="sr-only">mindfulseeds.ca</span>
								<img
									className="h-8 w-auto"
									src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2022/11/mindfulseeds.ca-b.png"
									alt="mindfulseeds.ca"
								/>
							</NavLink>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									<NavLink
										to="/"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-secondary-500 active:bg-secondary-200 focus:bg-secondary-200"
									>
										Home
									</NavLink>
									<Disclosure as="div" className="-mx-3">
										{({ open }) => (
											<>
												<DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-secondary-500 active:bg-secondary-200 focus:bg-secondary-200">
													Services
													<ChevronDownIcon
														className={classNames(
															open ? "rotate-180" : "",
															"h-5 w-5 flex-none"
														)}
														aria-hidden="true"
													/>
												</DisclosureButton>
												<DisclosurePanel className="mt-2 space-y-2">
													{[...posts]
														.filter(
															(item) =>
																![206, 218, 219, 122, 78].includes(item.id)
														)
														.map((item, index) => (
															<NavLink
																key={index}
																as="a"
																to={
																	"/" +
																	item.title.rendered
																		.toLowerCase()
																		.replace(/\s+/g, "-")
																}
																className="block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-secondary-500 active:bg-secondary-200 focus:bg-secondary-200"
															>
																{item.title.rendered}
															</NavLink>
														))}
												</DisclosurePanel>
											</>
										)}
									</Disclosure>
									<NavLink
										to="/about-us"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-secondary-500 active:bg-secondary-200 focus:bg-secondary-200"
									>
										About Us
									</NavLink>
									<NavLink
										to="/contact"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-secondary-500 active:bg-secondary-200 focus:bg-secondary-200"
									>
										Contact
									</NavLink>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>
			{/* Navigation - end */}
		</>
	);
};

export default Header;
