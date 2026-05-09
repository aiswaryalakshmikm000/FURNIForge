import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarHeader, SidebarFooter} from "../../shared/components/ui/sidebar";

import NavLink from "../../shared/components/common/nav-links";
import { CLIENT_NAV } from "./client.nav";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";
import { LogoutButton } from "../../shared/components/common/logout-button";
import { LogoutAllButton } from "../../shared/components/common/logout-all-button";

export const ClientSidebar = () => {
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
        {CLIENT_NAV.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.path}
                        end={item.path === APP_ROUTES.CLIENT.ROOT}
                        className="flex items-center gap-2"
                        activeClassName="bg-sidebar-accent text-white"
                      >
                        <item.icon className="h-4 w-4" />
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
