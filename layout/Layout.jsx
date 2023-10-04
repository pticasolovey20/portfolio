const Layout = ({ children }) => {
	return (
		<div className="min-h-screen w-full">
			<main className="min-h-screen w-full flex flex-col">{children}</main>
		</div>
	);
};

export default Layout;
