#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BREW_RUBY33_BIN="/opt/homebrew/opt/ruby@3.3/bin"
BREW_RUBY_BIN="/opt/homebrew/opt/ruby/bin"

if [[ -d "$BREW_RUBY33_BIN" ]]; then
  export PATH="$BREW_RUBY33_BIN:$PATH"
elif [[ -d "$BREW_RUBY_BIN" ]]; then
  export PATH="$BREW_RUBY_BIN:$PATH"
fi

cd "$ROOT_DIR"

bundle config set --local path "vendor/bundle"
bundle install

exec bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000
