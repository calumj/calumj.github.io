const data = {
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
    userAgentDataPlatform: navigator?.userAgentData?.platform
}

const broadcast = new BroadcastChannel('service-worker');

broadcast.onmessage = function (event) {
    if (event.data.type == 'request') {
        setTimeout(broadcast.postMessage({ type: 'response', data }), 100);
    }
};