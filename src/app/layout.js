// app/layout.js
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'My App',
  description: 'Description of my app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
