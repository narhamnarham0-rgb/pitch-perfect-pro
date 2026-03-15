import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RoleProvider } from "@/context/RoleContext";
import { AppShell } from "@/components/layout/AppShell";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Owner pages
import {
  OwnerOverview,
  EOManagement,
  ClubManagement_owner as ClubManagement,
  OwnerFinancial,
  AuditLog,
  SystemConfig
} from "./modules/owner";

// EO pages
import EOOverview from "./pages/eo/EOOverview";
import Competitions from "./pages/eo/Competitions";
import CreateCompetition from "./pages/eo/CreateCompetition";
import ClubRegistrations from "./pages/eo/ClubRegistrations";
import Schedule from "./pages/eo/Schedule";
import MatchSheet from "./pages/eo/MatchSheet";
import Standings from "./pages/eo/Standings";
import Reports from "./pages/eo/Reports";

// Match Management pages
import MatchScheduler from "./pages/match/setup/MatchScheduler";
import RefereeAssignment from "./pages/match/setup/RefereeAssignment";
import LineupSubmission from "./pages/match/lineup/LineupSubmission";
import MatchEvents from "./pages/match/events/MatchEvents";
import MatchTimeline from "./pages/match/data/MatchTimeline";
import MatchStatistics from "./pages/match/data/MatchStatistics";
import PlayerRatings from "./pages/match/data/PlayerRatings";
import TacticalAnalysis from "./pages/match/analytics/TacticalAnalysis";
import MatchArchive from "./pages/match/archive/MatchArchive";

// Competition pages
import CompetitionOverview from "./pages/competition/CompetitionOverview";
import CompetitionSetup from "./pages/competition/CompetitionSetup";
import CompetitionDetails from "./pages/competition/CompetitionDetails";
import CompetitionUserManagement from "./pages/competition/UserManagement";
import CompetitionRules from "./pages/competition/CompetitionRules";
import ParticipantRegistration from "./pages/competition/ParticipantRegistration";
import WaiverManagement from "./pages/competition/WaiverManagement";
import MatchManagement from "./pages/competition/MatchManagement";
import CompetitionRefereeAssignment from "./pages/competition/RefereeAssignment";
import ScoringSystem from "./pages/competition/ScoringSystem";
import PrizePrizeDistribution from "./pages/competition/PrizePrizeDistribution";
import DocumentManagement from "./pages/competition/DocumentManagement";
import CompetitionBudget from "./pages/competition/CompetitionBudget";
import CompetitionApproval from "./pages/competition/CompetitionApproval";
import Announcement from "./pages/competition/Announcement";
import CompetitionReports from "./pages/competition/CompetitionReports";
import VolunteerManagement from "./pages/competition/VolunteerManagement";
import VenueManagement from "./pages/competition/VenueManagement";
import OrganizationHierarchy from "./pages/competition/OrganizationHierarchy";
import RegistrationStatus from "./pages/competition/RegistrationStatus";

// Club pages
import ClubOverview from "./pages/club/ClubOverview";
import Players from "./pages/club/Players";
import ECard from "./pages/club/ECard";
import Roster from "./pages/club/Roster";
import MatchDay from "./pages/club/MatchDay";
import MatchHistory from "./pages/club/MatchHistory";
import ClubFinancial from "./pages/club/ClubFinancial";
// Club Training pages
import TrainingSchedule from "./pages/club/training/TrainingSchedule";
import TrainingAttendance from "./pages/club/training/TrainingAttendance";
// Club Staff pages
import CoachManagement from "./pages/club/staff/CoachManagement";
import MedicalStaff from "./pages/club/staff/MedicalStaff";
// Club Analytics pages
import PlayerStatistics from "./pages/club/analytics/PlayerStatistics";

// Admin pages - imported from new modular structure
import {
  OwnerDashboard,
  GlobalAnalytics,
  RevenueAnalytics,
  SystemMonitoring,
  UserManagement,
  OrganizationMonitoring,
  CompetitionMonitoring,
  PlayerMonitoring,
  MatchMonitoring,
  PerformanceMonitoring,
  ServiceMonitoring,
  APIMonitoring,
  SubscriptionManagement,
  BillingManagement,
  PlatformFeeSettings,
  PaymentReconciliation,
  PlatformConfiguration,
  SystemSettings,
  LocalizationSettings,
  BrandingConfiguration,
  MaintenanceMode,
  LogManagement,
  SystemBackup,
  SystemRestore,
  DataExport,
  DataImport,
  FeatureFlags,
  ErrorTracking,
  AccessLogs,
  SecurityAudit,
  SecurityAlerts,
  ComplianceReports,
  APIKeyManagement,
  APIUsageAnalytics,
  WebhookManagement,
  IntegrationSettings
} from "./modules/owner";

// Aliases for backward compatibility with old names
const PlatformDashboard = OwnerDashboard;
const AdminUserManagement = UserManagement;
const UserMonitoring = AdminUserManagement;
const EventOrganizerManagement = EOManagement;
const FeatureFlagManagement = FeatureFlags;
const GlobalSettings = SystemSettings;
const SystemLogs = LogManagement;
const PlatformBilling = BillingManagement;
const AdminActivityLog = SecurityAudit;
const ComplianceDashboard = ComplianceReports;
const AuditReports = SecurityAudit;

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ErrorBoundary>
        <BrowserRouter>
          <RoleProvider>
            <AppShell>
              <Routes>
              <Route path="/" element={<Navigate to="/owner/dashboard" replace />} />
              {/* Owner - Dashboard */}
              <Route path="/owner/dashboard" element={<OwnerDashboard />} />
              <Route path="/owner/overview" element={<OwnerOverview />} />
              {/* Owner - Platform Management */}
              <Route path="/owner/platform-management/configuration" element={<PlatformConfiguration />} />
              <Route path="/owner/platform-management/settings" element={<SystemSettings />} />
              <Route path="/owner/platform-management/features" element={<FeatureFlags />} />
              <Route path="/owner/platform-management/maintenance" element={<MaintenanceMode />} />
              <Route path="/owner/platform-management/branding" element={<BrandingConfiguration />} />
              <Route path="/owner/platform-management/integrations" element={<IntegrationSettings />} />
              <Route path="/owner/platform-management/localization" element={<LocalizationSettings />} />
              {/* Owner - Users */}
              <Route path="/owner/users/management" element={<UserManagement />} />
              <Route path="/owner/users/audit" element={<UserAuditLog />} />
              <Route path="/owner/users/logs" element={<AuditLog />} />
              {/* Owner - Organizations */}
              <Route path="/owner/organizations/clubs" element={<ClubManagement />} />
              <Route path="/owner/organizations/event-organizers" element={<EOManagement />} />
              <Route path="/owner/organizations/monitoring" element={<OrganizationMonitoring />} />
              <Route path="/owner/organizations/subscriptions" element={<SubscriptionManagement />} />
              {/* Owner - Competitions */}
              <Route path="/owner/competitions/monitoring" element={<CompetitionMonitoring />} />
              <Route path="/owner/competitions/matches" element={<MatchMonitoring />} />
              <Route path="/owner/competitions/players" element={<PlayerMonitoring />} />
              {/* Owner - Finance */}
              <Route path="/owner/finance/dashboard" element={<OwnerFinancial />} />
              <Route path="/owner/finance/reconciliation" element={<PaymentReconciliation />} />
              <Route path="/owner/finance/fee-settings" element={<PlatformFeeSettings />} />
              <Route path="/owner/finance/billing" element={<BillingManagement />} />
              {/* Owner - Analytics */}
              <Route path="/owner/analytics/global" element={<GlobalAnalytics />} />
              <Route path="/owner/analytics/revenue" element={<RevenueAnalytics />} />
              {/* Owner - Infrastructure */}
              <Route path="/owner/infrastructure/system-monitoring" element={<SystemMonitoring />} />
              <Route path="/owner/infrastructure/performance" element={<PerformanceMonitoring />} />
              <Route path="/owner/infrastructure/services" element={<ServiceMonitoring />} />
              <Route path="/owner/infrastructure/logs" element={<LogManagement />} />
              <Route path="/owner/infrastructure/backup" element={<SystemBackup />} />
              <Route path="/owner/infrastructure/restore" element={<SystemRestore />} />
              <Route path="/owner/infrastructure/errors" element={<ErrorTracking />} />
              <Route path="/owner/infrastructure/access-logs" element={<AccessLogs />} />
              {/* Owner - Security */}
              <Route path="/owner/security/alerts" element={<SecurityAlerts />} />
              <Route path="/owner/security/reports" element={<ComplianceReports />} />
              <Route path="/owner/security/audit" element={<SecurityAudit />} />
              {/* Owner - Developer Tools */}
              <Route path="/owner/developer-tools/api-keys" element={<APIKeyManagement />} />
              <Route path="/owner/developer-tools/webhooks" element={<WebhookManagement />} />
              <Route path="/owner/developer-tools/monitoring" element={<APIMonitoring />} />
              {/* Owner - Compliance */}
              <Route path="/owner/compliance/config" element={<SystemConfig />} />
              <Route path="/owner/compliance/import" element={<DataImport />} />
              <Route path="/owner/compliance/export" element={<DataExport />} />
              {/* Backward compatibility redirects */}
              <Route path="/admin/*" element={<Navigate to="/owner/dashboard" replace />} />
              {/* EO */}
              <Route path="/eo/overview" element={<EOOverview />} />
              <Route path="/eo/competitions" element={<Competitions />} />
              <Route path="/eo/competitions/create" element={<CreateCompetition />} />
              <Route path="/eo/registrations" element={<ClubRegistrations />} />
              <Route path="/eo/schedule" element={<Schedule />} />
              <Route path="/eo/match-sheet" element={<MatchSheet />} />
              <Route path="/eo/standings" element={<Standings />} />
              <Route path="/eo/reports" element={<Reports />} />
              {/* Match Management */}
              <Route path="/match/scheduler" element={<MatchScheduler />} />
              <Route path="/match/referees" element={<RefereeAssignment />} />
              <Route path="/match/lineup" element={<LineupSubmission />} />
              <Route path="/match/events" element={<MatchEvents />} />
              <Route path="/match/timeline" element={<MatchTimeline />} />
              <Route path="/match/statistics" element={<MatchStatistics />} />
              <Route path="/match/ratings" element={<PlayerRatings />} />
              <Route path="/match/tactics" element={<TacticalAnalysis />} />
              <Route path="/match/archive" element={<MatchArchive />} />
              {/* Competition */}
              <Route path="/competition/overview" element={<CompetitionOverview />} />
              <Route path="/competition/setup" element={<CompetitionSetup />} />
              <Route path="/competition/details" element={<CompetitionDetails />} />
              <Route path="/competition/users" element={<CompetitionUserManagement />} />
              <Route path="/competition/rules" element={<CompetitionRules />} />
              <Route path="/competition/registration" element={<ParticipantRegistration />} />
              <Route path="/competition/waivers" element={<WaiverManagement />} />
              <Route path="/competition/matches" element={<MatchManagement />} />
              <Route path="/competition/referees" element={<CompetitionRefereeAssignment />} />
              <Route path="/competition/scoring" element={<ScoringSystem />} />
              <Route path="/competition/prizes" element={<PrizePrizeDistribution />} />
              <Route path="/competition/documents" element={<DocumentManagement />} />
              <Route path="/competition/budget" element={<CompetitionBudget />} />
              <Route path="/competition/approval" element={<CompetitionApproval />} />
              <Route path="/competition/announcements" element={<Announcement />} />
              <Route path="/competition/reports" element={<CompetitionReports />} />
              <Route path="/competition/volunteers" element={<VolunteerManagement />} />
              <Route path="/competition/venues" element={<VenueManagement />} />
              <Route path="/competition/hierarchy" element={<OrganizationHierarchy />} />
              <Route path="/competition/status" element={<RegistrationStatus />} />
              {/* Club */}
              <Route path="/club/overview" element={<ClubOverview />} />
              <Route path="/club/players" element={<Players />} />
              <Route path="/club/ecard" element={<ECard />} />
              <Route path="/club/roster" element={<Roster />} />
              <Route path="/club/match-day" element={<MatchDay />} />
              <Route path="/club/match-history" element={<MatchHistory />} />
              <Route path="/club/financial" element={<ClubFinancial />} />
              {/* Club Training routes */}
              <Route path="/club/training/schedule" element={<TrainingSchedule />} />
              <Route path="/club/training/attendance" element={<TrainingAttendance />} />
              {/* Club Staff routes */}
              <Route path="/club/staff/coaches" element={<CoachManagement />} />
              <Route path="/club/staff/medical" element={<MedicalStaff />} />
              {/* Club Analytics routes */}
              <Route path="/club/analytics/player-statistics" element={<PlayerStatistics />} />
              {/* 404 - Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppShell>
        </RoleProvider>
      </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
