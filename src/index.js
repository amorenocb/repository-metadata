const core = require('@actions/core');
const repo = require('./repository_metadata');

const run = () => {
  try {
    // const name = repo.getName();
    const branch = repo.getBranch();
    // const release = repo.getRelease();

    // core.setOutput('name', name);
    core.info(`Branch name extracted: ${branch}`);
    core.setOutput('branch', branch);
    // core.setOutput('release', release);
  } catch (error) {
    core.setFailed(error.message);
  }
};

if (require.main === module) {
  run();
}
