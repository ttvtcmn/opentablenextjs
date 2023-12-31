import { Metadata } from "next";
import NavBar from "./components/NavBar";
import "./globals.css";
import AuthContext from "./context/AuthContext";

export const metadata: Metadata = {
  title: "Home | Opentable",
  description: "Learning Next.js SEO",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <AuthContext>
            <main className="max-w-screen-2xl m-auto bg-white">
              <NavBar />
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}
