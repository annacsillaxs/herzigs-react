import { BiTime, BiMap, BiPhone } from "react-icons/bi";
import { FaInstagram, FaYoutube, FaFax } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { GrContactInfo, GrMapLocation } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import jonSrc from "./images/jon.jpeg";
import alexSrc from "./images/alex.jpeg";
import steveSrc from "./images/steve.jpeg";
import danielSrc from "./images/daniel.jpeg";
import homeHero from "./images/about_bg.jpeg";
import leeSrc from "./images/lee.jpeg";
import oliviaSrc from "./images/olivia.jpeg";
import mattSrc from "./images/matt.jpeg";
import sensor from "./images/sensor.jpeg";
import handsFree from "./images/hands_free.jpeg";
import mobileFleet from "./images/mobile_fleet.jpeg";
import recovery from "./images/recovery_1.jpeg";
import viperSmart from "./images/viper.jpeg";

// Navbar Links
const links = [
	{
		id: 1,
		url: "/",
		text: "home",
	},
	{
		id: 2,
		url: "/about",
		text: "about",
	},
	{
		id: 4,
		url: "/services",
		text: "services",
	},
	{
		id: 5,
		url: "/restoration",
		text: "restoration",
	},
	{
		id: 6,
		url: "/partnership",
		text: "partnership",
	},
];

// Footer
const footer = [
	{
		id: "address",
		title: "location",
		titleIcon: <GrMapLocation className="react-icons--lg" />,
		details: [
			{
				url: "https://www.google.com/maps/place/Herzigs+Auto+Group+Ltd/@51.5928705,-0.2540768,19.39z/data=!4m13!1m7!3m6!1s0x487611314ce05cb9:0x8b38497e3a4d2752!2sCecil+Rd,+London+NW9+5EL!3b1!8m2!3d51.5929137!4d-0.2533255!3m4!1s0x487613af759599bd:0xd5258e0fbc06b1d8!8m2!3d51.5927446!4d-0.2536859",
				text: "Unit 2, 1a Cecil Road, NW9 5EL, London",
				textIcon: <BiMap className="react-icons" />,
			},
		],
	},
	{
		id: "contact",
		title: "contact info",
		titleIcon: <GrMapLocation className="react-icons--lg" />,
		details: [
			{
				url: "tel:0044 20 8200 9393",
				text: "020 8200 9393",
				textIcon: <BiPhone className="react-icons" />,
			},
			{
				url: "",
				text: "020 8200 1133",
				textIcon: <FaFax className="react-icons" />,
			},
			{
				url: "mailto:info@herzigs.co.uk",
				text: "info@herzigs.co.uk",
				textIcon: <MdOutlineAlternateEmail className="react-icons" />,
			},
		],
	},
	{
		id: "opening",
		title: "opening hours",
		titleIcon: <BiTime className="react-icons--lg" />,
		details: [
			{
				url: "",
				text: "Mon-Fri: 8am- 5.30pm",
				textIcon: "",
			},
			{
				url: "",
				text: "Sat: 9am - 1pm",
				textIcon: "",
			},
			{
				url: "",
				text: "Sun, Bank Hols: Closed",
				textIcon: "",
			},
		],
	},
	{
		id: "services",
		title: "services",
		titleIcon: <FiTool className="react-icons--lg" />,
		details: [
			{
				url: "services/mobileDent",
				text: "Mobile Dent removal",
				textIcon: "",
			},
			{
				url: "services/mobileServicing",
				text: "Mobile Servicing",
				textIcon: "",
			},
			{
				url: "services/mobileRecovery",
				text: "Vehicle Recovery",
				textIcon: "",
			},
			{
				url: "services/mobileAudio",
				text: "Audio & Visual",
				textIcon: "",
			},
			{
				url: "services/mobileFleet",
				text: "Mobile Fleet Servicing",
				textIcon: "",
			},
			{
				url: "services/fleet",
				text: "Fleet Servicing",
				textIcon: "",
			},
			{
				url: "services/engine",
				text: "Engine Servicing",
				textIcon: "",
			},
			{
				url: "services/steering",
				text: "Steering Servicing",
				textIcon: "",
			},
			{
				url: "services/bodywork",
				text: "Bodywork",
				textIcon: "",
			},
			{
				url: "services/suspension",
				text: "Suspension Repair",
				textIcon: "",
			},
			{
				url: "services/tyres",
				text: "Tyres",
				textIcon: "",
			},
			{
				url: "services/exhaust",
				text: "Exhaust",
				textIcon: "",
			},
			{
				url: "services/mot",
				text: "MOT's",
				textIcon: "",
			},
			{
				url: "services/sensors",
				text: "Parking Sensors",
				textIcon: "",
			},
			{
				url: "services/hands",
				text: "Hands Free Kits",
				textIcon: "",
			},
		],
	},
	{
		id: "social",
		title: "follow us",
		titleIcon: "",
		details: [
			{
				url: "https://instagram.com/herzigsautogroup?utm_medium=copy_link",
				text: "",
				textIcon: <FaInstagram className="react-icons--xl instagram" />,
			},
			{
				url: "https://www.youtube.com/channel/UC4vyaYZIL9KYgMRYW0SYWSg",
				text: "",
				textIcon: <FaYoutube className="react-icons--xl youtube" />,
			},
		],
	},
];

// Home Page
const homePage = {
	id: "home",
	heroTitle: "Quality Family Run Vehicle Repairs In London",
	img: homeHero,
	contentText: ["The Herzig family have been maintaining customers vehicles since 1969. Our team of trained, skilled and experienced technicians and panel beaters, aim to provide an honest and fair service to each and every customer."],
	slides: [
		{
			id: "slogan",
			title: "From engine servicing to bodywork repairs,",
			span: "''We'll keep you on the road''",
			btn: "services",
			url: "/services",
		},
		{
			id: "fleet",
			title: "fleet servicing",
			text: "We can keep your company fleet running smoothly. We service local businesses and would love to be able to serve you.",
			btn: "learn more",
			url: "/services/fleet",
		},
		{
			id: "partnership",
			title: "partnership",
			btn: "learn more",
			url: "/partnership",
		},
	],
};

// About Page
const aboutPage = {
	id: "about",
	heroTitle: "a family business",
	contentTitle: "a brief history...",
	contentText: [
		"The Herzig family have been in the motor trade for over 45 years.",
		"Jon Herzig has fulfilled his dreams by becoming a Managing Director of his own company.He followed his father’s footsteps by running a successful company, servicing the motor trade.",
		"Victor Herzig, Jon’s Father and Frank Masterson, whom Jon regards as his second father, opened up a servicing and sales garage in 1969, servicing major Blue Chip clients for many years. In 2001 Frank opened a bodyshop in Colindale, London named H&M Bodyshop, which Jon was eager to help set up and run. Jon was named as Manager and ran the Bodyshop, which was a complete success.",
		"Tragically in 2007 Frank died suddenly. Jon was left with the decision to either advise all staff that they had been made redundant or to buy the business. After deliberation with his wife Alex, the decision was made that they would buy the company and the business would continue to be a success in Franks honour.",
		"Since taking over the company Jon and Alex have continued to run the company successfully and have grown with the addition of a mechanical garage and raising 4 children of their own. With thanks to the continued support of our family, staff and long standing clients, it is their hope that both the business (and the children) will continue to grow for years to come.",
	],
	managementTitle: "meet the management...",
};

// Contact Page
const contactPage = {
	id: "contact",
	heroTitle: "contact us",
	info: [
		{
			id: "location",
			title: "location",
			titleIcon: <GrMapLocation className="react-icons--lg" />,
			details: [
				{
					url: "https://www.google.com/maps/place/Herzigs+Auto+Group+Ltd/@51.5928705,-0.2540768,19.39z/data=!4m13!1m7!3m6!1s0x487611314ce05cb9:0x8b38497e3a4d2752!2sCecil+Rd,+London+NW9+5EL!3b1!8m2!3d51.5929137!4d-0.2533255!3m4!1s0x487613af759599bd:0xd5258e0fbc06b1d8!8m2!3d51.5927446!4d-0.2536859",
					text: "Unit 2, 1a Cecil Road, NW9 5EL, London",
					textIcon: <BiMap className="react-icons" />,
				},
			],
		},
		{
			id: "contacts",
			title: "contact numbers",
			titleIcon: <GrContactInfo className="react-icons--lg" />,
			details: [
				{
					url: "tel:0044 20 8200 9393",
					text: "020 8200 9393",
					textIcon: <BiPhone className="react-icons" />,
				},
				{
					text: "020 8200 1133",
					textIcon: <FaFax className="react-icons" />,
				},
				{
					url: "mailto:info@herzigs.co.uk",
					text: "info@herzigs.co.uk",
					textIcon: <MdOutlineAlternateEmail className="react-icons" />,
				},
			],
		},
		{
			id: "opening",
			title: "opening hours",
			titleIcon: <BiTime className="react-icons--lg" />,
			details: [
				{
					text: "Mon-Fri: 8am- 5.30pm",
					textIcon: "",
				},
				{
					text: "Sat: 9am - 1pm",
					textIcon: "",
				},
				{
					text: "Sun, Bank Hols: Closed",
					textIcon: "",
				},
			],
		},
		{
			id: "social",
			title: "follow us",
			titleIcon: "",
			details: [
				{
					url: "https://instagram.com/herzigsautogroup?utm_medium=copy_link",
					text: "",
					textIcon: <FaInstagram className="react-icons instagram" />,
				},
				{
					url: "https://www.youtube.com/channel/UC4vyaYZIL9KYgMRYW0SYWSg",
					text: "",
					textIcon: <FaYoutube className="react-icons youtube" />,
				},
			],
		},
	],
};

// Services Page
const servicesPage = {
	id: "services",
	heroTitle: "services",
	contentTitle: "what we can do for you...",
	contentText: ["Engine", "Steering", "Bodywork", "Suspension", "Tyres and Brakes", "Exhaust", "Mobile Services", "Fleet Services", "Other Services"],
};

// Partnership Page
const partnershipPage = {
	id: "partnership",
	heroTitle: "partnership",
	contentTitle: "olivia herzig",
	contentText: ["At Herzigs, we’re fortunate to be able to support family & friends in their motor sport ventures."],
	slides: [
		{
			id: "1",
			title: "",
		},
		{
			id: "2",
			title: "",
		},
		{
			id: "3",
			title: "",
		},
		{
			id: "4",
			title: "",
		},
		{
			id: "5",
			title: "",
		},
	],
	people: [
		{
			id: "olivia",
			name: "Olivia Herzig",
			position: "racer",
			desc: ["With the help of her mentor Simon Johnson, who himself has over 30 years experience on the track. Simon has encouraged Olivia to work hard on and off the track, learning the cars capabilities.", "With all the help from Simon, Olivia’ personal mechanic Asher, and mum and dads piggy bank, Olivia is now ready to hit the new season."],
			img: oliviaSrc,
			btn: "show more",
		},
		{
			id: "matt",
			name: "Matt Evans",
			position: "racer",
			desc: ["In 2018, Herzigs had the opportunity to team up with racing driver and family friend Matt Evans, to provide bodywork & signage for the 2018-2019 season.", "Car - Volkswagen Scirocco", "Milltek Sport Volkswagen Racing Cup"],
			img: oliviaSrc,
			btn: "show more",
		},
	],
};

const partnership = [
	{
		id: "olivia",
		url: "/olivia",
		heroTitle: "partnership",
		contentTitle: "Olivia Herzig",
		contentText: ["The first of our partnerships is one of our very own, a Herzig!", "Growing up within the family business, Olivia has always had a keen eye on the motor trade, and when the opportunity arose to get her hands on her very own racing car, mum & dad came to the rescue.", "After purchasing her first racing mini, Olivia couldn’t wait to start work personalising her new toy then itching to get to the track for her first drive."],
		links: [
			{
				url: "https://www.mynewsmag.co.uk/turbo-teen-young-radlett-racer-has-the-need-for-speed/",
				text: "Check out Olivia in the Local News!",
				textIcon: "",
			},
			{
				url: "https://www.youtube.com/channel/UC4vyaYZIL9KYgMRYW0SYWSg",
				text: "Follow Olivia on YouTube!",
				textIcon: <FaYoutube className="react-icons--xl youtube" />,
			},
		],
		slides: [
			{
				id: "1",
				title: "",
			},
			{
				id: "2",
				title: "",
			},
			{
				id: "3",
				title: "",
			},
			{
				id: "4",
				title: "",
			},
			{
				id: "5",
				title: "",
			},
		],
		people: [
			{
				id: "olivia",
				name: "Olivia Herzig",
				position: "racer",
				desc: ["With the help of her mentor Simon Johnson, who himself has over 30 years experience on the track. Simon has encouraged Olivia to work hard on and off the track, learning the cars capabilities.", "With all the help from Simon, Olivia’ personal mechanic Asher, and mum and dads piggy bank, Olivia is now ready to hit the new season."],
				img: oliviaSrc,
			},
		],
	},
	{
		id: "matt",
		url: "/matt",
		heroTitle: "partnership",
		contentTitle: "Matt Evans",
		contentText: ["At Herzigs, we’re fortunate to be able to support family & friends in their motor sport ventures.", "In 2018, Herzigs had the opportunity to team up with racing driver and family friend Matt Evans, to provide bodywork & signage for the 2018-2019 season."],
		slides: [
			{
				id: "1",
				title: "",
			},
			{
				id: "2",
				title: "",
			},
			{
				id: "3",
				title: "",
			},
			{
				id: "4",
				title: "",
			},
			{
				id: "5",
				title: "",
			},
		],
		people: [
			{
				id: "matt",
				name: "Matt Evans",
				position: "racer",
				desc: ["Car - Volkswagen Scirocco", "Milltek Sport Volkswagen Racing Cup"],
				img: mattSrc,
			},
		],
	},
];

// Restoration Page
const restorationPage = {
	id: "restoration",
	heroTitle: "classic car restoration",
	contentTitle: "restorations",
	contentText: ["Here at Herzigs, we pride ouselves in our work on cars old, new and somewhere in the middle.", "Our resident restoration specialist, Lee, has a number of restorations under his belt to include a Mk 2 Escort Van, Ford Sierra Cosworth, Ford Corsair and a Mk2 Jaguar to name but a few.", "The pleasure in seeing that old, rusty, worn out yet loved vehicle bought back to it’s former glory is an amazing sight and as it drives off from our workshop with its new owner proud behind the wheel again, it is a pleasure for all here at Herzigs, especially Lee."],
	people: [
		{
			id: "lee",
			name: "Lee Shadbolt",
			position: "restorations",
			desc: ["Lee is a Ford man at heart, but specialises in bringing old tired cars which have surpassed their life expectancy back to life, whatever make or model.", "He uses repair techniques and painting skills and ensures that he uses traditional methods where possible. This is Lee’s passion and he takes pride in every vehicle as if it was his own."],
			img: leeSrc,
		},
	],
};

const people = [
	{
		id: "jon",
		name: "Jon Herzig",
		position: "managing director",
		desc: ["Jon was born with cars running through his veins. He served an apprenticeship with Ford Motors to become a qualified mechanic.", "Jon has been in the motor trade since 1989, and has never lost the passion for Cars.", "Jon is a sucker for BMW's & loves Alpina's, but most of all, his wife and children are his world."],
		img: jonSrc,
	},
	{
		id: "alex",
		name: "Alex Herzig",
		position: "accounts director",
		desc: ["Alex shares Jon's passion for cars. She comes from a management and procurement background.", "Alex has been in the car industry for over 10 years and her nickname from Jon is 'Handbrake' because she is forever holding him back (for good reasons)!", "Alex enjoys cooking (the Best Sunday Roast EVER)! But most of all loves her Kids."],
		img: alexSrc,
	},
	{
		id: "steve",
		name: "Steve Hodges",
		position: "workshop manager",
		desc: ["Steve has been with Jon since 2001 and has been a professional fully qualified paint sprayer for over 30 years.", "He has a personal passion for perfection. Steve will not allow a vehicle to leave the workshop unless it meets his standard for Quality.", "His hobbies include sailing and Volvo's."],
		img: steveSrc,
	},
	{
		id: "daniel",
		name: "Daniel Taylor",
		position: "bodyshop manager",
		desc: ["Dan has been with us since 2007 and he is a fully qualified painter. Dan is also Mechanical Electrical Trim (MET) Qualified", "He is meticulously organised in the office.", "His passion is football, football and football. When he has time, he plays football.", "He also likes BMW's and playing darts."],
		img: danielSrc,
	},
];

const services = [
	{
		id: "mobileDent",
		contentTitle: "Mobile Dent Removal",
		text: ["Mobile dent removal is an extremely cost-effective solution for repairing damage to bodywork.", "This is a quick and cost effective solution for the everyday car park dings and small dents where the paint has not been damaged or chipped.", "This latest method of repairing small dents and car park dings is quicker and easier as well as more environmentally friendly.", "This repair method is available as a mobile service using specialist tools that massage the metal to it’s original position, providing the original paint is not damaged. Please contact us for more details."],
		slides: [
			{
				id: "1",
				title: "",
			},
			{
				id: "2",
				title: "",
			},
			{
				id: "3",
				title: "",
			},
		],
	},
	{
		id: "mobileServicing",
		contentTitle: "Mobile Servicing",
		h3: "Can't find time to go to the mechanic?",
		text: ["At Herzigs, we have completely re-imagined the experience of going to the mechanic. Fully licensed and insured, our mechanics can service your cars and small engines while you’re at home, at work, at the golf course, or pretty much anywhere.", "Vehicle failure never comes at a good time. Most likely you are in a position trying to handle work or family responsibilities and cannot deal with the stress and emotion being stranded or without your vehicle. Having the benefit of mobile car service is vital to being able to get back on your way with as little down time as possible. You can be confident in knowing that we understand your situation and are there to help.", "Please contact us for more information."],
	},
	{
		id: "mobileRecovery",
		contentTitle: "Vehicle Recovery",
		text: ["There are a few services that may require us to recover your vehicle to our workshop. We provide full location-to-location recovery here at Herzigs, so this is not a problem.", "We will repair your vehicle, and bring it back to you!", "We also offer a car transportation service, please call for details."],
		img: recovery,
	},
	{
		id: "mobileAudio",
		contentTitle: "Audio & Visual",
		subtitle: "Car Audio and Video",
		h3: "Why settle for your car's factory system?",
		text: ["Listen to your music the way it is meant to be heard with new speakers and more from the pros at Herzigs.", "When you want to improve the sound in your car, depend on our dedicated and knowledgeable professionals to help you find the right speakers, system and more for your car and your budget."],
		span: [
			{
				span: "Treat your ears to these car audio options",
				text: [],
			},
		],
		list: ["amplifiers", "speaker boxes", "speakers", "stereos", "subwoofers", "iPod / iPhone integrations", "flip-down monitors", "in-dash DVD", "in-dash navigation", "rear-seat monitors", "bluetooth", "Viper SmartStart"],
		img: viperSmart,
	},
	{
		id: "mobileFleet",
		contentTitle: "Mobile Fleet Servicing",
		text: ["Our technicians are fully equipped to service your companies fleet. As well as servicing, we are also able to offer the following…"],
		list: ["brake pads", "discs", "diagnostics", "batteries", "alternators", "starter motors", "radiators", "dent removal"],
		ps: "Please contact us for more information.",
		img: mobileFleet,
	},
	{
		id: "fleet",
		contentTitle: "Fleet Servicing",
		text: ["Herzigs understands the importance of a fleet operation and we pride ourselves on meeting your individual requirements. You can count on our highly trained technicians to keep your fleet running smoothly and efficiently – our techs are passionate about delivering service excellence in everything they do!"],
		span: [
			{
				span: "Our fleet servicing package offers:",
				text: [],
			},
		],
		list: ["Quick turnarounds on service & repairs", "Vehicle safety check & valet service", "Blue light vehicle maintenance", "16 week pre-maintenance inspections available", "Factory recommended maintenance services", "Complete repairs and maintenance", "Discounted labour rates", "Complete brake system maintenance and repairs", "Complete air conditioning systems maintenance and repair", "Computerised records of service and courtesy reminder notices", "30 day payment terms"],
	},
	{
		id: "engine",
		heroTitle: "Engine servicing",
		contentTitle: "Engine Servicing",
		h3: "Get the most out of your engine",
		text: ["For over 40 years, the Herzig family have been committed to providing outstanding customer service to all of our patrons.", "Our qualified technicians are technically trained in the latest repair and maintenance techniques, our service advisors are friendly and knowledgeable and we always deal fairly and honestly with our customers.", "Herzigs, conveniently located full-service facility contains service bays and the best in state-of-the-art repair and diagnostic equipment.", "We specialise in all aspects of automotive repair. We repair and service cars, light trucks and vans with parts and fluids that are equal to or exceed the standards of those originally used by the manufacturer."],
	},
	{
		id: "steering",
		contentTitle: "Steering Servicing",
		h3: "Get the Right Steering Repair for Your Vehicle",
		text: [
			"If you’re having difficulty steering, it could be caused by a wide variety of issues. If your steering wheel is hard to turn, or if you experience a jerking in the wheel, or your steering wheel is not sitting straight, you need to have your steering system inspected.",
			"You may also have strange noises coming from the steering column or the wheel wells when you make a turn. No matter what the specific problem, make sure you are getting superior service for your vehicle by bringing to us right away. We’ll get you in, diagnose the problem, and repair the steering system properly— giving you excellent handling again.",
			"Count on us to deliver the best possible steering repair service, so call now for your appointment. No matter what type of vehicle you drive, count on us for advanced steering repair that ensures safe, precise and reliable driving.",
			"When looking for accurate steering repair for your vehicle, we will help your car handle smoothly and deliver the precise driving you expect.",
			"With our experience and training, we can accurately diagnose your issue and conduct the steering repair you need. Don’t drive around any longer with steering problems; visit us today so you can drive with confidence.",
		],
	},
	{
		id: "bodywork",
		contentTitle: "Bodywork",
		text: [
			"Located in Colindale, our state of the art premises allows us to offer the highest standard in accident repairs.",
			"Our workshop is equipped with the latest technology including car bench jigging systems, combined with the very latest in paint repair technology, to ensure perfect body re-alignment and a faultless finish.",
			"We pride ourselves in ensuring that each vehicle is returned to it's owner, hand finished and fully repaired to our exceptionally high standard - totally complying with the original factory specifications.",
			"We use only original equipment parts in our repairs to ensure only the highest quality in everything we do.",
			"Spray Painting to Factory Quality.",
			"We incorporate state of the art, controlled environment spray booths, combined with the very latest in paint technology, to achieve a faultless finish.",
			"By incorporating only the best technology available in motor vehicle repair, we'll have your car back on the road looking as good as the day you bought it.",
		],
		slides: [
			{
				id: "1",
				title: "",
			},
			{
				id: "2",
				title: "",
			},
			{
				id: "3",
				title: "",
			},
		],
	},
	{
		id: "suspension",
		contentTitle: "Suspension Repair",
		h3: "Properly aligned steering and suspension can help deliver a smooth and controlled ride.",
		span: [
			{
				span: "What they do?",
				text: ["The steering system and shocks bear the weight of your vehicle, keep the tyres on the road when driving and help in delivering a smoother, more controlled trip."],
			},
			{
				span: "Why service is necessary?",
				text: ["The steering and suspension system needs to be checked a minimum of annually to prevent major repairs. Anytime you feel indicators of steering or suspension troubles have your mechanic evaluate your car to fix the complication swiftly. Prolonged steering and suspension issues will cause extreme safety risks in the future."],
			},
			{
				text: ["If you’re having to help check your steering and suspension systems are functioning effectively, a professional may examine all your steering and suspension parts, and will also check:"],
			},
		],
		text: ["If you’re having to help check your steering and suspension systems are functioning effectively, a professional may examine all your steering and suspension parts, and will also check:"],
		list: ["Power steering fluid", "Tightness of nuts and bolts", "Uneven tyres or wear", "Out of balance tyres", "Loose or used power steering belts", "Troubles with alignment", "Springs and/or Struts", "Steering Wheel Alignment"],
		ps: "Our specialists will also inspect your tyres and wheel balance to see to if the complications are not tyre-related. We will take care of all your steering requirements, call or stop in today for a quote!",
	},
	{
		id: "tyres",
		contentTitle: "Tyres",
		text: [
			"Let’s face it, tyres don’t last forever. The two main reasons for replacement are wear and damage.",
			"There are several ways to inspect your tyres. You can visually check their general condition and look for abnormal and uneven wear patterns. You could also perform the ‘20p Test’ or check to see if the “wear bars” are visible to ensure there is sufficient tread remaining to safely operate the vehicle under all driving conditions.",
			"Tyres may last 20,000 to 60,000 miles, depending upon quality and composition, but we recommend replacing your tyres when the wear bars are visible or there is less than 1.6mm of tread remaining (this is the legal limit). The ‘20p test’ works because the distance between the rim and ‘20p’ is 1.6mm - the minimum required tread depth. ",
			"When your tyres tread is lower than 1.6mm, your vehicle can develop handling problems. Installing new tires will not only increase your car’s fuel efficiency, but it will also improve your cars handling, braking ability and ride quality. From a safety standpoint, it should be pretty obvious.",
			"A driver’s ability to control their vehicle depends on the traction between their tyres and the road. Affect this, and it could ultimately lead to an accident. From an environmental point of view, better fuel economy is always good for the environment.",
		],
	},
	{
		id: "exhaust",
		contentTitle: "Exhaust",
		text: ["Your exhaust system is more than a muffler. It is a series of pipes that run under your car, connected to your silencer and catalytic converter. The main function of your exhaust system is to control noise and to funnel exhaust fumes away from passengers."],
		span: [
			{
				span: "How Does an Exhaust System Work?",
				text: ["In some ways, a car’s exhaust system works like a chimney on your house, directing the byproducts from burning fuel away from the people inside. A car’s exhaust system routes waste gases from the engine to the rear of the car, where they are discharged into the atmosphere.", "Exhaust gases contain dangerous substances such as carbon monoxide, which can be hazardous if allowed to flow into the passenger housing of the car.", "The exhaust system also converts pollutants into less harmful byproducts, reduces the noise of the engine, and directs exhaust gases so they can be used to heat air and fuel before they go into the engine’s cylinders to be burned.", "Finally, the exhaust system provides just the right amount of back pressure into the engine to improve its fuel-burning efficiency and increase performance. Key components of your exhaust system include:"],
			},
			{
				span: "Exhaust Pipes:",
				text: ["Designed specifically for each car model to properly route exhaust to the back of the car."],
			},
			{
				span: "Exhaust Manifold:",
				text: ["Acts like a funnel, collecting exhaust gases from all cylinders and releasing it through a single opening. Some engines have two."],
			},
			{
				span: "Catalytic Converter:",
				text: ["Designed to reduce the amount of harmful emissions products by transforming pollutants into water vapour and less harmful gases."],
			},
			{
				span: "Silencer:",
				text: ["Metal container with holes, baffles, and chambers that muffles exhaust noise."],
			},
			{
				span: "Resonator:",
				text: ["Works with the muffler to reduce noise."],
			},
			{
				span: "Tail Pipe:",
				text: ["Found at the back of the car, the tail pipe is designed to carry exhaust gases away from the vehicle.", "All components of the exhaust system are connected with a series of clamps, hangers, flanges, and gaskets."],
			},
		],
	},
	{
		id: "mot",
		contentTitle: "MOT's",
		text: ["If you are looking for a professional affordable MOT in London, then don't hesitate to get in touch with us at Herzigs!", "We offer great prices and friendly expert advice, and with years of experience with performing repairs and services for all domestic and light commercial vehicles, you can trust that we have the skills to get the job done with the minimum fuss.", "Is your MOT approaching and you don't think your car is ready? Don't despair! Give us a call"],
	},
	{
		id: "sensors",
		contentTitle: "Parking Sensors",
		text: ["Parking in small spaces while protecting your car. Reverse Sensor Systems helps you make parking easy, avoiding damage to your or another vehicle. Instant alerts to walls, low fences, bollards, parked cars etc, give you peace of mind. Reverse sensors make parking easier, especially for those with restricted mobility.", "The system is automatically activated when you engage reverse. Tiny sensors, which are normally fixed to the rear bumper, send and receive radio waves which “radar” off obstacles and alerts (combined audio and visual) to their presence. The closer you get to the hazard the higher the alert intensity becomes.", "Reverse Sensors are neat and highly effective. They can reduce stress and save you money by avoiding the “avoidable” accidents and preserving your no-claims. We can even colour code your sensors to match the colour of your bumper!"],
		img: sensor,
	},
	{
		id: "hands",
		contentTitle: "Hands Free Car Kits for Mobile Phones",
		text: [
			"Our team at Herzigs, will help you choose the best hands free car kit and installation by giving you the best comparison and best quality hands free car kit and installation based on your requirements and budget. Our expert and highly qualified engineers will carry out the installation at your premises. Our installers are friendly, helpful highly qualified so you and your car will be in safe hands.",
			"Handsfree car kits come with two options, hard wired, such as the Bury system, called the Bury UNI System 8 Handsfree Car Kit which is the best quality hands free offering universal choice of Cradles and Bluetooth options, alternatively Bluetooth hands free car kit installation, such as the Parrot or Bury.",
			"So whether it is a hands free car kit for your iPhone, or a hands free car kit for your Samsung, or a universal hands free car kit for any make or model of phone, we can give you the best quality advice, service, and installation via our expert installers, and great after sales care from our support team in the office.",
		],
		img: handsFree,
	},
];

function getService(elId, arr) {
	return arr.find(({ id }) => id === elId);
}

function getIndex(elId, arr) {
	let idsArr = [];
	for (let i = 0; i < arr.length; i++) {
		idsArr.push(arr[i].id);
	}
	return idsArr.indexOf(elId);
}

// export default data;
export { people, homePage, aboutPage, contactPage, servicesPage, partnershipPage, partnership, restorationPage, links, footer, services, getService, getIndex };
