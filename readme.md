# Repository Metadata Action
![](https://github.com/amorenocb/repository-metadata/workflows/Tests/badge.svg)

Based on [Sean Smith's Docker Build Push action](https://github.com/mr-smithers-excellent/docker-build-push).
> Get a checked out repository's name, branch name and/or release tag if available.

## Usage

```yml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A sample job to print the repository's current push branch name.
    steps:
      - name: Get repository metadata
        id: repository_metadata
        uses: amorenocb/repository-metadata@v0.1.0

      # Use the output from the `hello` step
      - name: Get repository name
        run: echo "${{ steps.repository_metadata.outputs.branch }}"
```

## Outputs

| Name | Description |
|---|---|
| name | The name of the repository. |
| branch | The current branch name. |
| release  | The release tag if available, null otherwise. |
