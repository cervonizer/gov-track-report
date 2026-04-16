

## Plan

The user wants 4 distinct improvements applied to all politicians:

1. **Add the "Legado" (performance) section to all candidate pages** — currently only shown for Roberto Almeida (id `'4'`).
2. **Translate badge labels to Portuguese**: `Yes/No/Abstain/Absent`, `Fulfilled/In Progress/Broken/Expired`, `Active/Passed/Failed/Withdrawn`.
3. **Replace the location tag** (currently shows the state) with the **place of birth** of each politician.
4. **Mandate display**:
   - On the **home card** (`PoliticianCard`): show the **current mandate** only (or "Sem mandato" if none).
   - On the **profile page**: show **all mandates** (history list).

### Approach

**A. Type changes (`src/types/politician.ts`)**
- Add `birthPlace: string` (e.g., "Caetés, PE").
- Add `mandates: { position: string; start: string; end: string; current?: boolean }[]` — full mandate history.
- Keep existing `termStart`/`termEnd` for backward compatibility, but the UI will use `mandates`.

**B. Data changes (`src/data/mockData.ts`)**
- For each of the 6 politicians (Lula, Flávio Bolsonaro, Caiado, Renan Santos, Zema, Ana Beatriz), add `birthPlace` and a `mandates` array based on real biographical data.
- Example: Lula → mandates = President 2003-2006, 2007-2010, 2023-2027.

**C. Translations**
Add a small helper `src/lib/translations.ts` exporting:
- `translateVote(v)` → Sim / Não / Abstenção / Ausente
- `translatePromiseStatus(s)` → Cumprida / Em Andamento / Quebrada / Expirada
- `translateProposalStatus(s)` → Ativa / Aprovada / Rejeitada / Retirada

Apply in `PoliticianProfile.tsx` where the badges render (`{vote.vote}`, `{promise.status}`, `{proposal.status}`). Color helpers stay keyed on the original English values.

**D. Generalize the Legacy section (`src/components/LegacySection.tsx`)**
- Convert hardcoded data to props-driven: accept `politicianName: string` and (optionally) `commitments`, `performanceData`, `chartDataPIB`, `chartDataHomicidios`, `footerText`.
- Move the per-politician legacy datasets into a new file `src/data/legacyData.ts` keyed by politician ID, with realistic data for each (governors get state indicators; legislators get parliamentary metrics like attendance, bills proposed, votes cast; Lula gets national indicators).
- In `PoliticianProfile.tsx`, remove the `id === '4'` guard and always render `<LegacySection politicianId={politician.id} politicianName={politician.name} />`.

**E. Location tag**
- In `PoliticianProfile.tsx` header, the `<MapPin>` row currently shows `politician.state`. Change to show `politician.birthPlace` with label "Natural de: {birthPlace}".
- In `PoliticianCard.tsx`, the `<MapPin>` row also shows district/state — change to show `birthPlace` ("Natural de: ...").

**F. Mandate display**
- In `PoliticianCard.tsx`: replace the current `Mandato: 2023 - 2027` line with the **current mandate** from `mandates` (the one with `current: true`, or fallback to highest end date if still active). If no current mandate exists, show **"Sem mandato"**.
- In `PoliticianProfile.tsx`: replace the single Term row with a list of all mandates, e.g.:
  ```
  Mandatos:
  • Presidente da República — 2003-2006
  • Presidente da República — 2007-2010
  • Presidente da República — 2023-2027 (atual)
  ```

### Files to be edited / created

- `src/types/politician.ts` — add `birthPlace` and `mandates` fields.
- `src/data/mockData.ts` — populate new fields for all 6 politicians.
- `src/data/legacyData.ts` — **new file** with per-politician legacy datasets (commitments, performance metrics, chart data, footnote).
- `src/components/LegacySection.tsx` — accept props, render based on supplied data.
- `src/components/PoliticianCard.tsx` — show birth place + current mandate (or "Sem mandato").
- `src/pages/PoliticianProfile.tsx` — birth place row, mandates list, translated badges, always render `<LegacySection>`.
- `src/lib/translations.ts` — **new file** with translation helpers.

### Notes
- I'll use realistic public data (Wikipedia-level) for birth places and mandate histories.
- Color logic for badges remains keyed on the original English status strings; only the displayed label is translated.
- Renan Santos and Ana Beatriz Costa do not currently hold elected office (Renan is identified as MBL co-founder; Ana Beatriz hasn't been transformed) — those will show "Sem mandato" on the home card if appropriate, and a mandate history if any.

