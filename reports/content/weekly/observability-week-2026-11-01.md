# Observability Industry News: Week of Oct 26 - Nov 1, 2026

**Collection run:** 2026-11-01  
**Week range:** 2026-10-26 to 2026-11-01  
**Tracked vendors:** Dynatrace, Datadog, Splunk, New Relic, Grafana Labs, Elastic, Honeycomb, Observe Inc, Chronosphere/Cortex XCOR, Riverbed, Coralogix, Cribl, Dash0

---

## Section 1: Collection Summary

**Items collected this week:** 6 (current window) + 1 late catch

**Vendors with items in window (Oct 26 - Nov 1):**

| Vendor | Items | Max Score | Notes |
|--------|-------|-----------|-------|
| Dynatrace | 1 | 5 | Forrester Wave Q4 2026 Leader |
| Datadog | 1 | 4 | Forrester Wave Q4 2026 Leader |
| New Relic | 2 | 3 | GitHub Copilot integrations + Board Chair |
| Dash0 | 2 | 3 | Session Replay + CloudWatch |

**Vendors with no items in window:**
Grafana Labs, Elastic, Splunk, Honeycomb, Observe Inc, Chronosphere/Cortex XCOR, Riverbed, Coralogix, Cribl

**Late catch (published Oct 21, stored under week 2026-10-19):**

| Vendor | Headline | Score | Flag |
|--------|----------|-------|------|
| Splunk | SVD-2026-1008: Two Critical CVEs at CVSS 9.9 | 5 | IMMEDIATE ACTION |

**Immediate Action candidates this run:**

Splunk SVD-2026-1008 (Oct 21, stored as late catch for week 2026-10-19):
- CVE-2026-76299: CVSS 9.9 (Improper Access Control), Splunk Enterprise
- CVE-2026-76302: CVSS 9.9 (Improper Neutralization of Input), Splunk Enterprise
- Affected: 10.4.0-10.4.3, 10.2.0-10.2.7, 10.0.0-10.0.10, 9.4.0-9.4.15
- Fixed: 10.4.4, 10.2.8, 10.0.11, 9.4.16
- Internally identified. No exploitation reported. Not in CISA KEV as of 2026-11-01.
- Source: https://advisory.splunk.com/advisories/SVD-2026-1008

**Source verification status:**

| Vendor | Item | Verified | Sources |
|--------|------|----------|---------|
| Dynatrace | Forrester Wave Q4 2026 | true | dynatrace.com press release + StockTitan/BusinessWire Oct 30 |
| Datadog | Forrester Wave Q4 2026 | true | GlobeNewswire Oct 29 + datadoghq.com blog Oct 29 |
| New Relic | GitHub Copilot integrations | true | newrelic.com press release + itbrief.com.au Oct 29 |
| New Relic | Steve Lucas Board Chair | false | newrelic.com press release only (1 source, importance 3) |
| Dash0 | Session Replay | false | dash0.com blog only (1 source, importance 3) |
| Dash0 | CloudWatch Metrics | false | dash0.com blog only (1 source, importance 2) |
| Splunk | SVD-2026-1008 | true | advisory.splunk.com + rescana.com + HKCERT bulletin |

---

## Section 2: Storyline Check

**Active story threads (last 4 weeks: Sep 28 - Oct 26):**

Grafana Labs: 5 items in the prior 4-week window (highest count). Most recently ObservabilityCON on Oct 20. No items in the current window.

Splunk: 4 items in prior window. Active threads: the CVE advisory SVD-2026-1008 (Oct 21, late catch, IMMEDIATE ACTION) adds to the Oct 12-18 CVE cluster (CVE-2026-76315) and the Oct 21 State of Observability survey. Splunk has had security-related items in two consecutive collection weeks.

Dynatrace: 4 items in prior window (Arize acquisition close Oct 1, Carahsoft distributor award Oct 15, Q2 FY2027 earnings date Oct 20). Now adds Forrester Wave Q4 2026 Leader designation this week.

New Relic: 6 items in prior window, highest item count of any vendor. The Oct 28 GitHub Copilot integrations and Oct 29 Board Chair appointment continue this high output rate.

Cribl: 2 items in prior window, 0 this week.

Datadog: 2 items in prior window, 1 this week (Forrester Wave Q4 2026). First high-importance item (score 4) from Datadog in this 5-week span.

Chronosphere/Cortex XCOR: 1 item in prior window (Cortex XCOR launch Oct 14). No items this week.

Vendors with 0 items in both prior window AND current window: Riverbed (0 in prior, 0 this week; only 2 items at importance 2 in this window), Observe Inc, Honeycomb.

Elastic: 1 item in prior window. No releases confirmed for Oct 26-Nov 1 2026 on the elastic.co releases page. Most recent dated release on that page is Elastic Stack 9.3.3 (April 8, 2026).

**Forrester Wave Q4 2026 AIOps report context:**

Two vendors issued press releases about the same Forrester Wave Q4 2026 AIOps Platforms report within 24 hours (Datadog Oct 29, Dynatrace Oct 30). Forrester evaluated 10 providers on 24 criteria. Both Datadog and Dynatrace were named Leaders. This is consistent with how Forrester releases work: each evaluated vendor may publish its own press release after embargo lifts.

---

## Section 3: Bi-Weekly Web Post (Oct 26 - Nov 1, 2026)

### Forrester Releases AIOps Report; New Relic Bets on GitHub Copilot as Observability Channel

The most significant market event of the week was the release of the Forrester Wave: AIOps Platforms, Q4 2026 report. Two vendors with distinct product strategies both landed in the Leader quadrant. New Relic shipped its most substantial GitHub Copilot integration yet. Dash0 continued its telemetry-first product buildout.

**Forrester names two Leaders in AIOps Q4 2026**

The Forrester Wave: AIOps Platforms, Q4 2026 evaluated 10 providers on 24 criteria. Forrester released the report during the last week of October, and both Datadog and Dynatrace published press releases naming themselves Leaders.

Dynatrace (press release Oct 30) reports receiving the highest score among all evaluated vendors in the Current Offering category and the top possible score in 16 criteria. Those 16 include causal root cause analysis, autonomous AI SRE and orchestration, and algorithmic trust and explainability. Forrester described the platform as suited for enterprises seeking a common context layer across metrics, logs, traces, and other data, citing Grail and Smartscape. Customers cited operational simplicity and trusted recommendations.

Datadog (press release Oct 29) reports receiving the highest possible score in 11 criteria including Innovation, Roadmap, and ModelOps and AI Governance. Forrester described Datadog as having demonstrated a clear and credible transition from observability toward agentic operations. The company reports Bits AI has more than 10,000 paying customers. Scout 1.0 is in preview.

Both figures above are self-reported by each vendor in their respective press releases. The full Forrester Wave report is available through Forrester directly.

**New Relic embeds observability into GitHub Copilot**

On October 28, New Relic launched three GitHub Copilot integrations that route observability data into the developer's coding environment rather than requiring developers to open a separate observability tool.

Change Tracking for GitHub Copilot (public preview) adds pre-merge checks, canary gates, and regression detection at the pull request level. Alerts route to GitHub Issues and Slack. Autopilot for GitHub MCP Server reached GA: it connects Copilot to New Relic's agentic operations layer so developers can query production data from within GitHub. Preflight for GitHub Copilot, an open-source library, also reached GA.

New Relic cited figures from external research: 94% of leaders report that AI-generated code is higher quality at review, and 78% report more post-deployment incidents. New Relic attributes the second figure to AI-assisted development moving faster than observability coverage can follow.

On October 29, New Relic separately announced that Steve Lucas was appointed Chair of the Board of Directors. Lucas is the CEO of Boomi and the former CEO of iCIMS and Marketo. New Relic CEO is Nandini Ramani.

**Dash0: session replay and CloudWatch as telemetry**

Dash0 shipped two items on October 29 that extend its telemetry ingestion scope.

Session Replay records browser sessions as browser.session_recording log records using the same OpenTelemetry ingestion endpoint, authentication, and dataset as traces, metrics, and logs. Session recordings share trace IDs with distributed traces, connecting a user-visible failure to the full backend trace without leaving the observability interface. Retention is 30 days. Form inputs are masked by default. The company frames this as eliminating a separate session recording tool in favor of unified telemetry storage.

CloudWatch Metrics Scraping adds read-only polling of AWS CloudWatch metrics every 5 minutes via a CloudFormation IAM role. Filters apply before each request to limit data volume. AWS Metric Streams remain supported as an alternative. Both features are available now.

---

**Data Quality**

Potwierdzone (2+ zrodla): Dynatrace Forrester Wave Q4 2026 (dynatrace.com press release + StockTitan/BusinessWire Oct 30), Datadog Forrester Wave Q4 2026 (GlobeNewswire Oct 29 + datadoghq.com blog Oct 29), New Relic GitHub Copilot integrations (newrelic.com + itbrief.com.au Oct 29), Splunk SVD-2026-1008 LATE CATCH (advisory.splunk.com + rescana.com + HKCERT bulletin)

Czesciowe (1 zrodlo): New Relic Steve Lucas Board Chair (newrelic.com press release only), Dash0 Session Replay (dash0.com blog only), Dash0 CloudWatch Metrics (dash0.com blog only)

Slabe zrodlo / nieweryfikowalne: -

Niepotwierdzone: -

**Zrodla uzyte:**
- Dynatrace press release (Forrester Wave Q4 2026) - https://www.dynatrace.com/news/press-release/independent-research-firm-names-dynatrace-a-leader-in-aiops/ - pierwotne - 2026-10-30
- StockTitan/BusinessWire (Dynatrace Forrester Q4 2026) - https://www.stocktitan.net/news/DT/independent-research-firm-names-dynatrace-a-leader-in-ai-otn2t3tlhm3a.html - prasowe - 2026-10-30
- GlobeNewswire (Datadog Forrester Wave Q4 2026) - https://www.globenewswire.com/news-release/2026/10/29/3391641/0/en/datadog-named-a-leader-in-aiops-platforms-research.html - prasowe - 2026-10-29
- Datadog blog (Forrester Wave Q4 2026) - https://www.datadoghq.com/blog/datadog-aiops-platforms-forrester-wave-2026/ - pierwotne - 2026-10-29
- New Relic press release (GitHub Copilot integrations) - https://newrelic.com/press-release/20261028 - pierwotne - 2026-10-28
- IT Brief Australia (New Relic GitHub Copilot) - https://itbrief.com.au/story/new-relic-adds-github-copilot-observability-integrations - agregator - 2026-10-29
- New Relic press release (Steve Lucas Board Chair) - https://newrelic.com/press-release/20261029 - pierwotne - 2026-10-29
- Dash0 blog (Session Replay) - https://www.dash0.com/blog/session-replay-belongs-in-your-telemetry-not-beside-it - pierwotne - 2026-10-29
- Dash0 blog (CloudWatch Metrics) - https://www.dash0.com/blog/collect-the-cloudwatch-metrics-you-need-skip-the-ones-you-dont - pierwotne - 2026-10-29
- Splunk advisory (SVD-2026-1008 LATE CATCH) - https://advisory.splunk.com/advisories/SVD-2026-1008 - pierwotne - 2026-10-21
