import { Icon } from "@iconify-icon/react";
import { Link } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const data = {
  navMain: [
    {
      title: "Components",
      url: "/admin/components",
      icon: "lucide:layout-dashboard",
    },
    {
      title: "Hero",
      url: "/admin/hero",
      icon: "lucide:sparkles",
    },
    {
      title: "About",
      url: "/admin/about",
      icon: "lucide:user",
    },
    {
      title: "Experiences",
      url: "/admin/experiences",
      icon: "lucide:briefcase",
    },
    {
      title: "Projects",
      url: "/admin/projects",
      icon: "lucide:folder",
    },
    {
      title: "Techstack",
      url: "/admin/techstack",
      icon: "lucide:bug",
    },
    {
      title: "Education",
      url: "/admin/education",
      icon: "lucide:graduation-cap",
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <span className="font-semibold text-lg">Admin Panel</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="px-4 py-2 text-sm text-muted-foreground">
          Portfolio CMS
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: string;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link to={item.url}>
                  {item.icon && <Icon icon={item.icon} />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
