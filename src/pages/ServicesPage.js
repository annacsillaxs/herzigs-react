import React, { useEffect, useRef } from "react";
import { Outlet, useParams } from "react-router";
import StyledToolbar from "../components/StyledToolbar";
import Hero from "../components/Hero";
import { services, servicesPage, getIndex } from "../data";

const ServicesPage = () => {
	const { serviceId } = useParams();
	const idx = getIndex(serviceId, services);
	const containerRef = useRef(null);

	useEffect(() => {
		document.title = "HERZIGS | Services";

		const containerFromTop = containerRef.current.offsetTop;
		const navHeight = 94;

		window.scrollTo({ top: containerFromTop - navHeight, left: 0, behavior: "smooth" });
	}, [serviceId, idx]);

	return (
		<main id="services" className="services">
			<Hero data={servicesPage} service={serviceId} index={idx} title={services} />

			<div ref={containerRef}>
				<StyledToolbar data={services} id={serviceId} services={true} />
			</div>

			<Outlet />
		</main>
	);
};

export default ServicesPage;
