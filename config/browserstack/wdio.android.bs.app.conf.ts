import { config as baseConfig } from '../wdio.shared.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    specs: ["../../tests/specs/**/app*.spec.ts"],

    user: process.env.BROWSERSTACK_USER || 'xxxxxxxxxxx',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'xxxxxxxxxxx',
    services: ['browserstack'],
    hostname: 'hub.browserstack.com',
    port: 443,
    protocol: 'https',

    capabilities: [
        {
            'appium:app': 'link app',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Google Pixel 7',
            'appium:platformVersion': '13.0',
            'appium:autoGrantPermissions': true,
            'appium:orientation': 'PORTRAIT',    
            'appium:newCommandTimeout': 240
        },
    ] as WebdriverIO.Capabilities[]
};