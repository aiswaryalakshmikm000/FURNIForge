import { Bell } from "lucide-react";
import { useState } from "react";

export const AdminHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-xl border-b border-border h-14 flex items-center justify-between px-6">
      
      <p className="text-sm text-muted-foreground">
        Admin Portal
      </p>

      <div className="flex items-center gap-4">
        
        {/* Notification */}
        <div className="relative">
          <button
            onClick={() => setShow(!show)}
            className="p-2 hover:bg-muted rounded-lg"
          >
            <Bell size={18} />
          </button>

          {show && (
            <div className="absolute right-0 mt-2 w-64 bg-card border rounded-xl shadow-lg p-3">
              <p className="text-sm">No notifications</p>
            </div>
          )}
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
          AD
        </div>
      </div>
    </header>
  );
};