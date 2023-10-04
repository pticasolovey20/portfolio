const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex">
			<main className="flex-grow">{children}</main>
		</div>
	);
};

export default Layout;
