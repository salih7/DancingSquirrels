const FACEBOOK = {
  ID: process.env.FacebookClientID || 'CLIENT ID',
  SECRET: process.env.FacebookClientSecret || 'CLIENT SECRET'
}

const GOOGLE = {
  ID: process.env.GoogleClientID || 'CLIENT ID',
  SECRET: process.env.GoogleClientSecret || 'CLIENT SECRET'
}

const GITHUB = {
  ID: process.env.GitHubClientID || 'CLIENT ID',
  SECRET: process.env.GitHubClientSecret || 'CLIENT SECRET'
}

module.exports.FACEBOOK = FACEBOOK;
module.exports.GOOGLE = GOOGLE;
module.exports.GITHUB = GITHUB;
