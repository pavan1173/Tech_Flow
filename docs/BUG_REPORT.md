# TechFlow Repository Bug & Quality Audit

**Repository:** https://github.com/pavan1173/Tech_Flow  
**Branch reviewed:** `main`  
**Reviewed commit:** `7986cafd1ac1a83de5f3b7f37f5cbbcbf8b6c9a0` (2026-10-09)  
**Audit type:** Static source/configuration review of key app, auth, Firestore, progress-sync, coding-profile and content files. The app was not built or run in a local browser in this audit, so runtime findings are labeled accordingly.

## Executive summary

The highest-risk issues are **trustworthy user statistics**, **profile/progress persistence under Firestore rules**, and **progress/account data reconciliation**. The project has a useful test suite and a clear React/Vite structure, but a few implementation choices can create success-looking UI even when data is not real or not saved.

## Priority-ordered findings

| ID | Priority | Finding | Evidence | Impact |
|---|---|---|---|---|
| TF-01 | **P0 — Fix first** | **Coding-profile APIs return synthetic data when external calls fail.** LeetCode falls back to fixed stats (145 solved, rank 184520, etc.); CodeChef hashes the username to generate ratings/solved/ranks; GitHub falls back to 24 repos / 48 stars / 86 followers / 340 contributions. | `src/services/codingProfilesService.ts`, around lines 53–120, 145–205, 211–250 | Users can be shown and save incorrect competitive-profile statistics as if they were live data. Remove all fabricated fallback metrics. Return a typed error / unavailable status and show “Could not fetch live stats; retry.” |
| TF-02 | **P1 — High** | **Progress-document rules validate only field count and optional UID.** `isValidProgressDoc` allows any field names/types as long as document size is <=30 and UID matches (or is absent). | `firestore.rules:57–60` | An authenticated account owner can write unexpected or wrongly typed data into their own progress document. Restrict allowed keys and validate each map/array/timestamp/number type and size. |
| TF-03 | **P1 — High** | **User profile is updated in React state before Firestore confirms the write.** `updateProfile` calls `setUser(updated)` before `await setDoc(...)`. If the write fails, the form may reflect updated data while the cloud record was not saved. Similar “log warning and continue” writes exist in login-record creation. | `src/context/AuthContext.tsx:405–420`; login record writes around 225–270 | User sees success-looking state with stale cloud data; later refresh may revert profile. Persist first or implement rollback, and show save errors explicitly. |
| TF-04 | **P1 — High** | **Progress writes are fire-and-forget and can lose updates on route change/tab close/network loss.** The debounced path waits 300 ms, but there is no unload/pagehide flush and the pending timeout is cancelled during auth-state changes. Immediate writes are also not awaited by callers. | `src/context/ProgressContext.tsx:308–325, 500–640` | Recently entered notes, bookmarks or progress may not reach Firestore. Use a queued write strategy, visible sync/error status, retry/backoff and awaitable flush on explicit transitions. Do not rely on unload handlers as the only guarantee. |
| TF-05 | **P1 — High** | **Legacy data migration can assign one browser’s old progress to the first account that signs in, then permanently delete the old keys.** The function comment says this intentionally happens once; the migration flag is global to the browser, not scoped to a user. Old keys are removed before cloud persistence is verified. | `src/context/ProgressContext.tsx:118–220, 365–445` | On shared computers or account changes, data may be attributed to the wrong account or lost if synchronization fails. Require an explicit migration decision, verify backup/write before removing legacy data, and scope migration state carefully. |
| TF-06 | **P1 — High** | **Contact endpoint is unauthenticated and create-only but has no abuse/rate limiting at the app/rules layer.** `messages` permits public creation if the payload shape passes validation. | `firestore.rules:62–80`; `src/pages/ContactPage.tsx` | Bots can flood the collection and consume Firestore quota. Add App Check and/or a server-side endpoint with rate limits, spam controls and validation. Keep public create-only access only if that is intended. |
| TF-07 | **P2 — Medium** | **GitHub “Yearly Commits” is not a live contribution count.** The service estimates contributions as `publicRepos * 18 + totalStars * 4 + 45`; the UI also displays a fallback `240+`. | `src/services/codingProfilesService.ts:228–250`; `src/components/CodingPlatformsCard.tsx:536` | The metric is mislabeled and inaccurate. GitHub public user/repos endpoints do not provide an authoritative yearly contributions count in this implementation. Rename/remove it or use a source that actually returns contributions. |
| TF-08 | **P2 — Medium** | **Coding stats are reported as a successful sync even if all fetches fail.** `syncCodingPlatforms` catches each service failure and only logs a warning, then still saves and returns the profiles; the UI can show success. | `src/context/AuthContext.tsx:423–480`; `src/components/CodingPlatformsCard.tsx` | A “Sync successful” message may not mean live data was refreshed. Return per-provider status and show partial failure separately. |
| TF-09 | **P2 — Medium** | **Profile edit has fixed/default placeholder values that can be saved as real data.** Profile form defaults include values such as “Google / Meta”, “35+ LPA”, “Computer Science & Engineering”, “2026”, and generic LinkedIn/GitHub links. | `src/components/UserProfileModal.tsx`, initial `formData` and `useEffect` | Users may unintentionally save defaults or incorrect external links to their profile. Use empty placeholders rather than values, and validate URL fields. |
| TF-10 | **P2 — Medium** | **Clipboard share action does not handle failures.** `navigator.clipboard.writeText` is not awaited and success feedback is shown immediately. | `src/pages/NotesPage.tsx:108–112` | On unsupported/insecure contexts or clipboard permission denial, the UI can claim the link was copied when it was not. Await it and show success/error state. |
| TF-11 | **P2 — Medium** | **No root README is present.** The repository tree reviewed did not contain `README.md`. | Repository tree on `main` | Harder for users/contributors to understand setup, Firebase configuration, tests, build steps, and deployment. Add setup and troubleshooting docs. |
| TF-12 | **P2 — Medium** | **No GitHub Actions workflow runs/configuration were found through the repository endpoints checked.** | `/actions/runs` returned 0 runs; `.github/workflows` was not found | Type checks and tests may not run automatically on every push/PR. Add CI for install, `npm run lint`, `npm test` and `npm run build`. |
| TF-13 | **P3 — Low** | **Bundle/content weight deserves review.** Several checked-in data sources are large: `roleWiseData.ts` ~3.88 MB; `dsaSheetsDetail.ts` ~1.32 MB; `companiesSheets.ts` ~1.03 MB; `navigationSectionIds.json` ~1.20 MB; and duplicate-looking root/public copies of large PNG assets exist. | Repository tree metadata | May increase download/build time and memory use. Measure production bundle and route-level loading before refactoring; lazy-load large datasets and optimize/ deduplicate assets. |
| TF-14 | **P3 — Low** | **Naming/branding inconsistency remains.** Package is named `react-example`; app UI and SEO metadata use HackPath while component branding includes TeachFlow. | `package.json`, `index.html`, `src/components/TeachFlowLogo.tsx`, `src/App.tsx` | Not a runtime blocker, but confusing for users, contributors and deployment diagnostics. Pick one product name and align metadata, manifest, package and UI. |

## Detailed recommended fixes

### 1. Stop inventing coding statistics

In `src/services/codingProfilesService.ts`:
- Delete the fixed LeetCode baseline, username-hash CodeChef baseline, and fixed GitHub fallback.
- Check HTTP status, response schema, and username identity before accepting data.
- Return `{status: 'success', data}` or `{status: 'unavailable', reason}` (or throw a typed error).
- Add tests for invalid user, 429/rate-limit, 5xx, timeout, malformed JSON, missing required fields and partial GitHub API failure.
- Ensure the UI never renders defaults as current statistics.

### 2. Strengthen Firestore progress rules

In `firestore.rules`:
- Replace the size-only `isValidProgressDoc` with `keys().hasOnly([...])` and type/size checks for each field.
- Ensure `uid` is required on create and, if present, must equal the path UID.
- Validate `solvedMap`, `bookmarksMap`, `notesMap`, `customDataMap`, `activityDates`, numeric counters and date strings.
- Add Firestore Rules Emulator tests covering owner/non-owner, malformed payloads, extra keys, and contact spam shape.
- Keep the default-deny catch-all.

### 3. Make profile saves truthful

In `src/context/AuthContext.tsx`:
- Validate input and await the Firestore write before reporting “saved”.
- Preserve the old state on failure or explicitly roll back.
- Surface save errors in the form instead of only logging them.
- Avoid silently swallowing Firestore write failures during account creation/login; expose a non-blocking “profile data could not be synced” state.
- Never trust the cached `localStorage` user object for authorization; continue to base authorization on Firebase Auth and Firestore rules.

### 4. Make progress sync durable

In `src/context/ProgressContext.tsx`:
- Keep local changes immediately, but track pending/failed cloud writes.
- Use a serialized write queue or revision counter to prevent overlapping writes from completing out of order.
- Debounce frequent note keystrokes, but expose an explicit awaited `forceSyncToCloud` for user-triggered navigation/sign-out flows.
- On account change, flush or safely discard the old queue before adopting the next UID. Never let an old write use the next account’s data.
- Add tests for rapid note typing, flaky network, sign-out during pending sync, account switching, and unmount cleanup.

### 5. Make migration recoverable and account-safe

- Do not delete legacy values until the migrated data is durably saved and verified.
- Create a backup snapshot or present a one-time “Import previous local progress?” step after sign-in.
- Avoid silently importing shared-browser legacy data into whichever user logs in first.
- Make migration idempotent, and test interrupted migration/retry scenarios.

## Test / verification plan

Run locally from a clean checkout:

```bash
bun install --frozen-lockfile
bun run lint
bun run test
bun run build
```

Or with npm, use the matching lockfile strategy consistently (the repository currently includes `bun.lock`, so Bun is the safer default).

Then manually verify:
1. New account, returning user, email login, Google login, password reset, logout, and account switch.
2. Save profile while offline; the UI must show failure and recover after reconnecting.
3. Add/remove solved problems, bookmarks, notes and roadmap progress; refresh and open a second browser session.
4. Trigger third-party API timeout, 404, 429 and malformed responses; no synthetic stats should appear.
5. Run Firestore Rules Emulator tests as owner, other user and unauthenticated visitor.
6. Submit contact forms repeatedly and with malformed payloads to verify anti-abuse controls.
7. Check direct refresh of every important nested route and use mobile viewport sizes.

## Suggested delivery sequence

**Sprint 1 (block release):** TF-01, TF-02, TF-03, TF-04  
**Sprint 2 (data safety & abuse):** TF-05, TF-06, TF-08  
**Sprint 3 (correctness & product polish):** TF-07, TF-09, TF-10, TF-11, TF-12  
**Sprint 4 (performance & cleanup):** TF-13, TF-14

## Scope and limitations

This audit inspected the public `main` branch files and current commit metadata. It did not execute installation, TypeScript, Vitest, browser interaction, live Firestore Rules Emulator tests, or deployment smoke tests. Therefore, findings about source behavior are based on direct code paths; runtime breakage, external-provider uptime, and live Firebase project settings still need to be verified.
