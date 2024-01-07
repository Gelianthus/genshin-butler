import Link from "next/link";
import { rowdies } from "@/lib/fonts";
import ServiceList from "./ServiceList";

function Main() {
	return (
		<main className="flex-grow p-4 sm:p-8 lg:p-16 bg-teal-300">
			<div className="my-8">
				<h1
					className={`${rowdies.className} text-4xl font-bold text-center mb-4`}
				>
					Let's explore Teyvat together!
				</h1>
				<p className=" text-center font-semibold">
					Paimon is an excellent companion, but add another otherwordly being to
					your company and everything will be easy as the Tartaglia Weekly Boss.
				</p>
				<p className="mt-4 text-xs font-semibold text-center text-cyan-900">
					For a small small price of Intertwined Fates, <br />
					amount may vary based on different factors. <br /> See how its
					calculated{" "}
					<Link
						title="Pricing"
						href={""}
					>
						here
					</Link>
					.
				</p>
			</div>
			<ServiceList />
		</main>
	);
}

export default Main;
