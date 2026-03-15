# Application Structure - Quick Reference Guide

## Module Directory Map

```
/src/pages/
├── admin/              (40 files)   Platform management & monitoring
├── analytics/          (14 files)   Cross-domain analytics
│   ├── match/         (5 files)
│   ├── player/        (5 files)
│   ├── standings/     (5 files)
│   └── team/          (5 files)
├── club/              (40+ files)  Club operations
│   ├── core/          (5 files)
│   ├── academy/       (5 files)
│   ├── analytics/     (5 files)
│   ├── player/        (10 files)
│   ├── roster/
│   ├── training/
│   ├── staff/
│   ├── finance/
│   └── fan/
├── competition/       (47 files)   Tournament management
├── eo/                (8 files)    Event Organizer dashboard
├── finance/           (25+ files)  Payments & subscriptions
│   ├── subscriptions/ (5 files)
│   ├── billing/       (5 files)
│   ├── payments/      (5 files)
│   └── [7 more subdirs]
├── match/             (12 files)   Match operations
│   ├── setup/         (2 files)
│   ├── lineup/        (1+ files)
│   ├── events/        (1+ files)
│   ├── data/          (3 files)
│   ├── analytics/     (1 file)
│   └── archive/       (1 file)
├── organization/      (34 files)   Org structure & management
├── owner/             (6 files)    Platform owner oversight
├── public/            (5 files)    Public-facing pages
├── Index.tsx
└── NotFound.tsx
```

## Component Architecture

### Hierarchy
```
/src/components/
├── ui/             (40+ shadcn/ui components)
├── layout/         (3 files)    - AppShell, AppSidebar, TopHeader
├── shared/         (8 files)    - Business-logic components
│   ├── MatchCard
│   ├── DataTable
│   ├── StatCard
│   ├── LoadingSkeleton
│   ├── StandingsTable
│   ├── StatusBadge/StatusBadges
│   └── ChartUtils
├── match/          (1 file)     - PitchVisualization
├── ConfirmDialog.tsx
├── ErrorBoundary.tsx
└── NavLink.tsx
```

## Key Patterns & Conventions

### Import Pattern
```typescript
// ✅ All imports use path alias
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/shared/StatCard";
import { cn } from "@/lib/utils";

// ❌ No relative imports
// import { Something } from "../../components/something";
```

### Component Export Patterns

**Page Components** (Default Export)
```typescript
export default function PageName() {
  return <div>...</div>;
}
```

**Shared Components** (Named Export - Preferred)
```typescript
interface ComponentProps {
  title: string;
  value: number;
}

export const ComponentName = ({ title, value }: ComponentProps) => {
  return <div>...</div>;
};
```

### Props Pattern
```typescript
interface ComponentNameProps {
  required: string;
  optional?: string;
  icon?: LucideIcon;
  accent?: "primary" | "gold" | "navy";
  className?: string;
}
```

## Configuration Quick Facts

| Setting | Value | Note |
|---------|-------|------|
| TypeScript Target | ES2020 | Modern syntax support |
| JSX Handling | react-jsx | No React import needed |
| Path Alias | @/* → src/* | Consistent import style |
| Strict Mode | ❌ false | Recommendation: enable |
| Module Resolution | bundler | Vite-compatible |

## Utilities & Helpers

### Core Utilities (`/src/lib/`)
- `utils.ts` - `cn()` for class merging
- `accessibility.ts` - A11y hooks (focus trap, skip links)
- `validation.ts` - Form validation logic
- `advancedValidation.ts` - Complex validation
- `mockData.ts` - Mock competition/match data
- `mockClubData.ts` - Mock club/player data

### Shared Hooks
- `use-toast()` - Toast notifications
- `use-mobile()` - Mobile device detection
- `useFocusTrap()` - Modal focus management
- `useSkipLink()` - Keyboard navigation
- `useKeyboardNavigation()` - List keyboard control

## Dependencies at a Glance

| Category | Package | Version |
|----------|---------|---------|
| **UI Framework** | React | 19+ |
| **Styling** | Tailwind CSS | 3.4 |
| **Components** | shadcn/ui | Latest |
| **Icons** | lucide-react | Latest |
| **Forms** | React Hook Form | 7.50+ |
| **Query State** | @tanstack/react-query | 5.83 |
| **Charts** | recharts | 2.x |
| **Date Utils** | date-fns | 3.6 |
| **Build Tool** | Vite | 5.x |
| **Testing** | Vitest + Playwright | Latest |

## Accessibility Implementation Status

### ✅ Implemented
- Error boundary
- Confirmation dialogs
- ARIA roles (main, region, group)
- ARIA labels on interactive elements
- Keyboard navigation in some components

### ⚠️ Incomplete
- Inconsistent landmark usage across pages
- Missing ARIA attributes on some components
- No comprehensive screen reader testing noted
- Some pages lack proper heading hierarchy

## File Size & Organization Assessment

| Aspect | Status | Notes |
|--------|--------|-------|
| Module Sizes | ✅ Balanced | Largest module (competition) at 47 files |
| Naming Consistency | ✅ Excellent | Clear PascalCase for components |
| Import Organization | ✅ Excellent | All use @/ alias |
| Type Coverage | ⚠️ Good | Core components typed, some loose |
| Documentation | ⚠️ Light | Few JSDoc comments |
| A11y Coverage | ⚠️ Partial | ~60% of pages well-labeled |

## Critical Inconsistencies Found

### 1. Export Patterns ⚠️⚠️
- Mixed default/named exports in shared components
- **Fix:** Standardize on named exports

### 2. Accessibility 🔴
- Inconsistent ARIA usage
- Some pages missing landmarks
- **Fix:** Apply consistent structure to all pages

### 3. Type Safety ⚠️
- TypeScript strict mode disabled
- Some data structures untyped
- **Fix:** Enable strict mode, add interface definitions

### 4. Error Handling 🔴
- No API error handling layer
- Forms lack validation display
- **Fix:** Implement error handling pattern

### 5. State Management ⚠️
- No shared state management library
- State logic scattered across components
- Only 1 context provider (Role)
- **Fix:** Extract to custom hooks or state library

## Performance Observations

| Aspect | Status | Notes |
|--------|--------|-------|
| Code Splitting | ✅ Good | Module-based structure enables splitting |
| Bundle Size | ℹ️ Unknown | Dependency set is reasonable |
| Component Reuse | ✅ Good | Shared components well-designed |
| Lazy Loading | ℹ️ Not Found | No visible lazy loading in routes |
| Caching | 📦 React Query | Good for API data |

## New Developer Checklist

When creating new pages or components:

### New Page Component
```typescript
// 1. Create in /src/pages/[module]/PageName.tsx
// 2. Export as: export default function PageName() { }
// 3. Add role="main" to main content wrapper
// 4. Use LoadingSkeleton for loading states
// 5. Import shared components from @/components/shared/
// 6. Use @/ alias for all imports
// 7. Define interfaces for props
// 8. Add aria- attributes to sections
```

### New Shared Component
```typescript
// 1. Create in /src/components/shared/ComponentName.tsx
// 2. Export as: export const ComponentName = (props) => { }
// 3. Define ComponentNameProps interface
// 4. Add JSDoc comment above component
// 5. Use cn() for className merging
// 6. Support className prop for customization
// 7. Use only shadcn/ui components
// 8. Ensure accessibility attributes
```

### New Utility
```typescript
// 1. Create in /src/lib/[utility].ts
// 2. Type all parameters and return values
// 3. Add JSDoc documentation
// 4. Export named functions
// 5. Keep functions pure (no side effects)
```

## Recommended Next Steps

### Immediate (This Sprint)
1. ✏️ Standardize shared component exports (all named exports)
2. ♿ Add missing ARIA landmarks to 10-15 pages
3. 📝 Document component guidelines

### Short-term (1-2 Sprints)
1. 🪝 Create custom hooks for form state
2. ❌ Implement error handling layer
3. 📚 Add JSDoc to shared components

### Medium-term (Next Month)
1. 🔒 Enable TypeScript strict mode
2. 🧪 Establish testing patterns
3. 🔐 Implement auth/permission layer

## Key Files to Remember

| File | Purpose | Change Frequency |
|------|---------|------------------|
| `src/App.tsx` | Route definitions | Rare |
| `vite.config.ts` | Build config | Rare |
| `tsconfig.json` | Type checking | Rare |
| `tailwind.config.ts` | Design tokens | Sometimes |
| `src/components/ui/*` | shadcn components | Never (readonly) |
| `src/lib/utils.ts` | Core utilities | Sometimes |
| `src/context/RoleContext.tsx` | Role state | Sometimes |
| `src/components/layout/AppShell.tsx` | App wrapper | Rare |

## Communication Patterns

### Role Types
- `owner` - Platform owner
- `eo` - Event Organizer
- `club` - Club admin
- `admin` - System administrator

### Module Responsibilities

| Module | Owns | Interfaces |
|--------|------|-----------|
| **admin** | Platform settings, monitoring | All users |
| **club** | Team data, players, matches | Club staffing |
| **competition** | Tournaments, rules, brackets | EO, Club |
| **eo** | Event management | Competitions, clubs |
| **finance** | Payments, subscriptions | Orgs, clubs |
| **match** | Match operations | Clubs, EO |
| **organization** | Org structure | All roles |

---

**Last Updated:** March 16, 2026
