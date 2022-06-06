import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

export const imagePaths = ["1", "2", "3", "4"];

const ImagePage = ({ imageid }: { imageid: string }) => {
	return (
		<div>
			<h1>Image Page {imageid}</h1>
			<Image src={`/${imageid}.png`} width={158} height={159} alt={imageid} />
			<p>
				<Link href="/">Home</Link>
			</p>
		</div>
	);
};

export const getStaticProps: GetStaticProps = ({ params }) => {
	let imageid = params?.imageid;
	return { props: { imageid } };
};

export const getStaticPaths: GetStaticPaths = () => ({
	paths: imagePaths.map((imageid) => ({ params: { imageid } })),
	fallback: false,
});

export default ImagePage;
