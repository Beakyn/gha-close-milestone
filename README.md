# Close Milestone

Action to close milestone

## Pre-requisites

Create a workflow .yml file in your .github/workflows directory. An example workflow is available below. For more information, reference the GitHub Help Documentation for Creating a workflow file.

## Inputs

`repository`: Github repository. Add the Github context value: `github.repository`. (**required**)

`milestone`: Milestone id, not title please. (**required**)

## Example

```yaml
- name: Close milestone
  uses: Beakyn/close-milestone@master
  env:
    GITHUB_TOKEN: ${{ github.token }}
  with:
    repository: ${{ github.repository }}
    milestone: 1
```
