// This action was mainly inspired by Sean Smith's Github action docker-build-push.
// Some lines where taken directly from his action at:
// https://github.com/mr-smithers-excellent/docker-build-push/blob/master/src/docker.js

const { context } = require('@actions/github');

// const getName = () => {
//   const repository = context.repository.toLowerCase().split('/').pop();
//   return repository;
// };

const getBranch = () => {
  const branch = context.ref.toLowerCase().split('/').pop();
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
  // getName,
  getBranch,
  // getRelease,
};
