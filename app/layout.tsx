import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ColorSchemeEnum } from 'next/dist/lib/metadata/types/metadata-types';
const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});
export const metadata: Metadata = {
	title: 'MS Dent',
	description: 'Praktyka stomatologiczna',
};
const colorScheme: ColorSchemeEnum = 'light dark';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<body
				className={`${roboto.className} 
				flex items-center flex-col antialiased max-w-7xl min-h-screen mx-auto overflow-x-hidden `}
				data-color-scheme={colorScheme}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
