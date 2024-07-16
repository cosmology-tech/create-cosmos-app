#!/bin/bash

yarn workspaces list --json | while read -r line; do
  # Extract location and name
  location=$(echo "$line" | sed -E 's/.*"location":"([^"]+)".*/\1/')
  name=$(echo "$line" | sed -E 's/.*"name":"([^"]+)".*/\1/')

  # Check if location starts with "examples/" or "templates/"
  if [[ "$location" == examples/* ]] || [[ "$location" == templates/* ]]; then
    echo "Updating lockfile for $name in $location"
    if [ -d "$location" ]; then
      (cd "$location" && yarn install --mode update-lockfile)
    else
      echo "Directory does not exist: $location"
    fi
  fi
done
