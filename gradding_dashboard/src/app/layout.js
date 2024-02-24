import { Roboto } from "next/font/google";
import "./globals.css";
import "./styles/global.scss";
import Sidebar from "./ui/dashboard/sidebar/Sidebar";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Gradding Dashboard",
  description: "Gradding Ielts Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
