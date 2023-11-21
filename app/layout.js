import FullScreenNavbar from "@/components/FullScreenNavbar";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Navigation from "@/components/Navigation";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import ToastProvider from "@/components/ToastProvider";

export const metadata = {
  title: "Primestix.ng",
  description: "Most Trusted Property and real estate partners in Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Here Synchronous scripts must not be added */}
      <body className="">
        <div className="fixed top-0 w-full bg-white z-[9999] shadow-lg">
          <FullScreenNavbar />
        </div>
        <ToastProvider />
        {children}
        <div>
          <Navigation />{" "}
        </div>
      </body>
    </html>
  );
}
