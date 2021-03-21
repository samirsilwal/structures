#!/bin/bash

changelog() {
  # NOTE: This requires github_changelog_generator to be installed.
  # https://github.com/skywinder/github-changelog-generator

  if [ -z "$NEXT" ]; then
      NEXT="Unreleased"
  fi

  echo "Generating changelog upto version: $NEXT"
  github_changelog_generator \
    --user="samirsilwal" \
    --project="structures" \
    --token="$GITHUB_TOKEN" \
    --no-verbose \
    --pr-label "**Changes**" \
    --bugs-label "**Bug Fixes**" \
    --issues-label "**Closed Issues**" \
    --future-release="$NEXT" \
    --release-branch=master \
    --exclude-labels=unnecessary,duplicate,question,invalid,wontfix
}

printfln() {
    printf "\n$1\n"
}

BRANCH=$(if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then echo "$TRAVIS_BRANCH"; else echo "$TRAVIS_PULL_REQUEST_BRANCH"; fi)


if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
    printfln "Exiting for pull request without versioning .....!!!!"
fi

last_tag=$(git tag --sort=-creatordate | head -n 1)

printfln "$last_tag"

if [ -z "$last_tag" ]; then
    new_tag="1.0.0"
else
    if [ "$BRANCH" == "master" ]; then
        new_tag=$(semver bump major $last_tag)
    elif [ "$BRANCH" == "dev" ]; then
        new_tag=$(semver bump patch $last_tag)
        timestamp=$(date -u +%Y%m%d%H%M%S)
        new_tag="${new_tag}-${BRANCH}.$timestamp"
    fi
fi



if [ "$BRANCH" == "dev" ] || [ "$BRANCH" == "master" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
    echo "Bumping the version: ${last_tag} -> ${new_tag}"
    git tag "${new_tag}"

    # changelog
    # git add CHANGELOG.md

    # export TEST=false
    
    hub release create "$new_tag" -m "$new_tag" || true
fi


