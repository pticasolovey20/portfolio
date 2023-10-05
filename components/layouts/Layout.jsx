import Header from "../header/Header";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex justify-center text-white leading-none bg-primary-background">
			<Header />
			<main className="min-h-screen w-full">{children}</main>
		</div>
	);
};

export default Layout;
