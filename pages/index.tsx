import type { NextPage } from "next";
import { imagePaths } from "./[imageid]";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div>
			Image pages:
			{imagePaths.map((imageid) => (
				<Link href={"/" + imageid} key={imageid}>
					{" " + imageid + " "}
				</Link>
			))}
		</div>
	);
};

export default Home;
