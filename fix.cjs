const fs = require('fs');
let content = fs.readFileSync('src/screens/route-builder.js', 'utf8');
content = content.replace(/\\\`/g, '\`').replace(/\\\$/g, '$');
fs.writeFileSync('src/screens/route-builder.js', content, 'utf8');
