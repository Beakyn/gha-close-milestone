<img src="https://beakyn.com/assets/beakyn-logo-v2-color.png" alt="Beakyn" height="40" />

# Close Milestone

Action to close milestone

## Pre-requisites

Create a workflow .yml file in your .github/workflows directory. An example workflow is available below. For more information, reference the GitHub Help Documentation for Creating a workflow file.

## Inputs

`repository`: Github repository. Add the Github context value: `github.repository`. (**required**)

Either `milestone-number` or `milestone-title` is required.

## Examples

```yaml
- name: Close milestone
  uses: Beakyn/gha-close-milestone@master
  env:
    GITHUB_TOKEN: ${{ github.token }}
  with:
    repository: ${{ github.repository }}
    milestone-number: 1
```

```yaml
- name: Close milestone
  uses: Beakyn/gha-close-milestone@master
  env:
    GITHUB_TOKEN: ${{ github.token }}
  with:
    repository: ${{ github.repository }}
    milestone-title: v1.1.1
```
