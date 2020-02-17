const { context } = require('@actions/github');
const repo = require('../src/repository_metadata.js');

describe('Get repository name, branch and release tag from git ref', () => {
  // test('Get name of repository', () => {
  //   context.repository = 'thenotcompany/some-repository';
  //   expect(repo.getName()).toBe('some-repository');
  // });

  test('Get name of master branch', () => {
    context.ref = 'refs/head/master';
    expect(repo.getBranch()).toBe('Some branch name');
  });

  test('Get name of feature branch', () => {
    context.ref = 'refs/head/some-feature';
    expect(repo.getBranch()).toBe('Some branch name');
  });

  // test('Get name of release', () => {
  //   context.ref = 'refs/tags/v1.0';
  //   expect(repo.getRelease()).toBe('v1.0');
  // });
  //
  // test('Get name of release with caps', () => {
  //   context.ref = 'refs/tags/V1.0';
  //   expect(repo.getRelease()).toBe('v1.0');
  // });
  //
  // test('Get name of release only numbers', () => {
  //   context.ref = 'refs/tags/1.0';
  //   expect(repo.getRelease()).toBe('1.0');
  // });
  //
  // test('Get name of release of non release ref', () => {
  //   context.ref = 'refs/head/master';
  //   expect(repo.getRelease()).toBe(null);
  // });
});
