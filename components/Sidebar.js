import Link from "next/link";

function Sidebar() {
	return (
		<div className="hidden sm:block sm:w-[32rem]">
			<nav>
				<ul className="p-4">
					<li>
						<Link
							className="block p-2"
							href={""}
						>
							Characters
						</Link>
					</li>
					<li>
						<Link
							className="block p-2"
							href={""}
						>
							Pricing
						</Link>
					</li>
					<li>
						<Link
							className="block p-2"
							href={"/game-vocabulary"}
						>
							Game Vocabulary
						</Link>
					</li>
					<li>
						<Link
							className="block p-2"
							href={"/about"}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className="block p-2"
							href={"/terms-and-conditions"}
						>
							Terms and Conditions
						</Link>
					</li>
					<li>
						<Link
							className="block p-2"
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
