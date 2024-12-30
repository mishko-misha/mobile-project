import AppScreen from '../AppScreen.js';

const SELECTORS = {
    SCREEN: '//android.widget.ImageView',
};

class LoginScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }
    
    get screen () {return $(SELECTORS.SCREEN);}
    private get userNameInput () { return $('xpath:(//android.widget.EditText[@resource-id="text-input-flat"])[1]'); }
    private get passwordInput () { return $('xpath:(//android.widget.EditText[@resource-id="text-input-flat"])[2]'); }
    private get loginButton () { return $('xpath://android.widget.TextView[@content-desc="login_btn"]'); }


    async tapOnUserNameInput(){
        await this.userNameInput.click();
    }

    async tapOnPasswordInput(){
        await this.passwordInput.click();
    }

    async tapOnLoginButton(){
        await this.loginButton.click();
    }

    async InputLogin({ username }:{username:string}) {
        await this.userNameInput.setValue(username);
    }

    async InputPassword({password }:{password:string}) {
        await this.passwordInput.setValue(password);
    }
}

export default new LoginScreen();
