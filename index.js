const github = require("@actions/github");
const core = require("@actions/core");

function getInputs() {
  const requiredOptions = { required: true };
  
  const repository = core.getInput('repository', requiredOptions);
  const milestone_number = core.getInput("milestone-number");
  const milestone_title = core.getInput("milestone-title");
  const token = process.env.GITHUB_TOKEN;

  return {
    repository,
    milestone_number,
    milestone_title,
    token,
  };
}

async function run() {
  try {
    const {
      repository,
      milestone_number,
      milestone_title,
      token,
    } = getInputs();
    
    const [owner, repo] = repository ? repository.split('/') : github.context;
    const octokit = github.getOctokit(token);
    
    if(milestone_number) {
      console.log(`Closing milestone with number ${milestone_number}`);
      await octokit.issues.updateMilestone({
        owner,
        repo,
        milestone_number,
        state: 'closed'
      });
      console.log(`Closed milestone ${milestone_number}`);
    } else if(milestone_title) {
      console.log(`Closing milestone with title ${milestone_title}`);
      const openMilestones = await octokit.issues.listMilestones({
        owner,
        repo,
        state: 'open'
      });
      const [milestone] = openMilestones.data.filter(x => x.title === milestone_title)
      if (milestone) {
        await octokit.issues.updateMilestone({
          owner,
          repo,
          milestone_number: milestone.number,
          state: 'closed'
        });
        console.log(`Closed milestone ${milestone.number} with title ${milestone.title}`);
      }
    } else {
      console.log("Could not find milestone-number or milestone-title")
      return;
    }
  } catch (error) {
    console.log('Error => ', error);
    core.setFailed(error.message);
  }
}

run();
