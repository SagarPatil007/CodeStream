import Head from "next/head";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { RootState } from "@/store";
import { decrement, increment, incrementByAmount } from "@/store/counter-slice";
import Button from "@/components/button";

const Home: FC = () => {
	const { t } = useTranslation();
	const counterValue = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	console.log("Url : "+process.env.NEXT_PUBLIC_BASE_URL);
	console.log("Environmnet : "+process.env.NEXT_PUBLIC_ENVIRONMENT);

	return (
		<div>
			<div className="text-2xl text-red-600 text-center my-5">
				<p>Welcome</p>
			</div>
			<div className="text-xl text-green-500 text-center">
				<p>The Environmnet is {process.env.NEXT_PUBLIC_ENVIRONMENT}</p>
			</div>
		</div>
	);
};

export async function getServerSideProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}

export default Home;
