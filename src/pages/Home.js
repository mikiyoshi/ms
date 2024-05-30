import React from "react";

// React Router
import { BrowserRouter as Router, NavLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import custom Swiper styles
import "./swiper.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import ContactForm from "../components/ContactForm";

const products = [
	{
		category: "Servicers",
		name: "Behavioural Consultation Services",
		href: "/behavioural-consultation-services",
		contents: `Using principles of Applied Behaviour Analysis (ABA), Mindful Seeds' provides behavioural consultation which may include staff and or parent coaching and training to address client's goals and unique needs. Conducted by either Supervising Therapist or Clinical Supervisor, behavioural consultation services include conducting behavioural assessment, designing, and implementing individualized, behavioural intervention plan, and parent training and support. Some common skills addressed during consultation are, building and following routines, independent daily skills, parent-child interaction, functional communication training, behaviour management techniques, or a specific goal that is important to the client. Behavioural consultation services can be delivered in person or virtual via Zoom and are typically one (1) hour in length, twice a week during an agreed convenient time. Behavioural consultation generally runs between 6 – 12 weeks, and duration can be negotiated based on needs.
    Clinical Team: Clinical Supervisor or Supervising Therapist *** pricing to follow
    `,
		img: "http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/boy_drawing_and_coloring_on_paper_on_floor-scopio-53792f94-9151-41ea-8898-58544985c07d.jpg",
	},
	{
		category: "Servicers",
		name: "In-home Behavioural Intervention Services",
		href: "/in-home-behavioural-intervention-services",
		contents: `Individualized behavioural intervention is designed to support learning for early learners and teens to further enhance their skills across a variety of learning domains such as, but not limited to, communication and interpersonal skills, play, self-regulation, and self-management skills. Under the guidance of a clinical supervisor and direct supervision of supervising therapist, these skills are taught using one to one instruction by an ABA therapist. Parental or caregiver treatment participation may be required when determined necessary. Service is ideally delivered in person in client's home environment, and virtual service can also be an option to accommodate special circumstances. One-to-one instructions are typically two (2) hours in length, twice a week during an agreed convenient time. Length of service is based on client's needs and goals.
    Clinical Team: Clinical Supervisor, Supervising Therapist, and ABA Therapist
    `,
		img: "http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2022/11/kids36.jpg",
	},
	{
		category: "Servicers",
		name: "Emotional Awareness and Regulation Program",
		href: "/emotional-awareness-and-regulation-program",
		contents: `Under the supervision of a supervising therapist, clients are taught by an ABA Therapist to
    identify and label emotions and are taught self-help strategies to handle strong and complex emotions such as anger, feeling anxious, sad, excitement, and happy. Program also includes training mind and body awareness techniques such as deep breathing and observing thoughts and feelings. To help identify client's needs, parents will be involved in the first two (2), behavioural assessment sessions, and will continue to participate in the last two (2) sessions to prepare them to maintain program strategies. Service can be delivered in person or virtual via Zoom and are typically two (2) hours in length, once a week, over 12 weeks during an agreed convenient time. Length of service is based on client's needs and goals.
    Clinical Team: Supervising Therapist and ABA Therapist
    `,
		img: "http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/boy_printing_window_glass_with_yellow_paint-scopio-5de27a6b-bb8e-4836-8a79-e036580ce3d8.jpg",
	},
	{
		category: "Servicers",
		name: "Workshop Training",
		href: "/workshop-training",
		contents: `Based on client's needs, Mindful Seeds provides workshop training on variety of topics such as, but not limited to, behaviour management, parent-child communication and promoting independence. Workshop learning activities generally includes learning and application of evidence-based techniques using instruction, modeling, and behaviour rehearsal in a group of at least 6 and maximum of 12 workshop participants.
    Workshops generally runs between two (2) hours in length and can be conducted in person or virtual.
    Training Team: Clinical Supervisor and or Supervising Therapist
    `,
		img: "http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/scopio-cfbd8731-6e9b-4aa1-9cec-5b8658909237.jpg",
	},
	{
		category: "Servicers",
		name: "Social Skills Training",
		href: "/social-skills-training",
		contents: `To facilitate social inclusion and community participation, clients will learn social skills such as taking turns, initiating, and responding to conversations, waiting, etc., in individual and or group format.`,
		img: "http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/scopio-c387117f-1e6d-43a6-9d59-f6ce03dc7f37.jpg",
	},
	{
		category: "Servicers",
		name: "Parent and Caregiver Training",
		href: "/parent-and-caregiver-training",
		contents: `To help promote client's learning and success, a behaviourally based, family-centered training and support for client's parents and caregivers.`,
		img: "http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/scopio-08a15cd2-55d2-4576-99cb-14525a396649.jpeg",
	},
	{
		category: "Servicers",
		name: "1-1 ABA In-home Therapy",
		href: "/1-1-aba-in-home-therapy",
		contents: `Using evidence-based behavioural strategies, clients receive intensive 1-1 learning sessions with a dedicated ABA therapist in their home.`,
		img: "http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/scopio-78da4c1b-241b-4411-be3f-d8af22e794e3.jpg",
	},
];

export default function Home() {
	return (
		<>
			<div className="bg-white px-4 md:px-8 pb-6 sm:pb-8 lg:py-12">
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
								class="inline-block rounded-lg bg-primary-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base"
							>
								About Us
							</a>
						</div>
					</div>
					{/* content - end */}
					<Swiper
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
							<img
								src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/girl_in_coloring_letter_a_with_red_on_kitchen_table-scopio-11a0e6d0-04ae-4a12-8788-ce48c1b5a343.jpg"
								loading="lazy"
								alt="Fakurian Design"
								className="h-full w-full object-cover object-center"
							/>
							{/* image - end */}
						</SwiperSlide>
						<SwiperSlide className="swiper-w">
							{/* image - start */}
							<img
								src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/scopio-d75b0782-4a1a-4061-bb52-c23e63e4b3ff.jpg"
								loading="lazy"
								alt="Fakurian Design"
								className="h-full w-full object-cover object-center"
							/>
							{/* image - end */}
						</SwiperSlide>
						<SwiperSlide className="swiper-w">
							{/* image - start */}
							<img
								src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/scopio-78da4c1b-241b-4411-be3f-d8af22e794e3.jpg"
								loading="lazy"
								alt="Fakurian Design"
								className="h-full w-full object-cover object-center"
							/>
							{/* image - end */}
						</SwiperSlide>
					</Swiper>
				</section>
				<div>
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Navigation]}
						className="mySwiper"
					>
						{[...products].map((item) => (
							<SwiperSlide>
								<section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row px-20">
									<div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-6/12">
										<img
											src={item.img}
											loading="lazy"
											alt={item.name}
											className="h-full w-full object-cover object-center"
										/>
									</div>
									<div className="flex flex-col justify-center sm:text-center lg:text-left xl:w-6/12">
										<p className="mb-4 font-semibold text-secondary-500 md:mb-6 md:text-lg xl:text-xl">
											{item.category}
										</p>

										<h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-2xl">
											{item.name}
										</h1>

										<p className="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg line-clamp-3">
											{item.contents}
										</p>

										<div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
											<NavLink
												key={item.name}
												to={item.href}
												className="inline-block rounded-lg bg-primary-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base"
											>
												Read More
											</NavLink>
										</div>
									</div>
								</section>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<ContactForm />
			</div>
		</>
	);
}
