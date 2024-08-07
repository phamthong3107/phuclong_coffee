import "@/public/css/bootstrap.min.css";
import Providers from "@/redux/providers";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
export const metadata = {
  title: "The Coffee Shop",
  description: "Website The Coffee Shop with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>
        <script src="https://kit.fontawesome.com/5bb7f261ca.js" crossOrigin="anonymous"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
