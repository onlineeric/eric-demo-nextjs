import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[16rem_1fr] min-h-dvh">
      <div className="col-span-2">
        <Topbar />
      </div>
      <Sidebar />
      <main className="p-4">{children}</main>
    </div>
  );
}