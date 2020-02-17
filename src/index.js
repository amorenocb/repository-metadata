const core = require('@actions/core');
const repo = require('./repository_metadata');

const run = () => {
  try {
    const name = repo.getName();
    core.info(`Repo name extracted: ${name}`);
    const branch = repo.getBranch();
    core.info(`Branch name extracted: ${branch}`);

    const release = repo.getRelease();
    if (release) {
      core.info(`Release name extracted: ${branch}`);
    }

    core.setOutput('name', name);
    core.setOutput('branch', branch);
    core.setOutput('release', release);
  } catch (error) {
    core.setFailed(error.message);
  }
};

if (require.main === module) {
  run();
}
