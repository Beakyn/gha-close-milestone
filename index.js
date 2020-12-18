const github = require("@actions/github");
const core = require("@actions/core");

function getInputs() {
  const requiredOptions = { required: true };
  
  const repository = core.getInput('repository', requiredOptions);
  const milestoneNumber = core.getInput("milestone-number", requiredOptions);
  const token = core.getInput("token", requiredOptions);

  return {
    repository,
    milestoneNumber,
    token,
  };
}

async function run() {
  try {
    const {
      repository,
      milestoneNumber,
      token,
    } = getInputs();
    const octokit = github.getOctokit(token);

    await octokit.request(`PATCH /repos/${repository}/milestones/{milestone_number}`, {  
      milestone_number: milestoneNumber,
      state: 'closed',
    });
    console.log(`Closed milestone ${milestoneName}`);
  } catch (error) {
    console.log('Error => ', error);
    core.setFailed(error.message);
  }
}

run();