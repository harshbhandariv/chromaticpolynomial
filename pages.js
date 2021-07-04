const ghpages = require('gh-pages');
const pathname = `${__dirname}/frontend/build`;
const repoURL = 'https://github.com/harshbhandariv/chromaticpolynomial.git';

ghpages.publish(
  pathname,
  {
    repo: repoURL,
  },
  (err) => {
    if (err) console.log('ERROR: ', err);
    else console.log('PUBLISHED');
  }
);
