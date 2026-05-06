import { NavLink } from "react-router-dom";
import { ADMIN_NAV } from "./admin.nav";

export const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-border font-bold text-lg">
        FURNIForge
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-3 space-y-6">
        {ADMIN_NAV.map((section) => (
          <div key={section.label}>
            <p className="text-xs text-muted-foreground mb-2 px-2">
              {section.label}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  end={item.path === "/admin"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`
                  }
                >
                  <item.icon size={18} className="shrink-0" />
                  <span>{item.title}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border text-sm">Logout</div>
    </aside>
  );
};
