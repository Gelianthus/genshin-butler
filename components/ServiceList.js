import { rowdies } from "@/lib/fonts";
import Image from "next/image";

function ServiceList() {
	return (
		<ul>
			<li className="my-12">
				<h2 className={`${rowdies.className} mb-4 font-semibold text-cyan-950`}>
					Material Gathering
				</h2>
				<p className="text-cyan-900">
					I will help you clear camps and hunt common enemies. You will also be
					given access to my world to collect materials while yours is in the
					process of respawning. Includes all Minerals and Local Specialties.
				</p>
				<div></div>
			</li>
			<li className="my-12">
				<h2 className={`${rowdies.className} mb-4 font-semibold text-cyan-950`}>
					Weekly Boss
				</h2>
				<p className="text-cyan-900">
					I'll never pass up a chance to beat up Tartaglia.
				</p>
			</li>
			<li className="my-12">
				<h2 className={`${rowdies.className} mb-4 font-semibold text-cyan-950`}>
					World Boss
				</h2>
				<p className="text-cyan-900">
					Hypostases, Regisvine, and everything else. Who doesn't hate those
					hostile cubes and plants, right?
				</p>
			</li>
			<li className="my-12">
				<h2 className={`${rowdies.className} mb-4 font-semibold text-cyan-950`}>
					Overworld Puzzles
				</h2>
				<p className="text-cyan-900">
					Uncover secret treasures that requires another entity to activate.
				</p>
			</li>
			<li className="my-12">
				<h2 className={`${rowdies.className} mb-4 font-semibold text-cyan-950`}>
					Domain Challenges
				</h2>
				<p className="text-cyan-900">
					I'd rather clean up after Lantern Rite than do this chore, I'm sure
					you could somewhat resonate with this.
				</p>
			</li>
			<li className="my-12">
				<h2 className={`${rowdies.className} mb-4 font-semibold text-cyan-950`}>
					Exploration and other activities
				</h2>
				<p className="text-cyan-900">
					Explore uncharted areas to unlock your map. Activate all Teleport
					Waypoint and Statues of The Seven while revealing hidden Shrine of
					Depths location in the process.
					<br />
					Other activities includes Genius Invokation TCG and taking pictures
					in-game.
				</p>
			</li>
		</ul>
	);
}

export default ServiceList;
