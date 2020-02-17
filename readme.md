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
    name: A sample job to print the repository's name.
    steps:
    - name: Hello world action step
      id: hello
    - uses: actions/checkout@v1.0
    - uses: @v1

    # Use the output from the `hello` step
    - name: Get repository name
      run: echo "The repository's is ${{ steps.hello.outputs.name }}"
```

## Outputs

| Name | Description |
|---|---|
| name | The name of the repository. |
| branch | The current branch name. |
| release  | The release tag if available, null otherwise. |
