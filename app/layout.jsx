import MainHeader from "@/components/MainHeader";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description:
    "Refeições deliciosas, compartilhadas por uma comunidade apaixonada por comida.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
