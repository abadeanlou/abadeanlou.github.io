# Role-Targeting Content Rewrite — abadeanlou.github.io

Date: 2026-07-03 · Status: approved by user

## Goal

Reposition the site content for Data Scientist / Data Engineer / AI Engineer
applications. Chosen framing (user-approved): **AI/ML & Data Engineer leaning,
hybrid-readable** — engineering-first identity, urban mobility as the domain,
research kept as a credential.

## Confidentiality (user-approved)

Production metrics from the employer platform appear **rounded and
system-anonymous only**: no client names beyond what was already public on the
page, no internal table/dashboard names, no exact row counts. User explicitly
confirmed the rounded figures may be published.

## Approved facts (supplied by user 2026-07-03, prod-measured)

- Hybrid LightGBM forecasting: global model on pooled history (~1.5–3M
  observations) + per-route specialists (≥14 days/≥500 rows), blended by
  inverse-MAE over last 7 days; 16 horizons (15 min – 4 h); quantile P15/P85 +
  conformal-style calibration (~80–85% empirical coverage).
- Accuracy: ~1.65 min MAE @15 min lead, ~2.68 min @4 h — 16–50% better than a
  typical-day baseline (~53k matched samples, last 7 days).
- Nightly retraining (38 routes, ~10–20 min); every forecast graded against
  actuals per route/lead-time/variant.
- Ingestion: ~27M rows/day per-minute segment telemetry; TimescaleDB
  hypertables, columnar compression (371 GB logical → 137 GB disk), continuous
  aggregates.
- Cloud/CI: GCP (Compute Engine ×3 envs, Secret Manager, BigQuery billing
  export, IAP SSH); GitHub Actions (health-gated staging auto-deploy, PR tests
  vs real TimescaleDB service container, cherry-pick promotion); ~75 Node test
  files (node:test); idempotent SQL migrations on deploy; pm2.
- Explicitly NOT claimed (user does not use): Docker as a skill, Airflow.

## Changes

1. **Identity**: tagline "AI & Data Engineer", sub-line "Machine learning
   systems · Data pipelines · Geospatial". Mirrored in `<title>`, meta
   description, OG/Twitter tags, JSON-LD `jobTitle`.
2. **About**: engineering-first rewrite (approved copy in conversation).
3. **Experience (CitiEU)**: bullets reordered ML → ML lifecycle → ingestion →
   GCP/CI-CD → LLM/agents → Cube migration (compressed to one bullet, keeps
   40% + 50 modellers).
4. **Projects**: IntelligentMobilityHub card restructured problem → data → ML
   → serving → deploy; tags LightGBM · TimescaleDB · FastAPI · GCP · GitHub
   Actions.
5. **Skills**: reorder + regroup — ML & AI first (adds quantile regression,
   conformal calibration, model monitoring), Data Engineering (adds
   TimescaleDB), new Cloud & DevOps group, Programming, Geospatial, Transport
   Modelling compressed to a short domain line.
6. **Social card**: regenerate PNG if the source card.html is still available;
   otherwise leave (title mismatch acceptable, noted).

## Verification

- Local Playwright render check (desktop + mobile) before push.
- Confirm live site serves the new content after deploy (build queue on this
  repo has been flaky — empty-commit remedy documented in git history).
