"use client";

import { useSession } from "next-auth/react";
import AppBar from "@/components/AppBar";
import SignInButton from "@/components/SignInButton";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface Props {
  children: React.ReactNode;
}

export default function AuthenticatedLayout({ children }: Props) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <AppBar />
        {children}
      </>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-150 h-80 flex flex-col items-center justify-center text-center shadow-lg rounded-lg bg-white">
          <CardContent>
            <CardTitle className="text-2xl font-bold text-gray-800">Bem-vindo!</CardTitle>
            <p className="mt-4 mb-8 text-gray-600 text-sm">
              Por favor, faça login para acessar o dashboard.
            </p>
            <div className="mt-auto">
                <SignInButton />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
