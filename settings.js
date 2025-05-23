module.exports = {
  // Base application title used in document.title
  title: 'NY Ranked Slippi Leaderboard',

  // use cname option to add CNAME file to webpack build
  // CNAME file allows to use custom domain names with gh-pages, example:
  // cname: 'omatsuri.app'
  cname: 'https://nyslippirank.tooli.win',

  // add repo path for username.github.io/repoPath for react router to recognize paths,
  // use only when deployed to github.io, leave as null for deployments with custom domains
  repoPath: 'https://jlambert360.github.io/NYSlippiLeaderboard/',

  // Google sheets ID for player connect codes.
  // https://docs.google.com/spreadsheets/d/[YOUR ID]
  spreadsheetID: '1PCbYdFmfXkyV8Om45mtlqJzPxhmk_vzT9UKOQnLva74',
};
