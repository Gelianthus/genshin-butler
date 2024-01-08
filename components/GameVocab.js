import GameVocabItem from "./GameVocabItem";
import { rowdies } from "@/lib/fonts";

function GameVocab() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-grow p-4 sm:p-8 lg:p-16 bg-teal-300">
				<h1 className={`my-8 font-bold text-xl ${rowdies.className}`}>
					lorem ipsum dolor sit amet
				</h1>
				<section className="space-y-4">
					<GameVocabItem
						word={"placeholder name, lorem ipsum dolor sit amet"}
						desc={"description placeholder, lorem ipsum dolor sit amet"}
						img_src={"/vercel.svg"}
						img_alt={"placeholder image"}
					/>
					<GameVocabItem
						word={"placeholder name, lorem ipsum dolor sit amet"}
						desc={"description placeholder, lorem ipsum dolor sit amet"}
						img_src={"/next.svg"}
						img_alt={"placeholder image"}
					/>
				</section>
			</main>
		</div>
	);
}

export default GameVocab;
