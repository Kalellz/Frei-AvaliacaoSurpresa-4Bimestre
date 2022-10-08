import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/App.js';
import VendaAcai from './Pages/VendaAcai/App.js';
import Signo from './Pages/Signo/App.js';
import Sorveteria from './Pages/Sorveteria/App.js';

export default function Index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/VendaAcai" element={<VendaAcai />} />
				<Route path="/Signo" element={<Signo />} />
				<Route path="/Sorveteria" element={<Sorveteria />} />
			</Routes>
		</BrowserRouter>
	);
}