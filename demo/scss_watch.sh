#! /bin/bash
base_dir=$(dirname $0)
sass --scss --watch --sourcemap $base_dir/scss:$base_dir/styles
echo "watching"

