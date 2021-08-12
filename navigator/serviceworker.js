var data = {
    userAgent: navigator.userAgent,
    appVersion: navigator.appVersion,
    platform: navigator.platform,
    webdriver: navigator.webdriver,
    deviceMemory: navigator.deviceMemory,
    hardwareConcurrency: navigator.hardwareConcurrency,
    cpuClass: navigator.cpuClass,
    vendor: navigator.vendor,
    language: navigator.language,
    languages: navigator.languages,
  }
  
  const broadcast = new BroadcastChannel('sw-channel');
  
  setTimeout(() => {
    broadcast.postMessage(data);
  }, 2000);