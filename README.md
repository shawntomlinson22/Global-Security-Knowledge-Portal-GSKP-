# Global Security Knowledge Portal (GSKP)

## Overview
This repository now contains an SPFx solution that renders the role-based portals natively on modern SharePoint pages (no iframe). The original standalone HTML portals should live in the `/legacy` folder for reference.

## SPFx Solution
Location: `/spfx/role-portal`

### Local development
> Requires Node.js LTS and the SharePoint Framework toolchain.

```bash
cd spfx/role-portal
npm install
gulp serve
```

### Build and package
```bash
cd spfx/role-portal
gulp bundle --ship
gulp package-solution --ship
```

### Deploy to the App Catalog
1. Upload `spfx/role-portal/sharepoint/solution/role-portal.sppkg` to the SharePoint App Catalog.
2. Approve the tenant-wide deployment if required.
3. Add the **Role Portal** web part to a modern SharePoint page.

### Add to a modern page
1. Edit the SharePoint page.
2. Insert the **Role Portal** web part.
3. Use the property pane to select the Role (MGR, SUP, CTR, SOF, TRN) and toggle options.

## Migration approach
**Option 1: Manual translation into React components** (chosen)
- Provides full control over layout and interaction without relying on unsafe HTML injection.
- Avoids XSS risks by rendering structured data rather than `dangerouslySetInnerHTML`.
- Allows React-driven navigation, anchors, and collapsible sections that are SPFx-safe.

## Troubleshooting
### Why the old HTML portals failed
Modern SharePoint pages embed HTML files in sandboxed iframes without `allow-scripts`, resulting in:
```
Blocked script execution… sandboxed and 'allow-scripts' permission is not set.
```
The SPFx web part renders directly within the SharePoint page DOM, eliminating iframe script blocking.

## Definition of Done
- [ ] Web part renders without iframe.
- [ ] No “Blocked script execution…” errors.
- [ ] No Fluent UI icon registration warnings.
- [ ] Role switching works.
- [ ] Navigation + collapsibles work in SharePoint Online modern pages.
# SharePoint HTML Portals (Phase 1)

Repository purpose: SharePoint HTML portals (Phase 1).

## Files
- .gitkeep

## Notes
- Portals currently fail in SharePoint due to iframe sandbox / allow-scripts restriction.
