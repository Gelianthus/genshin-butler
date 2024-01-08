"use client";

import Link from "next/link";
import { useState } from "react";

function MobileMenu() {
	const [navVisible, setNavVisible] = useState(false);

	return (
		<div className="relative sm:hidden">
			<button
				onClick={() => setNavVisible((prevState) => !prevState)}
				className="absolute top-4 left-4 sm:hidden"
			>
				<span className="material-symbols-outlined">menu</span>
			</button>

			<nav
				className={`${
					navVisible ? "block" : "hidden"
				} absolute top-12 left-4 bg-teal-950 w-48`}
			>
				<ul className="p-4">
					<li>
						<Link
							className="p-2 block"
							href={""}
						>
							Characters
						</Link>
					</li>
					<li>
						<Link
							className="p-2 block"
							href={""}
						>
							Pricing
						</Link>
					</li>
					<li>
						<Link
							className="p-2 block"
							href={""}
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

export default MobileMenu;
