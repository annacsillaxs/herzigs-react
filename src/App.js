import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, About, Error, Services, Restoration, SingleService, Partnership, Partner } from "./pages";

function App({ children }) {
	return (
		<>
			<GlobalStyle />
			{children}
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services/" element={<Services />}>
						<Route path=":serviceId" element={<SingleService />} />
					</Route>
					<Route path="/restoration" element={<Restoration />} />
					<Route path="/partnership" element={<Partnership />}>
						<Route path=":partnerId" element={<Partner />} />
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
