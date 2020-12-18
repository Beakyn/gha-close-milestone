# Release Notes Format

Action to close milestone

## Pre-requisites

Create a workflow .yml file in your .github/workflows directory. An example workflow is available below. For more information, reference the GitHub Help Documentation for Creating a workflow file.

## Inputs

`github-token`: Github token. Add the Github context value: `github.token`. (**required**)

`repository`: Github repository. Add the Github context value: `github.repository`. (**required**)

`milestone`: Milestone id, not title please. (**required**)

## Example

```yaml
- name: Close milestone
  uses: Beakyn/close-milestone@master
  with:
    # required
    github-token: ${{ github.token }}
    repository: ${{ github.repository }}
    milestone: ${{ github.event.inputs.milestone }}
```
