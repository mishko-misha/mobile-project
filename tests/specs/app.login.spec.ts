import LoginScreen from "../pageobjects/android/LoginScreen.js";
//const percySnapshot = require('@percy/webdriverio');
import percySnapshot from '@percy/webdriverio';

describe('Initialization login form', () => {
    beforeEach(async () => {
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able login successfully', async () => {
        await percySnapshot('Login Screen');
        await LoginScreen.tapOnUserNameInput();
        await LoginScreen.InputLogin({ username: 'test@gmail.com' });
        await LoginScreen.InputPassword({ password: 'Test1234!' });
        await LoginScreen.tapOnLoginButton();
    });
});