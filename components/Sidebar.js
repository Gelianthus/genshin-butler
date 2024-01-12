import Link from "next/link";
import { rowdies } from "@/lib/fonts";

function Sidebar() {
	return (
		<div className="hidden sm:block sm:w-[32rem]">
			<nav>
				<ul className={`${rowdies.className} p-4`}>
					<li>
						<Link
							className="block p-2  hover:text-teal-600 active:text-teal-800"
							href={""}
						>
							Characters
						</Link>
					</li>
					<li>
						<Link
							className="block p-2  hover:text-teal-600 active:text-teal-800"
							href={""}
						>
							Pricing
						</Link>
					</li>
					<li>
						<Link
							className="block p-2  hover:text-teal-600 active:text-teal-800"
							href={"/game-vocabulary"}
						>
							Game Vocabulary
						</Link>
					</li>
					<li>
						<Link
							className="block p-2  hover:text-teal-600 active:text-teal-800"
							href={"/about"}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className="block p-2  hover:text-teal-600 active:text-teal-800"
							href={"/terms-and-conditions"}
						>
							Terms and Conditions
						</Link>
					</li>
					<li>
						<Link
							className="block p-2  hover:text-teal-600 active:text-teal-800"
							href={"/privacy"}
						>
							Privacy
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;
