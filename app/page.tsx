import DashboardCard from "@/components/dashboard/DashboardCard";
import {Newspaper, Folders, User, MessageCircle} from "lucide-react";

export default function Home() {
    return (<>
            <div className="flex flex-col md:flex-row justify-between gap-5 mb">
                <DashboardCard title='Posts' count={1000} icon={<Newspaper className='text-slate-500' size={72}/>}/>
                <DashboardCard title='Categories' count={12}
                               icon={<Folders className='text-slate-500' size={72}/>}/>
                <DashboardCard title='Users' count={270} icon={<User className='text-slate-500' size={72}/>}/>
                <DashboardCard title='Comment' count={1100}
                               icon={<MessageCircle className='text-slate-500' size={72}/>}/>
            </div>
        </>
    )
}
