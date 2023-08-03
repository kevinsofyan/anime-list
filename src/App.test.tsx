import { render } from "@testing-library/react";
import App from "./App";

describe("ListComponent", () => {
	it("renders app without error", () => {
		render(<App />);
	});
});
