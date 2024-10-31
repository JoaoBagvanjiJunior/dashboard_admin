import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Backend_URL } from "@/lib/Constants";
import { getServerSession } from "next-auth";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { TrendingUp, User, CreditCard, Activity } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

type Props = {
  params: {
    id: string;
  };
};

const ProfilePage = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const response = await fetch(Backend_URL + `/user/${props.params.id}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${session?.backendTokens.accessToken}`,
      "Content-Type": "application/json",
    },
  });
  // console.log({ response });
  const user = await response.json();

  return (
    <Card className="m-2 border rounded shadow overflow-hidden max-w-md">
      <CardHeader className="flex flex-col pb-3 bg-gradient-to-b from-slate-200 to-white text-slate-600">
        
        <Avatar>
          <AvatarFallback>JB</AvatarFallback>
          <AvatarImage src="https://cdn.sanity.io/images/de6myiul/production/f207cb188b410b095ad7d339e7e0c63d05237cc0-1000x1000.png" />
        </Avatar>
        <CardTitle className="text-sm font-medium text-black">Meu Perfil</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-1">
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <p className="text-slate-400">Nome:</p>
          <p className="text-slate-950">{user.name}</p>
        </div>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <p className="text-slate-400">E-mail:</p>
          <p className="text-slate-950">{user.email}</p>
        </div>
      </CardContent>
    </Card>
    
  );
};

export default ProfilePage;