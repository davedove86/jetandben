import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';

const MainLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				<main>
					<div>{children}</div>
				</main>
			</body>
		</html>
	);
};

export default MainLayout;
