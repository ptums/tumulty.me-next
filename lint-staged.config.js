module.exports = {
  '*.{js,ts,jsx,tsx}': ['eslint --quiet --fix', 'npm run test --bail --findRelatedTests'],
  '*.{css,scss,md,json}': 'prettier --write',
}
