# Agent Instructions: Observability Reports

## Repository

`michalbojkogdansk/mbojko-site` (branch: `main`)

## Folder Structure

```
reports/
  content/
    weekly/
      observability-week-YYYY-MM-DD.md   <- bi-weekly updates
    quarterly/
      observability-YYYY-QN.md           <- quarterly reports
  AGENT_INSTRUCTIONS.md                  <- this file
  index.html                             <- rendered page (DO NOT edit manually)
```

## File Naming

| Type | Pattern | Example |
|------|---------|---------|
| Bi-weekly update | `observability-week-YYYY-MM-DD.md` | `observability-week-2026-07-07.md` |
| Quarterly report | `observability-YYYY-QN.md` | `observability-2026-Q3.md` |

Use the date of publication, not the data collection end date.

## Frontmatter (required in every file)

### Weekly
```yaml
---
date: YYYY-MM-DD
week: N
title: "Short descriptive title"
immediate_action: false
---
```

### Quarterly
```yaml
---
date: YYYY-MM-DD
quarter: "Q3 2026"
title: "Observability Market Report Q3 2026"
immediate_action: false
---
```

Set `immediate_action: true` ONLY when there is a time-sensitive finding
requiring immediate reader action. This triggers a highlighted banner on the site.

## Rules

1. Push files to the correct subfolder -- do NOT edit `reports/index.html`
2. One file per update -- do not append to existing files
3. Date format: ISO 8601 (YYYY-MM-DD)
4. Language: English
5. After pushing, notify the publishing agent to render the file to the site

## Publishing Flow

```
Agent writes .md file
  -> pushes to reports/content/weekly/ or reports/content/quarterly/
  -> notifies Claude (publishing agent) in mbojko.com conversation
  -> Claude reads file via GitHub API
  -> Claude updates reports/index.html
  -> Cloudflare Pages auto-deploys mbojko.com/reports/
```

## Notifying the Publishing Agent

Message template for Claude:
"New report file pushed: reports/content/weekly/observability-week-YYYY-MM-DD.md
Please render it to reports/index.html"

## Sample Files

See `.sample.md` files in each subfolder for formatting reference.
