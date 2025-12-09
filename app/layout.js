import "./globals.css";

export const metadata = {
  title: "Chandni Chowk Ki Secret Kahani: Aaj Raat 12 Baje Kaun Kholega Jaadu Darwaza?",
  description:
    "Ek hinglish fairy tale title jo har umar ke liye curiosity aur excitement paida karta hai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-body">{children}</body>
    </html>
  );
}
