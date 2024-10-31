

import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { TrendingUp, User, CreditCard, Activity } from "lucide-react";


import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"



export default function Home() {
  
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[1024px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>Está é a dashboard de administrador</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>JB</AvatarFallback>
              <AvatarImage src="https://cdn.sanity.io/images/de6myiul/production/f207cb188b410b095ad7d339e7e0c63d05237cc0-1000x1000.png"/>
            </Avatar>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Receita Total
                      </CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$49,999.89</div>
                      <p className="text-xs text-muted-foreground">
                        +20.1% em relação ao mês passado
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Inscrições
                      </CardTitle>
                      <User className="h-4 w-4 text-muted-foreground" /> 
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2990</div>
                      <p className="text-xs text-muted-foreground">
                        +180.1% em relação ao mês passado
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Vendas</CardTitle>
                      <CreditCard className="h-4 w-4 text-muted-foreground" /> 
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+12,999</div>
                      <p className="text-xs text-muted-foreground">
                        +19% em relação ao mês passado
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Activos Agora</CardTitle>
                      <Activity className="h-4 w-4 text-muted-foreground" /> 
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+999</div>
                      <p className="text-xs text-muted-foreground">
                        +201 desde a última hora
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            
          </div>
            
        </CardContent>
        
      </Card>

    </div>
    
  );
}
