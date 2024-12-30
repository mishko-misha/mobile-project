import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";

export const config: WebdriverIO.Config = {
    ...baseConfig,

    specs: ["../tests/specs/**/app*.spec.ts"],

    capabilities: [
        {
            platformName: "Android",
            "wdio:maxInstances": 1,
            "appium:deviceName": "Pixel_7_API_34",
            "appium:platformVersion": "14.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:app": join(
                process.cwd(),
                "app",
                "app-release.apk"
            ),
            "appium:appPackage": "app.package",
            "appium:autoGrantPermissions": true,
            "appium:autoAcceptAlerts": true,
            "appium:newCommandTimeout": 240,
        },
    ],
};