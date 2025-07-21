// cleanup.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'assets', 'IDHL-Fostr-theme.css');

fs.unlink(filePath, (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.log('✅ File already deleted or not found.');
    } else {
      console.error('❌ Error deleting file:', err);
    }
  } else {
    console.log('🧹 File deleted successfully:', filePath);
  }
});
