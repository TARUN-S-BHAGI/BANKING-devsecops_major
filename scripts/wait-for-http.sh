
#!/usr/bin/env sh
set -eu
URL="${1:-http://localhost:3000/api/health}"
TIMEOUT="${2:-120}"
echo "Waiting for $URL (timeout ${TIMEOUT}s)..."
end=$((SECONDS + TIMEOUT))
while [ $SECONDS -lt $end ]; do
  if curl -fsS "$URL" >/dev/null 2>&1; then echo "Service is up!"; exit 0; fi
  sleep 2
done
echo "Timed out waiting for $URL"; exit 1
