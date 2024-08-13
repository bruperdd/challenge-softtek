import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olívia Martins</p>
          <p className="text-sm text-muted-foreground">
            olivia.martins@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">Chamado #1234</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">João Lima</p>
          <p className="text-sm text-muted-foreground">joao.lima@email.com</p>
        </div>
        <div className="ml-auto font-medium">Chamado #1235</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabela Nogueira</p>
          <p className="text-sm text-muted-foreground">
            isabela.nogueira@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">Chamado #1236</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Kowalski</p>
          <p className="text-sm text-muted-foreground">william@email.com</p>
        </div>
        <div className="ml-auto font-medium">Chamado #1237</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sofia Dias</p>
          <p className="text-sm text-muted-foreground">sofia.dias@email.com</p>
        </div>
        <div className="ml-auto font-medium">Chamado #1238</div>
      </div>
    </div>
  );
}
