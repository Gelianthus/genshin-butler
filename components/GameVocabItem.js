import Image from "next/image";

function GameVocabItem({ word, desc, img_src, img_alt }) {
	return (
		<div className="flex flex-row bg-teal-200 p-4">
			<div className="flex-grow">
				<h2 className="font-semibold">{word}</h2>
				<p>{desc}</p>
			</div>
			<Image
				src={img_src}
				alt={img_alt}
				width={120}
				height={120}
				className="block p-2 bg-teal-400"
			/>
		</div>
	);
}

export default GameVocabItem;
