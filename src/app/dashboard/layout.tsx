import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Button } from "@/components/ui/button";
import { PersonIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-2 border-r shadow p-4">
        <Link
          className={cn(['flex items-center text-sm px-3 py-2 rounded-md transition-colors','text-gray-500 hover:text-gray-800'])}
          href={`/dashboard/user/${session?.user.id}`}
        >
          <PersonIcon className="w-5 h-5 mr-3" />Meu Perfil
        </Link>
      </div>
      <div className="col-span-9 p-4">{props.children}</div>
    </div>
  );
};

export default DashBoardLayout;