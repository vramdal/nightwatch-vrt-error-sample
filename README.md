# Minimized testcase for a problem with visual regression tests in Nightwatch

## To reproduce
```bash
$node --version
v16.16.0 
```

1. Install dependencies: `npm install`
2. Start the webapp: `npm run start`
3. Run the test: `npx nightwatch e2e/nightwatch-test.js`  
   The test should pass:
```
 Running Admin:
───────────────────────────────────────────────────────────────────────────────────────────────────
  ✔ Element <body> was visible after 32 milliseconds.
  ✔ Element <body> was visible after 22 milliseconds.
  ✔ Passed [ok]: The screenshot for selector <body> was captured successfully.
  ✔ Passed [ok]: Baseline screenshot does not exist; saving current screenshot to the baseline directory.
  ✔ Visual regression test results for element <body> (857ms)

  ✨ PASSED. 5 assertions. (901ms)

```
4. Modify the webapp sourcecode, any change that will cause a visual regression will do
5. Run the test again: `npx nightwatch e2e/nightwatch-test.js`  
The test runner will crash and output the following error:
```
Error
   ENAMETOOLONG: name too long, copyfile '/path/to/project/nightwatch-vrt-error-sample/node_modules/@nightwatch/vrt/node_modules/@nightwatch/html-reporter-template/html/index.html' -> '/path/to/project/nightwatch-vrt-error-sample/vrt-report/{"environments":{"defaults":{"modules":{"e2e/nightwatch-test(default)":{"modulePath":"/path/to/project/nightwatch-vrt-error-sample/e2e/nightwatch-test.js","completedSections":{"Admin":{"vrt":{"completeBaselinePath":"/path/to/project/nightwatch-vrt-error-sample/vrt/baseline/chrome_mac os x/e2e/nightwatch-test/screenshot.png","completeDiffPath":"/path/to/project/nightwatch-vrt-error-sample/vrt/diff/chrome_mac os x/e2e/nightwatch-test/screenshot.png","completeLatestPath":"/path/to/project/nightwatch-vrt-error-sample/vrt/latest/chrome_mac os x/e2e/nightwatch-test/screenshot.png","diff":0.033126169473402835},"time":0,"status":"fail"}},"sessionCapabilities":{"acceptInsecureCerts":false,"browserName":"chrome","browserVersion":"112.0.5615.49","chrome":{"chromedriverVersion":"112.0.5615.49 (bd2a7bcb881c11e8cfe3078709382934e3916914-refs/branch-heads/5615@{#936})","userDataDir":"/var/folders/pt/vx6qkft16c91sj9clwbk_jzw0000gn/T/.com.google.Chrome.VBDCXw"},"goog:chromeOptions":{"debuggerAddress":"localhost:59329"},"networkConnectionEnabled":false,"pageLoadStrategy":"normal","platformName":"mac os x","proxy":{},"setWindowRect":true,"strictFileInteractability":false,"timeouts":{"implicit":0,"pageLoad":300000,"script":30000},"unhandledPromptBehavior":"dismiss and notify","webauthn:extension:credBlob":true,"webauthn:extension:largeBlob":true,"webauthn:extension:minPinLength":true,"webauthn:extension:prf":true,"webauthn:virtualAuthenticators":true},"status":"fail"}}}},"metadata":{"date":"2023-04-18T19:57:59.605Z"}}'

```

