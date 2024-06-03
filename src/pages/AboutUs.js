import React from "react";
import ContactForm from "../components/ContactForm";

const members = [
	{
		category: "Team Members",
		name: "Dr. Don Togade",
		occupation: "Ph.D., BCBA-D, IBA Clinical Director",
		href: "",
		contents: `Dr. Don Togade is a Co-founder and the Clinical Director of Mindful Seeds. In his clinical practice, Dr. Don provides behaviour-analytic services to individuals with special needs, including training and behavioural management supports to families and agency staff with diverse backgrounds. With passion for research and dissemination, he continues to explore and present topics such as early intervention for children with Autism, foreign language acquisition, stimulus equivalence, instructional design, mindfulness, creativity, performance management, self-management, diversity, inclusion, and equity. With utmost regard for community involvement, he plays an active, volunteer role in supporting a variety of special interests group’s mission of increasing awareness and representation and advocating for equitable access to opportunities for minority groups, such as individuals with disabilities and members of the LGBTQ community. Complementing his clinical practice and community involvement, Dr. Don is also the Academic Program Coordinator and Professor of the Honours Bachelor of Behaviour Analysis Program at George Brown College, and also a Part-Time Professor in the MPEd. ABA Program at University of Western Ontario. In his spare time, he enjoys taking care of his plants, hiking, running, playing volleyball and tennis, practicing yoga, studying astronomy and cosmology, and enjoying a nice meal with family and friends. Grateful to his roots, Dr. Don was born and raised in the small town of Piat, in the province of Cagayan Valley, Philippines, and is a proud, naturalized Canadian.`,
		img: "http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/06/don2.jpg",
	},
	{
		category: "Team Members",
		name: "Grace Garcia",
		occupation: "MPEd. BCBA Supervising Therapist",
		href: "",
		contents: `Grace is the Clinical ___ at Mindful Seeds. She is a Board Certified Behaviour Analyst and has worked with individuals with developmental disabilities for over 12 years. She has extensive experience in teaching communication and adaptive living skills using Intensive Behaviour Intervention (IBI) to learners with Autism Spectrum Disorders (ASD). In addition, Grace conducts mediator training and parent coaching using evidence-based strategies rooted in principles of Applied Behaviour Analysis (ABA). Furthermore, Grace regularly conducts workshops in the community for parents, caregivers and practitioners about diverse topics in ABA such as Acceptance and Commitment Training, behaviour strategies and educational sessions on behaviour analysis. Grace also works part-time as a professor at George Brown College teaching in the Honours Bachelor of Behaviour Analysis Program. In her leisure time, Grace enjoys traveling, cooking, trying new restaurants and spending time with family and friends.`,
		img: "http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/06/grace2.jpg",
	},
	{
		category: "Team Members",
		name: "Harvey Quan",
		occupation: "Business Operations Manager ",
		href: "",
		contents: `Harvey Quan is a Co-founder of Mindful Seeds. He manages all aspects of the business operations, coming from a background and experience in finance, Information Technology (IT), quality assurance, field installation and support, project management, senior management, and professional individual and team coaching. Harvey’s passion is helping people and he was immediately drawn to the broad potential of helping individuals with special needs and providing support to their families through behavioural analytical services. Thus, the conception of Mindful Seeds – nurturing behaviour growth. In his leisure time, Harvey enjoys playing badminton, tennis and volleyball, travelling, spending quality time with family and friends, enjoying the outdoors, and volunteering.`,
		img: "http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/06/harvey2.jpg",
	},
];

export default function AboutUs() {
	return (
		<>
			{/* column one start */}
			<div class="bg-white py-6 sm:py-8 lg:py-12">
				<div class="mx-auto max-w-screen-xl px-4 md:px-8">
					<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
						<div class="md:pt-8">
							<h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
								About Us
							</h1>

							<p class="mb-6 text-gray-500 sm:text-2xl md:mb-8">
								Mindful Seeds' mission is to provide a nurturing space where
								evidence-based methods of teaching and support are used to
								maximize an individual's capacity for learning. Inspired and
								guided by behavior-analytic traditions and practices, the goal
								of Mindful Seeds is to advocate for the greater well-being of
								individuals with developmental disabilities and special needs.
							</p>
						</div>
						<div>
							<div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
								<img
									src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/boy_playing_play_dough-scopio-6eeab8aa-3a2d-4f08-9988-ddb71a0a044c.jpg"
									loading="lazy"
									alt="About Us"
									class="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* column one end  */}
			{/* column one start */}
			<div class="bg-white py-6 sm:py-8 lg:py-12">
				<div class="mx-auto max-w-screen-xl px-4 md:px-8">
					<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
						<div>
							<div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
								<img
									src="http://mindfulseeds.torontosharehouse.com/wp/wp-content/uploads/2024/02/scopio-cc7f30fc-a670-4c64-a6c4-cb701b4e24f0.jpg"
									loading="lazy"
									alt="About Us"
									class="h-full w-full object-cover object-center"
								/>
							</div>
						</div>

						<div class="md:pt-8">
							<p class="mb-6 text-gray-500 sm:text-2xl md:mb-8">
								Recognizing the role of their significant others in their
								development, Mindful Seeds also aims to promote parent and
								caregiver's welfare by empowering them with culturally
								appropriate tools to effectively provide meaningful care to
								their loved ones.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* column one end */}
			{/* Team start */}
			{[...members].map((item) => (
				<div class="bg-white py-6 sm:py-8 lg:py-12">
					<div class="mx-auto max-w-screen-xl px-4 md:px-8">
						<div class="grid gap-8 md:grid-cols-6 lg:gap-12">
							<div className="md:col-span-2">
								{/* person - start */}
								<div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
									<div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
										<img
											src={item.img}
											loading="lazy"
											alt={item.name}
											class="h-full w-full object-cover object-center"
										/>
									</div>

									<div>
										<div class="text-center font-bold text-indigo-500 md:text-lg">
											{item.name}
										</div>
										<p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
											{item.occupation}
										</p>
									</div>
								</div>
								{/* person - end */}
							</div>
							<div class="md:col-span-4">
								<p class="mb-6 text-gray-500 md:mb-8">{item.contents}</p>
							</div>
						</div>
					</div>
				</div>
			))}
			{/* Team end */}
			<ContactForm />
		</>
	);
}
