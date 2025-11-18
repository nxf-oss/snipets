#!/usr/bin/env bash

CHANGELOG_FILE="CHANGELOG.md"
TEMP_FILE=".changelog_raw"

# Collect commit hashes except those modifying CHANGELOG.md
COMMITS=$(git log --pretty=format:"%H" -- . ':(exclude)CHANGELOG.md')

if [ -z "$COMMITS" ]; then
    echo "No commits found to generate changelog."
    exit 0
fi

# Prepare temp data
echo "" > "$TEMP_FILE"

for COMMIT in $COMMITS; do
    HASH=$COMMIT
    AUTHOR=$(git show -s --format="%an" "$HASH")
    DATE=$(git show -s --format="%ad" --date=short "$HASH")
    MESSAGE=$(git show -s --format="%s" "$HASH")

    echo "### Commit: $HASH" >> "$TEMP_FILE"
    echo "Author: $AUTHOR" >> "$TEMP_FILE"
    echo "Date: $DATE" >> "$TEMP_FILE"
    echo "Message: $MESSAGE" >> "$TEMP_FILE"
    echo "" >> "$TEMP_FILE"

    # Changed files list
    echo "**Changed Files:**" >> "$TEMP_FILE"
    git diff-tree --no-commit-id --name-only -r "$HASH" | while read FILE; do
        echo "- $FILE" >> "$TEMP_FILE"
    done
    echo "" >> "$TEMP_FILE"

    # Full diff
    echo "**Diff:**" >> "$TEMP_FILE"
    echo '```diff' >> "$TEMP_FILE"
    git show --pretty="" "$HASH" >> "$TEMP_FILE"
    echo '```' >> "$TEMP_FILE"
    echo "" >> "$TEMP_FILE"
    echo "---" >> "$TEMP_FILE"
    echo "" >> "$TEMP_FILE"
done

# Initial header if changelog doesn't exist
if [ ! -f "$CHANGELOG_FILE" ]; then
    {
        echo "# Changelog"
        echo ""
        echo "This file contains automatically generated commit history with detailed file changes and diffs."
        echo ""
        echo "---"
        echo ""
    } > "$CHANGELOG_FILE"
fi

# Insert at top of changelog
{
    echo "## Update: $(date +%Y-%m-%d)"
    echo ""
    cat "$TEMP_FILE"
    cat "$CHANGELOG_FILE"
} > "$CHANGELOG_FILE.tmp"

mv "$CHANGELOG_FILE.tmp" "$CHANGELOG_FILE"
rm "$TEMP_FILE"

echo "CHANGELOG updated with full diff details."
