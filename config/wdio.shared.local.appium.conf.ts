import { config as baseConfig } from './wdio.shared.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    services: [
        ...baseConfig.services || [],
        [
            'appium',
            {
                args: {
                    relaxedSecurity: true,
                    log: './logs/appium.log',
                },
            },
        ],
    ],
    before: async () => {
        if (driver.isAndroid) {
            await driver.updateSettings({
                waitForSelectorTimeout: 3 * 1000
            });
        }
    },
    capabilities: []
};
