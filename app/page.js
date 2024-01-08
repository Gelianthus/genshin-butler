import Main from "@/components/Main";
import MobileMenu from "@/components/MobileMenu";
import Sidebar from "@/components/Sidebar";

export default function Home() {
	return (
		<div className="flex-grow flex flex-row">
			<Sidebar />
			<MobileMenu />
			<Main />
		</div>
	);
}
