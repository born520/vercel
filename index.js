module.exports = (req, res) => {
  // Google Apps Script 웹앱으로 리디렉션
  res.writeHead(302, { Location: 'https://script.google.com/macros/s/AKfycbzq2so68G2z8dvi35fEQ75Ju67wjSZrwtr6dZt7qHYTX7fvfROwy9kiH3EI-e-Db4M1/exec' });
  res.end();
};
