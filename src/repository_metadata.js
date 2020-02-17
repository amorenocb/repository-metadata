// This action was mainly inspired by Sean Smith's Github action docker-build-push.
// Some lines where taken directly from his action at:
// https://github.com/mr-smithers-excellent/docker-build-push/blob/master/src/docker.js

const { context } = require('@actions/github');
const core = require('@actions/core');


const getName = () => {
  core.info(context);
  const slug = context.repository.toLowerCase();
  const repository = slug.split('/').pop();
  return repository;
};

const getBranch = () => {
  const ref = context.ref.toLowerCase();
  const branch = ref.split('/').pop();
  return branch;
};


// const getRelease = () => {
//   if (context.ref.includes('refs/tags/')) {
//     const release = context.ref.toLowerCase().split('/').pop();
//     return release;
//   }
//   return null;
// };


module.exports = {
  getName,
  getBranch,
  // getRelease,
};
