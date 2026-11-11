# Observability Market: Week of November 2-8, 2026

---

## Section 1: Weekly Collection Summary

**Collection window:** 2026-11-02 to 2026-11-08  
**Items stored:** 7  
**Verified (importance >= 3, 2+ sources):** 4  
**Minor / single-source (importance <= 2):** 3  
**Security / Immediate Action:** None

### Verified Items

**1. Dynatrace + CrowdStrike Partnership (importance: 4)**  
CrowdStrike and Dynatrace announced a strategic partnership on November 2, 2026, at Fal.Con Europe in Barcelona. Three integrations are available immediately: Falcon federated search across Dynatrace observability and log data without data duplication; unified incident response combining CrowdStrike endpoint telemetry with Dynatrace log, application, and infrastructure data; and log and telemetry routing via Bindplane by Dynatrace. No pricing was disclosed.  
Sources: [Dynatrace PR](https://www.dynatrace.com/news/press-release/crowdstrike-and-dynatrace-join-forces-to-disrupt-legacy-siem-and-observability/) | [CrowdStrike PR](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-dynatrace-join-forces-disrupt-legacy-siem-observability/)

**2. Dynatrace Q2 FY2027 Earnings (importance: 4)**  
Dynatrace reported Q2 FY2027 results on November 3, 2026, for the quarter ended September 30, 2026. ARR reached $2,207M, up 16% year over year. Total revenue was $580M, up 17%. Non-GAAP diluted EPS was $0.54. Full-year FY2027 guidance: ARR $2,393M-$2,413M, revenue $2,330M-$2,340M, non-GAAP EPS $1.88-$1.90. The board authorized $1 billion in share repurchases. More than 1,100 customers now use Dynatrace AI agents, up from more than 800 last quarter.  
Sources: [IR page](https://ir.dynatrace.com/) | [SEC 8-K exhibit](https://www.sec.gov/Archives/edgar/data/0001773383/000177338326000069/q2fy27-earningsreleaseex99.htm)

**3. Datadog Q3 2026 Earnings + Scout 1.0 (importance: 5)**  
Datadog reported Q3 2026 results on November 4, 2026, for the quarter ended September 30, 2026. Revenue was $1,197M, up 35% year over year. The company had 4,860 customers with ARR of $100,000 or more, up 20% from 4,060 a year earlier. Non-GAAP operating income was $334M (28% margin). Non-GAAP diluted EPS was $0.81. Q4 2026 guidance: revenue $1.19B-$1.20B. The company also announced Scout 1.0, its first specialized model from its AI Research team for investigating production issues, currently in preview and powering Bits AI Investigation; performance claims relative to frontier models are self-reported.  
Sources: [Investor PR](https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-third-quarter-2026-financial-results/) | [SEC 8-K exhibit](https://www.sec.gov/Archives/edgar/data/0001561550/000162828026069792/ex-991x20260930x8k.htm)

**4. Honeycomb AI SRE Agents (importance: 4)**  
Honeycomb announced AI SRE agents on November 3, 2026, available in early access. The Personal Agent assists individual engineers using team runbooks and Honeycomb expertise, keeping chats private and showing its reasoning before acting. Team Agents run on a schedule, trigger, or SLO toward user-defined goals such as watching releases, improving instrumentation, or investigating alerts. Both agent types share a common memory that links every finding to its source query, trace, deploy, or ticket and labels each as confirmed or a hypothesis. Within team-granted permissions, agents can file tickets, page responders, or draft fixes. 76% of respondents in a forthcoming survey said AI-generated code has outpaced their teams' ability to review and monitor it (vendor-reported, pre-release). Honeycomb will demo the agents at AWS re:Invent November 30 to December 4.  
Sources: [Honeycomb blog](https://honeycomb.io/blog/honeycomb-introduces-ai-sre-agents) | [PR Newswire](https://www.prnewswire.com/news-releases/honeycomb-introduces-ai-sre-agents-that-go-beyond-incident-chasing-with-goal-oriented-continuous-improvement-302926929.html)

### Minor Items (single source)

**5. New Relic: Fleet-Wide Kubernetes Triage View (importance: 2)**  
New Relic added a fleet-wide triage view to Kubernetes monitoring, announced November 4, 2026.  
Source: [New Relic What's New](https://docs.newrelic.com/whats-new/)

**6. New Relic: Browser Request Errors Page (importance: 2)**  
New Relic browser monitoring added a dedicated Request Errors page for failed AJAX and fetch requests, announced November 2, 2026.  
Source: [New Relic What's New](https://docs.newrelic.com/whats-new/)

**7. Elastic: Q2 FY2027 Earnings Date (importance: 1)**  
Elastic announced it will report Q2 FY2027 results on November 19, 2026, after market close, followed by a call at 2:00 p.m. PT / 5:00 p.m. ET. Announced November 5, 2026.  
Source: [Business Wire](https://businesswire.com/news/home/20261105280381/en/Elastic-to-Announce-Second-Quarter-Fiscal-2027-Earnings-Results-on-Thursday-November-19-2026)

### Vendors with No Stories This Week

Grafana Labs (13.3 release was October 29, out of window), Splunk (no new advisories or product announcements Nov 2-8), Coralogix, Cribl, Dash0, Observe Inc, Chronosphere/Cortex XCOR, Riverbed.

---

## Section 2: Storyline Check

**Storyline: AI agent monetization is now a reported metric for Dynatrace**  
Dynatrace Q2 FY2027 earnings introduced a new data point: 1,100+ customers using AI agents, up from 800+ last quarter. The company completed the Arize AI acquisition in early October. The Forrester Wave AIOps Leader designation last week (Oct 30) and this week's earnings report together show the AI pivot is now showing up in the numbers. Watch whether Datadog starts reporting a comparable agent-adoption metric as Scout 1.0 moves from preview to GA.

**Storyline: Datadog crossed $1B quarterly revenue and held it**  
Q2 2026: $1.12B (+36%). Q3 2026: $1.20B (+35%). Two consecutive quarters above $1B. The growth rate is remarkably stable. Scout 1.0 is in preview; if it moves to GA and starts generating add-on revenue, the next earnings call will be the first with a full quarter of data.

**Storyline: AI SRE agents are moving from demos to early access**  
Grafana Labs shipped Watchers (Oct 2026). Honeycomb shipped AI Ecosystem Oct 3 (fleet-level agent visibility), then AI SRE Agents Nov 3 (goal-oriented continuous improvement). Dynatrace shipped Autonomous SRE agents in July. Cortex XCOR (Palo Alto / Chronosphere) launched in October. The pattern: each vendor is shipping agents that don't just surface alerts but act on them. Honeycomb's agents can now file tickets and page responders within team permissions. Dynatrace's agents are now counted as an adoption metric. This is no longer a roadmap conversation.

**Storyline: Observability + Security convergence, via partnership rather than acquisition**  
The CrowdStrike + Dynatrace partnership this week is notable because it targets SIEM displacement. The press materials name "legacy SIEM" explicitly. Bindplane (the log routing tool, acquired by Dynatrace) is the technical glue. No acquisition here, just a go-to-market partnership, but it signals that observability vendors are increasingly competing in the security data pipeline space. Next event to watch: whether CrowdStrike makes a similar move with Datadog or another vendor.

**Storyline: Earnings season continues**  
Dynatrace reported Nov 3 (beat guidance, raised outlook). Datadog reported Nov 4 (beat estimates, +35% revenue). Elastic reports November 19. No other tracked vendors have announced Q3 earnings dates yet.

**Storyline: Nothing from Splunk, Coralogix, Cribl, or Dash0 this week**  
Splunk's last major item was the advisory SVD-2026-1015 (Oct 28). Cribl's last item was two weeks prior. Dash0 and Coralogix have been quieter post-ObservabilityCON. Worth noting if the gap extends to three weeks for any of them.

---

## Section 3: Bi-Weekly Web Post (Oct 26 - Nov 8, 2026)

*Window: 2026-10-26 to 2026-11-08. Items: verified stories, importance >= 3. These stories have not yet been published to mbojko.com.*

---

### Datadog and Dynatrace Lead Earnings Season; Honeycomb Ships AI SRE Agents

The last two weeks in observability were dominated by quarterly earnings, analyst rankings, and a wave of AI agent announcements that moved from preview to early access.

**Datadog Q3: $1.2B revenue, +35%, Scout 1.0 in preview**

Datadog reported Q3 2026 results on November 4. Revenue was $1,197M, up 35% year over year. The company had 4,860 customers with ARR above $100,000, up 20% from a year earlier. Non-GAAP EPS was $0.81. Q4 guidance is $1.19B-$1.20B. The company also announced Scout 1.0, a specialized AI model built by its research team for investigating production issues, now in preview and powering Bits AI Investigation. Comparative performance claims are self-reported. [Source](https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-third-quarter-2026-financial-results/)

**Dynatrace and Datadog named Forrester AIOps Leaders (Oct 29-30)**

The Forrester Wave: AIOps Platforms, Q4 2026 evaluated 10 providers on 24 criteria. Dynatrace received the highest score in Current Offering and the top score in 16 criteria, including causal root cause analysis and autonomous AI SRE. Datadog received the highest possible score in 11 criteria, including Innovation and ModelOps and AI Governance, with Bits AI reported at over 10,000 paying customers. Both reports published within 24 hours of each other. Sources: [Dynatrace](https://www.dynatrace.com/news/press-release/independent-research-firm-names-dynatrace-a-leader-in-aiops/) | [Datadog via GlobeNewswire](https://www.globenewswire.com/news-release/2026/10/29/3391641/0/en/datadog-named-a-leader-in-aiops-platforms-research.html)

**CrowdStrike and Dynatrace partner to target SIEM replacement**

On November 2 at Fal.Con Europe in Barcelona, CrowdStrike and Dynatrace announced a go-to-market partnership with three integrations available immediately: federated search across Dynatrace observability and log data via Falcon; unified incident response combining CrowdStrike endpoint telemetry with Dynatrace application and infrastructure data; and log and telemetry routing via Bindplane by Dynatrace. The press materials explicitly name legacy SIEM replacement as the goal. No pricing was disclosed. Sources: [Dynatrace](https://www.dynatrace.com/news/press-release/crowdstrike-and-dynatrace-join-forces-to-disrupt-legacy-siem-and-observability/) | [CrowdStrike](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-dynatrace-join-forces-disrupt-legacy-siem-observability/)

**Dynatrace Q2 FY2027: ARR $2.21B, 1,100+ agent customers**

Dynatrace reported Q2 FY2027 results on November 3. ARR was $2,207M, up 16% year over year. Total revenue was $580M, up 17%. Non-GAAP EPS was $0.54. Full-year guidance: ARR $2,393M-$2,413M, revenue $2,330M-$2,340M. The board authorized $1 billion in share repurchases. The company said 1,100+ customers now use Dynatrace AI agents, up from 800+ last quarter. This is the first time agent adoption has appeared as a reported metric in an earnings release. Sources: [IR](https://ir.dynatrace.com/) | [SEC 8-K](https://www.sec.gov/Archives/edgar/data/0001773383/000177338326000069/q2fy27-earningsreleaseex99.htm)

**Honeycomb ships AI SRE agents in early access**

Honeycomb announced AI SRE agents on November 3, available in early access. Two types: Personal Agent (private to the engineer, uses team runbooks, shows reasoning before acting) and Team Agents (run on a schedule, trigger, or SLO, working toward user-defined goals such as watching releases or investigating alerts). Both agents share a common memory that ties each finding to its source, labeled as confirmed or a hypothesis. Within team-granted permissions, agents can file tickets, page responders, or draft fixes. Honeycomb will demo the agents at AWS re:Invent (November 30 to December 4). Sources: [Honeycomb blog](https://honeycomb.io/blog/honeycomb-introduces-ai-sre-agents) | [PR Newswire](https://www.prnewswire.com/news-releases/honeycomb-introduces-ai-sre-agents-that-go-beyond-incident-chasing-with-goal-oriented-continuous-improvement-302926929.html)

**New Relic: GitHub Copilot integrations in public preview (Oct 28)**

New Relic launched Change Tracking for GitHub Copilot in public preview on October 28. The integration adds pre-merge checks, canary gates, regression detection, and routes alerts to GitHub Issues and Slack. Autopilot for GitHub MCP Server and Preflight for GitHub Copilot both reached GA in the same release. [Source](https://newrelic.com/press-release/20261028)

---

*Next collection: 2026-11-15. Elastic Q2 FY2027 earnings on November 19.*
