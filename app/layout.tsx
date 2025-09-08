
import Layout from "./components/NaveBar/layout";
import NaveBar from "./components/NaveBar/page";
import { ShoppingContextProvider } from "./context/ShoppingContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <ShoppingContextProvider>
          <Layout >{children}</Layout>
        </ShoppingContextProvider>

      </body>
    </html>
  );
}
