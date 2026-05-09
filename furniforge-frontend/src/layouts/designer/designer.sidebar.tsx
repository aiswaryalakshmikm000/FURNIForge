import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "../../shared/components/ui/sidebar";

import NavLink from "../../shared/components/common/nav-links";
import { DESIGNER_NAV } from "./designer.nav";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";
import { LogoutButton } from "../../shared/components/common/logout-button";
import { LogoutAllButton } from "../../shared/components/common/logout-all-button";

export const DesignerSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-copper flex items-center justify-center text-accent-foreground">
            F
          </div>
          <span className="text-lg font-bold font-display">FURNIForge</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {DESIGNER_NAV.map((section) => (
          <SidebarGroup key={section.label}>
            <SidebarGroupLabel> {section.label} </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.path}
                        end={item.path === APP_ROUTES.DESIGNER.ROOT}
                        className="flex items-center gap-2"
                        activeClassName="bg-sidebar-accent text-white"
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <LogoutButton/>
        <LogoutAllButton/>
      </SidebarFooter>
    </Sidebar>
  );
};