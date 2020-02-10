window.ReviewsFontKitConfig = {
  asyncLoading: { enabled: false },
  autoA11y: { enabled: true },
  baseUrl: 'hrr43fecheskett.s3.us-east-2.amazonaws.com',
  detectConflictsUntil: null,
  license: 'free',
  method: 'css',
  minify: { enabled: true },
  v4FontFaceShim: { enabled: true },
  v4shim: { enabled: true },
  version: 'latest',
};
// Need to update this to being more like FontAwesomes implementation
(function loadCSS() {
  if (!document.getElementById('reviewsicons')) {
    const link = document.createElement('link');
    link.id = 'reviewsicons';
    link.href = 'https://hrr43fecheskett.s3.us-east-2.amazonaws.com/styles/styles.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
}());
