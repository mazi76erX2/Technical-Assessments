#!/bin/bash
# remove_git.sh - Remove all .git directories and files from subdirectories

TARGET_DIR="${1:-.}"  # Use current directory if no argument provided

echo "Searching for .git items in: $TARGET_DIR"

# Remove .git directories
find "$TARGET_DIR" -type d -name ".git" -prune -exec rm -rf {} \; 2>/dev/null

# Remove .git files (.gitignore, .gitattributes, .gitkeep, etc.)
find "$TARGET_DIR" -type f -name ".git*" -delete 2>/dev/null

echo "Done! All .git directories and files have been removed."