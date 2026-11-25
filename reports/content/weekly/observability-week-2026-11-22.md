# Observability Weekly — 2026-11-16 to 2026-11-22

Generated: 2026-11-22 | Collected by scheduled task

---

## Section 1: Weekly Collection Summary

### Items Collected This Week

8 items stored for the week of 2026-11-16 to 2026-11-22. 6 verified with two independent sources. 2 single-source only.

| # | Vendor | Headline | Category | Score | Status |
|---|--------|----------|----------|-------|--------|
| 1 | Splunk | Splunk Patches Critical CVSS 9.9 RCE and 58 Other Flaws in SOAR; 139 Vulnerabilities Fixed Across Three Products | product_release | 5 | ✓ IMMEDIATE ACTION |
| 2 | Cribl | Cribl Named a Leader and Positioned Highest Overall in the Inaugural 2026 Gartner Magic Quadrant for Observability Pipelines | announcement | 4 | ✓ |
| 3 | Elastic | Elastic Reports Q2 FY2027 Revenue of $496M, Up 17% YoY; Q3 Guidance Below Analyst Expectations | financial | 4 | ✓ |
| 4 | Datadog | Datadog Named a Leader in the Inaugural 2026 Gartner Magic Quadrant for Observability Pipelines | announcement | 3 | ✓ |
| 5 | Dynatrace | Dynatrace (Bindplane) Named a Leader in the Inaugural 2026 Gartner Magic Quadrant for Observability Pipelines | announcement | 3 | ✓ |
| 6 | Honeycomb | Honeycomb Reports ARR Up More Than 70% YoY as AI-Native Customer Count Rises 130% | market_news | 3 | ✓ |
| 7 | Dash0 | Dash0 Ships 11 Features in One Week Including SignalControl Transforms, AutoMerge GA, and Kubernetes Pod Maps | product_release | 3 | ○ single source |
| 8 | Grafana Labs | Grafana Cloud Adds Auto Fit Dashboard Panels Feature | product_release | 2 | ○ single source |

### Vendor Coverage This Week

Covered (8 vendors): Splunk, Cribl, Elastic, Datadog, Dynatrace, Honeycomb, Dash0, Grafana Labs.

No items this week (5 vendors): New Relic, Coralogix, Riverbed, Observe Inc, Chronosphere.

Widened search confirmed for all five: New Relic Autopilot Kubernetes Agent (2026-11-10) is the Nov 9-15 item already in DB; Coralogix AI FinOps Gartner (2026-11-12) is the Nov 9-15 item already in DB; Riverbed GigaOm (Nov 9-15) already in DB; no Observe Inc / Snowflake item with confirmed Nov 16-22 date found; no Chronosphere item found in 10-day window.

### IMMEDIATE ACTION

**Splunk CVE-2026-131253 — CVSS 9.9 — Splunk SOAR below 8.8.0**

RCE via App Wizard. Fixed in Splunk SOAR 8.8.0. No exploitation reported. CVSS 9.9 exceeds the CVSS 9.0+ threshold for immediate action.

Action required: upgrade Splunk SOAR to 8.8.0 or higher. Advisory: https://advisory.splunk.com/advisories/SVD-2026-1108

Also in the same advisory batch: CVE-2026-131287 (CVSS 9.6, Splunk SOAR), CVE-2026-131202 (RCE, Splunk Enterprise Security), CVE-2026-76536 and CVE-2026-76535 (critical, Splunk Enterprise). Total 139 CVEs across three products.

Splunk advance notice row (id=172, SVD-2026-1101) updated with note: actual advisories now published. See new rows for week of 2026-11-16.

### Database Totals at End of This Run

- Weeks collected: 22 (2026-06-22 to 2026-11-22)
- Total rows: 138
- Category breakdown: product_release 53, announcement 42, market_news 28, financial 12, partnership 3

### Data Quality Block

| Item | Sources | Flags | Notes |
|------|---------|-------|-------|
| Splunk SOAR CVEs | advisory.splunk.com + securityweek.com | ✓ | CVE IDs from vendor advisory only |
| Cribl Gartner MQ | globenewswire.com + yahoo.com/finance | ✓ | CEO quote and Fortune 100 claim from press release |
| Elastic Q2 FY2027 | businesswire.com + stocktitan.net | ✓ | All figures from official results release |
| Datadog Gartner MQ | datadoghq.com blog + globenewswire.com | ✓ | |
| Dynatrace Gartner MQ | finance.yahoo.com (Business Wire) + dynatrace.com landing | ✓ | Critical Capabilities scores are vendor-reported |
| Honeycomb milestones | prnewswire.com + yahoo.com/finance | ✓ | ARR absolute value not disclosed; growth rate only |
| Dash0 November features | dash0.com/changelog only | ○ | Single primary source; no secondary found |
| Grafana auto fit panels | grafana.com/whats-new only | ○ | Single primary source; minor cloud feature |

Flags: ✓ verified (2+ independent sources), ○ single source only, ⚠ partial verification, ✗ failed

---

## Section 2: Storyline Check

### Recurring Themes (last 7 weeks, Oct-Nov 2026)

**Gartner MQ for Observability Pipelines (new this week)**
The inaugural 2026 Gartner Magic Quadrant for Observability Pipelines generated three vendor press releases on the same day (2026-11-17): Datadog (Leader), Cribl (Leader, highest overall), and Dynatrace via Bindplane (Leader, three CC use cases). This is a new MQ category, recognizing observability pipeline management as a distinct market. Prior Gartner coverage in the DB was for other categories (Composable Analytics 2026, AI FinOps 2026).

**Splunk security volume**
Splunk has appeared in product_release and announcement categories in 2 of the last 7 weeks, with this week's advisory being the third security event in 8 weeks. The advance notice from Nov 9 predicted this batch. At 139 CVEs across three products, the volume is atypical even for a major November patch cycle. Worth monitoring whether this pace continues in Q1 2027 (Splunk's next scheduled quarterly advisory window).

**Elastic earnings cadence**
Elastic reported Q1 FY2027 results in a prior week and Q2 FY2027 this week. Both are in the DB under category "financial." The Q2 guidance (12.9% implied YoY growth) missed analyst consensus for the first time in four reported quarters. The $500M buyback authorization is a new data point. If Q3 guidance at the next earnings call comes in similarly, this may warrant a dedicated storyline entry.

**Cribl momentum streak**
Cribl has appeared in 2 consecutive weeks at score 4: Tero acquisition (Nov 9-15) and Gartner MQ Leader position highest overall (Nov 16-22). Both are verified with two sources. The combination of an acquisition that expands into host monitoring and a top Gartner MQ placement within the same bi-weekly period strengthens the narrative around Cribl's market positioning.

**Dash0 shipping cadence**
Dash0 has appeared in product_release category in 4 of the last 8 collected weeks. This week's 11-feature changelog continues that pattern. Single-source limitation applies (no independent trade press coverage yet).

**AI-native observability demand signal**
Honeycomb's MCP query volume metric (4.5M/month vs 20K in January) is the most concrete proxy for AI-agent-driven observability demand seen in this dataset to date. The 130% growth in AI-native customer count and 125% NRR reinforce the same theme. Cross-referencing: New Relic's Autopilot Kubernetes Agent (Nov 9-15) and Dynatrace's AI-focused positioning also fit this pattern.

### Highest-Importance Items Since Last Post (Nov 9-22)

| Score | Vendor | Headline |
|-------|--------|----------|
| 5 | Splunk | SOAR CVE-2026-131253 CVSS 9.9 (Immediate Action) |
| 4 | Cribl | Tero acquisition (Nov 9-15) |
| 4 | Dash0 | Continuous Profiling GA (Nov 9-15) |
| 4 | Cribl | Gartner MQ Pipelines Leader highest overall |
| 4 | Elastic | Q2 FY2027 Earnings ($496M, +17% YoY) |

---

## Section 3: Bi-Weekly Web Post — Nov 9-22, 2026

> Coverage: 2026-11-09 to 2026-11-22. Last published post covered Oct 26-Nov 8.
> Included: verified items, importance >= 3. Excludes unverified, score < 3, and already-published items.
> Total eligible items: 11.

---

### SECURITY ADVISORY — Immediate Action Required

**Splunk Patches 139 Vulnerabilities Including CVSS 9.9 RCE in SOAR**

Splunk published its November 2026 security advisory batch on November 18. The batch covers three products and 139 CVEs total.

The most critical: CVE-2026-131253 carries a CVSS score of 9.9 and enables remote code execution through the App Wizard component in Splunk SOAR. The vulnerability affects all SOAR versions below 8.8.0. If your environment runs Splunk SOAR, upgrade to 8.8.0 immediately.

Also in the batch: CVE-2026-131287 (CVSS 9.6, also SOAR), CVE-2026-131202 (RCE, Enterprise Security), and two critical-rated Splunk Enterprise CVEs. No exploitation of any of these vulnerabilities has been reported.

The full advisory index is at advisory.splunk.com. Splunk published an advance notice on November 10 that this batch was coming; the actual advisories arrived eight days later.

Source: [Splunk Advisory SVD-2026-1108](https://advisory.splunk.com/advisories/SVD-2026-1108)

---

### Acquisitions and Market Moves

**Cribl Acquires Tero to Add Host Monitoring and APM**

Cribl announced on November 10 that it acquired Tero, a startup building AI-native observability tools. The acquisition extends Cribl's portfolio beyond log and pipeline management into host monitoring and application performance monitoring.

Cribl has not disclosed acquisition terms. The Tero team joins Cribl's product engineering group. CEO Clint Sharp framed the move as a step toward a full observability platform built for AI-era workloads.

Source: [Cribl newsroom](https://cribl.io/news/cribl-acquires-tero-to-lead-observability-into-the-ai-era/)

---

### Gartner Launches Observability Pipelines Magic Quadrant: Three Vendors Named Leaders

Gartner published its inaugural 2026 Magic Quadrant for Observability Pipelines on November 17. Three vendors from the tracked list earned Leader placements.

**Cribl** was positioned highest overall among all Leaders. The press release cites over half the Fortune 100 as Cribl customers and quotes CEO Clint Sharp.

**Datadog** was named a Leader across both ability to execute and completeness of vision dimensions. Datadog published its own blog post the same day.

**Dynatrace** (via its Bindplane product, acquired April 2026) was also named a Leader. Dynatrace reported ranking highest in three of five Gartner Critical Capabilities use cases: DevOps/AppDev (3.73/5), Platform Operations (3.70/5), and SecOps (3.68/5, tied). The figures are vendor-reported from the Critical Capabilities companion report.

This is the first time Gartner has published a dedicated MQ for the observability pipeline category, which covers products that collect, route, transform, and reduce telemetry data before it reaches a backend.

Sources: [Cribl press release](https://www.globenewswire.com/news-release/2026/11/17/3405084/0/en/cribl-named-a-leader-in-the-2026-gartner-magic-quadrant-for-observability-pipelines.html), [Datadog blog](https://www.datadoghq.com/blog/datadog-observability-pipelines-gartner-magic-quadrant-2026/), [Dynatrace press release](https://finance.yahoo.com/technology/articles/dynatrace-bindplane-named-leader-2026-164000141.html)

---

### Product Releases

**Dash0 Launches Continuous Profiling Generally Available**

Dash0 announced on November 10 that its continuous profiling feature is now generally available, 12 weeks after Dash0 acquired Polar Signals, the company behind Parca, an open-source continuous profiling tool. The GA release integrates profiling data into the same Dash0 UI alongside traces, logs, and metrics.

Source: [Dash0 blog](https://www.dash0.com/blog/dash0-announces-continuous-profiling-ga)

**New Relic Autopilot Kubernetes Agent Enters Public Preview at KubeCon**

New Relic announced public preview of its Autopilot Kubernetes Agent at KubeCon North America 2026 on November 10. The agent monitors Kubernetes clusters and uses an AI model to surface anomalies and suggest remediation steps without requiring manual query writing. The announcement targets teams running Kubernetes without dedicated SRE expertise.

Source: [New Relic press release](https://newrelic.com/press-release/20261110)

---

### Earnings and Business Results

**Elastic Q2 FY2027: $496M Revenue, Strong Profit Beat, Guidance Cautious**

Elastic reported second-quarter fiscal 2027 results on November 19. Revenue reached $496 million, up 17% year over year. Non-GAAP EPS came in at $0.94, beating estimates by $0.13. Current remaining performance obligations (cRPO) grew 19% to $1.157 billion, a leading indicator of future revenue.

Third-quarter guidance of $507.5-508.5 million implies 12.9% year-over-year growth, below analyst consensus. Elastic guided the full year at $2.0-2.008 billion. The board authorized a new $500 million share repurchase program.

Source: [Elastic press release (BusinessWire)](https://www.businesswire.com/news/home/20261118991225/en/Elastic-Reports-Second-Quarter-Fiscal-2027-Financial-Results)

---

### Growth Metrics

**Honeycomb: ARR up over 70% YoY, MCP Queries at 4.5M/Month**

Honeycomb reported a set of growth milestones on November 18. ARR grew more than 70% year over year (the company did not disclose an absolute figure). Net revenue retention reached 125%. AI-native customers grew 130% year over year.

The metric that stands out: MCP query volume reached 4.5 million per month. In January 2026 it was approximately 20,000 per month. That is a 225x increase in 10 months, reflecting developer adoption of AI agents that use observability data as a tool call target.

Matt Nelson was promoted to President as part of the same announcement.

Source: [Honeycomb press release (PR Newswire)](https://www.prnewswire.com/news-releases/honeycomb-surpasses-company-growth-milestones-as-customers-turn-to-observability-to-understand-and-manage-swarms-of-ai-agents-302943540.html)

---

### Analyst Recognition

**Coralogix Named Market Shaper in Gartner Emerging Market Quadrant for AI FinOps**

Coralogix was recognized as a Market Shaper in Gartner's October 2026 Emerging Market Quadrant for AI FinOps Tools (Startup Vendors edition), announced November 12. The report focuses on tools that use AI to manage and optimize cloud and observability spend.

Source: [Coralogix press release (GlobeNewsWire)](https://www.globenewswire.com/news-release/2026/11/12/3401718/0/en/coralogix-recognized-as-a-market-shaper-in-the-october-2026-gartner-emerging-market-quadrant-for-ai-finops-tools-startup-vendors.html)

**Riverbed Named a Leader in 2026 GigaOm Radar for AIOps**

Riverbed was named a Leader in the 2026 GigaOm Radar report for AIOps, as announced in mid-November. The GigaOm Radar evaluates AIOps platforms on AI-driven anomaly detection, topology mapping, and integration breadth.

Source: [Riverbed press release](https://www.riverbed.com/press-releases/leader-2026-gigaom-radar-report-aiops/)

---

*End of Section 3. Next post will cover Nov 23-Dec 6.*
