import "./globals.css";
import Providers from "@/components/Providers"; // Providers já é um client component
import AppBar from "@/components/AppBar";
import SignInButton from "@/components/SignInButton";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import AuthenticatedLayout from "./AuthenticatedLayout";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <Providers> {/* O Providers precisa estar aqui para envolver todos os componentes */}
          <AuthenticatedLayout>{props.children}</AuthenticatedLayout>
        </Providers>
      </body>
    </html>
  );
}
