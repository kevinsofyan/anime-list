import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import DefaultRouter from "./router/router";

function App() {
	return (
		<BrowserRouter>
			<DefaultRouter />
		</BrowserRouter>
	);
}

export default App;
