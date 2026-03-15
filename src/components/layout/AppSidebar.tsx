import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { useRole } from "@/context/RoleContext";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard, Users, Trophy, Calendar, ClipboardList, BarChart3,
  Settings, CreditCard, ScrollText, Building2, UserCheck, Medal,
  Swords, ListOrdered, FileText, Shield, Shirt, History, Wallet, UserPlus, QrCode,
  Monitor, MoreVertical, Zap, Lock, CheckSquare, Code, Key, Webhook, Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ownerNav = [
  { group: "Platform", items: [
    { title: "Overview", url: "/owner/overview", icon: LayoutDashboard },
    { title: "EO Management", url: "/owner/eo-management", icon: Building2 },
    { title: "Club Management", url: "/owner/club-management", icon: Shield },
    { title: "Financial", url: "/owner/financial", icon: CreditCard },
  ]},
  { group: "System", items: [
    { title: "Audit Log", url: "/owner/audit-log", icon: ScrollText },
    { title: "Config & RBAC", url: "/owner/config", icon: Settings },
  ]},
];

const eoNav = [
  { group: "Competition", items: [
    { title: "Overview", url: "/eo/overview", icon: LayoutDashboard },
    { title: "Competitions", url: "/eo/competitions", icon: Trophy },
    { title: "Club Registration", url: "/eo/registrations", icon: UserCheck },
  ]},
  { group: "Match Ops", items: [
    { title: "Schedule", url: "/eo/schedule", icon: Calendar },
    { title: "Match Sheet", url: "/eo/match-sheet", icon: ClipboardList },
    { title: "Standings", url: "/eo/standings", icon: ListOrdered },
    { title: "Reports", url: "/eo/reports", icon: BarChart3 },
  ]},
  { group: "Competition Mgmt", items: [
    { title: "Competition Setup", url: "/competition/setup", icon: Settings },
    { title: "User Management", url: "/competition/users", icon: Users },
    { title: "Rules", url: "/competition/rules", icon: ScrollText },
    { title: "Participant Registration", url: "/competition/registration", icon: UserPlus },
    { title: "Waivers", url: "/competition/waivers", icon: FileText },
    { title: "Matches", url: "/competition/matches", icon: Swords },
    { title: "Referees", url: "/competition/referees", icon: UserCheck },
    { title: "Scoring", url: "/competition/scoring", icon: BarChart3 },
    { title: "Prizes", url: "/competition/prizes", icon: Trophy },
    { title: "Documents", url: "/competition/documents", icon: ScrollText },
    { title: "Budget", url: "/competition/budget", icon: CreditCard },
    { title: "Approval", url: "/competition/approval", icon: CheckSquare },
    { title: "Announcements", url: "/competition/announcements", icon: Zap },
    { title: "Volunteers", url: "/competition/volunteers", icon: Users },
    { title: "Venues", url: "/competition/venues", icon: Building2 },
    { title: "Organization", url: "/competition/hierarchy", icon: Building2 },
  ]},
];

const clubNav = [
  { group: "Dashboard", items: [
    { title: "Overview", url: "/club/overview", icon: LayoutDashboard },
  ]},
  { group: "Squad Management", items: [
    { title: "Players", url: "/club/players", icon: Users },
    { title: "E-Card (QR)", url: "/club/ecard", icon: QrCode },
    { title: "Roster", url: "/club/roster", icon: UserPlus },
  ]},
  { group: "Match Management", items: [
    { title: "Match Day", url: "/club/match-day", icon: Swords },
    { title: "Match History", url: "/club/match-history", icon: History },
  ]},
  { group: "Training & Performance", items: [
    { title: "Training Schedule", url: "/club/training/schedule", icon: Calendar },
    { title: "Training Attendance", url: "/club/training/attendance", icon: CheckSquare },
    { title: "Player Statistics", url: "/club/analytics/player-statistics", icon: BarChart3 },
  ]},
  { group: "Staff Management", items: [
    { title: "Coaches", url: "/club/staff/coaches", icon: UserCheck },
    { title: "Medical Staff", url: "/club/staff/medical", icon: Shield },
  ]},
  { group: "Financial", items: [
    { title: "Financial Status", url: "/club/financial", icon: Wallet },
  ]},
];

const adminNav = [
  { group: "Dashboard", items: [
    { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
    { title: "Global Analytics", url: "/admin/analytics", icon: BarChart3 },
    { title: "Revenue Analytics", url: "/admin/revenue", icon: CreditCard },
  ]},
  { group: "Monitoring", items: [
    { title: "System Status", url: "/admin/system-monitoring", icon: Monitor },
    { title: "Users", url: "/admin/user-monitoring", icon: Users },
    { title: "Organizations", url: "/admin/organization-monitoring", icon: Building2 },
    { title: "Event Organizers", url: "/admin/eo-management", icon: UserCheck },
    { title: "Competitions", url: "/admin/competition-monitoring", icon: Trophy },
    { title: "Players", url: "/admin/player-monitoring", icon: Users },
    { title: "Matches", url: "/admin/match-monitoring", icon: Swords },
    { title: "Performance", url: "/admin/performance-monitoring", icon: Zap },
    { title: "Services", url: "/admin/service-monitoring", icon: MoreVertical },
    { title: "API Endpoints", url: "/admin/api-monitoring", icon: Code },
  ]},
  { group: "Platform", items: [
    { title: "Subscriptions", url: "/admin/subscriptions", icon: CreditCard },
    { title: "Billing", url: "/admin/billing", icon: Wallet },
    { title: "Fee Settings", url: "/admin/fee-settings", icon: Settings },
    { title: "Payment Reconciliation", url: "/admin/payment-reconciliation", icon: CheckSquare },
  ]},
  { group: "Configuration", items: [
    { title: "Platform Config", url: "/admin/platform-config", icon: Settings },
    { title: "Global Settings", url: "/admin/global-settings", icon: Settings },
    { title: "Localization", url: "/admin/localization", icon: MoreVertical },
    { title: "Branding", url: "/admin/branding", icon: Palette },
    { title: "Maintenance", url: "/admin/maintenance", icon: Zap },
  ]},
  { group: "System", items: [
    { title: "System Logs", url: "/admin/logs", icon: ScrollText },
    { title: "Backup", url: "/admin/backup", icon: FileText },
    { title: "Restore", url: "/admin/restore", icon: FileText },
    { title: "Data Export", url: "/admin/data-export", icon: FileText },
    { title: "Data Import", url: "/admin/data-import", icon: FileText },
    { title: "Feature Flags", url: "/admin/feature-flags", icon: Zap },
  ]},
  { group: "Security", items: [
    { title: "Error Tracking", url: "/admin/errors", icon: ScrollText },
    { title: "Access Logs", url: "/admin/access-logs", icon: ScrollText },
    { title: "Admin Activity", url: "/admin/admin-activity", icon: ScrollText },
    { title: "Security Alerts", url: "/admin/security-alerts", icon: Lock },
    { title: "Compliance", url: "/admin/compliance", icon: CheckSquare },
    { title: "Audit Reports", url: "/admin/audit-reports", icon: FileText },
  ]},
  { group: "Developer", items: [
    { title: "API Keys", url: "/admin/api-keys", icon: Key },
    { title: "API Usage", url: "/admin/api-usage", icon: BarChart3 },
    { title: "Webhooks", url: "/admin/webhooks", icon: Webhook },
    { title: "Integrations", url: "/admin/integrations", icon: Zap },
  ]},
];

const navMap = { owner: ownerNav, eo: eoNav, club: clubNav, admin: adminNav };

export function AppSidebar() {
  const { role } = useRole();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const nav = navMap[role];

  const roleColors: Record<string, string> = {
    owner: "bg-gold text-gold-foreground",
    eo: "bg-primary text-primary-foreground",
    club: "bg-navy text-navy-foreground",
    admin: "bg-slate-600 text-white",
  };
  const roleLabels: Record<string, string> = {
    owner: "Owner",
    eo: "Event Organizer",
    club: "Club",
    admin: "System Admin",
  };

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className={cn("flex items-center gap-3 overflow-hidden", collapsed && "justify-center")}>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <Medal className="w-4 h-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <p className="text-sidebar-foreground font-semibold text-sm leading-tight">FootballOS</p>
              <span className={cn("text-[10px] px-1.5 py-0.5 rounded font-semibold", roleColors[role])}>
                {roleLabels[role]}
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="py-2">
        {nav.map((group) => (
          <SidebarGroup key={group.group}>
            {!collapsed && (
              <SidebarGroupLabel className="text-sidebar-foreground/40 text-[10px] uppercase tracking-widest px-4 py-2">
                {group.group}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = location.pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          end
                          className={cn(
                            "flex items-center gap-3 px-4 py-2 rounded-md text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors mx-1",
                            collapsed && "justify-center px-2",
                          )}
                          activeClassName="bg-sidebar-accent text-sidebar-foreground font-medium"
                        >
                          <item.icon className={cn("w-4 h-4 flex-shrink-0", isActive && "text-sidebar-primary")} />
                          {!collapsed && <span>{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
