# Regression and Edge-Case Test Plan

This plan targets the highest-impact correctness risks identified in the repository audit.

## Automated tests added
- Date formatting and leap-day formatting.
- Empty/new-user activity baseline.
- Practice-date validation: today, past, future, malformed, impossible calendar dates, and missing input.
- Streak correctness: deduplication, current streak, yesterday grace, gaps, malformed and future activity.
- Coding-profile username normalization.
- CodeChef rating boundary values.
- Provider failures and malformed payloads must reject rather than produce fabricated statistics.
- Username URL encoding.

## CI gate
The GitHub Actions workflow runs dependency installation with the committed Bun lockfile, TypeScript checks, Vitest, and a production build for pushes to main/fix branches and pull requests into main.

## Manual / integration checks still needed
- Run Firebase Emulator tests against Firestore rules with authenticated owner, different user, unauthenticated client, oversized maps, unexpected fields, and invalid value types.
- Verify progress writes survive offline -> online transitions and rapid successive edits.
- Verify logout/login switching cannot display or upload one account's progress for another account.
- Exercise contact form spam/abuse protections; client-side rules alone cannot provide rate limiting.
- Verify migration behavior with actual legacy keys and a Firestore write failure before deleting old keys permanently.
