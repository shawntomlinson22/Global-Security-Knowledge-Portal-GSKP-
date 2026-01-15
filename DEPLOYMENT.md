# Deployment Guide

## Prerequisites
- Node.js LTS
- npm
- SharePoint Online tenant with App Catalog access

## Build and package
```bash
cd spfx/role-portal
npm install
gulp bundle --ship
gulp package-solution --ship
```

## Deploy
1. Upload the generated `spfx/role-portal/sharepoint/solution/role-portal.sppkg` to your App Catalog.
2. Approve deployment (tenant-wide or site collection as required).
3. Add the **Role Portal** web part to a modern page.

## Notes
- This web part renders directly in the page DOM and avoids iframe sandbox issues.
- Use the property pane to select the role and toggle display settings.
