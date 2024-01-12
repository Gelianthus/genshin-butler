import Link from "next/link";
import { rowdies } from "@/lib/fonts";
import ServiceList from "./ServiceList";
import Image from "next/image";
import TaylorSwiftAlbums from "listed-taylor-swift-albums";

function Main() {
	return (
		<main className="p-4 sm:p-8 lg:p-16 bg-teal-300">
			<div className="my-8">
				<div className="mb-4 flex flex-row items-center justify-center space-x-4">
					<Image
						src={"/genshin-impact-stickers/paimon/Paimon 6.png"}
						alt="paimon from genshin impact"
						width={64}
						height={64}
						className="block"
					/>
					<h1 className={`${rowdies.className} text-4xl font-bold text-center`}>
						Let's explore Teyvat together!
					</h1>
					<Image
						src={"/genshin-impact-stickers/paimon/Paimon 6.png"}
						alt="paimon from genshin impact"
						width={64}
						height={64}
						className="block"
					/>
				</div>

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
			<TaylorSwiftAlbums />
		</main>
	);
}

export default Main;
