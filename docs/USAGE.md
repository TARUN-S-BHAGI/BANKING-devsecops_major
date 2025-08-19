
USAGE - Fully automated flow (no manual steps after setup)

1) Push this repo to GitHub main branch.
2) In GitHub repo settings -> Secrets and variables -> Actions add:
   - GITLAB_REPO_HTTP (https://gitlab.com/<group>/<repo>.git)
   - GITLAB_TOKEN (GitLab PAT with api & write_repository)
3) In GitLab project -> Settings -> CI/CD -> Variables add (masked):
   - SNYK_TOKEN
   - DOCKERHUB_USERNAME
   - DOCKERHUB_TOKEN
4) Install DeepSource GitHub App for this repo (or configure DeepSource).
5) Push to GitHub; the Action will mirror to GitLab (if configured). GitLab pipeline will auto-run and produce reports.
6) View artifacts in GitLab pipeline (snyk_report.json, zap-baseline.html, zap.json, trivy_report.json if present).
