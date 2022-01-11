import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router";
import StyledToolbar from "../components/StyledToolbar";
import Hero from "../components/Hero";
import { services, servicesPage, getIndex } from "../data";

const ServicesPage = () => {
	const { serviceId } = useParams();
	const idx = getIndex(serviceId, services);

	useEffect(() => {
		document.title = "HERZIGS | Services";

		window.scrollTo(0, 0);
	}, []);

	return (
		<main id="services" className="services">
			<Hero data={servicesPage} service={serviceId} index={idx} title={services} />

			<StyledToolbar data={services} id={serviceId} services={true} />

			<Outlet />
		</main>
	);
};

export default ServicesPage;
