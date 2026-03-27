import fs from 'fs';
const files = [
  'splash.js', 'welcome.js', 'login.js', 
  'register-step1.js', 'register-step2.js', 'register-step3a.js', 'register-step3b.js', 
  'password-recovery.js', 'onboarding.js'
];
for(const f of files) {
  const p = 'd:/antigravitypruebasescritas/PruebaE015/src/screens/' + f;
  let code = fs.readFileSync(p, 'utf8');
  if (!code.includes('hideGlobalNav')) {
    if (code.includes('../helpers.js')) {
      code = code.replace(/import \{([^}]+)\} from '\.\.\/helpers\.js';/, "import { $1, hideGlobalNav } from '../helpers.js';");
    } else {
      code = "import { hideGlobalNav } from '../helpers.js';\n" + code;
    }
    code = code.replace(/(app\.innerHTML\s*=\s*`[\s\S]*?`;)/, "$1\n    hideGlobalNav();");
    fs.writeFileSync(p, code);
    console.log('Updated ' + f);
  }
}
