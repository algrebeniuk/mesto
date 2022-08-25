export default class UserInfo {
    constructor( {name, activity} ) {
        this._profileName = document.querySelector(name);;
        this._profileActivity = document.querySelector(activity);
    }

    getUserInfo() {
        this._userInfo = {};
        this._userInfo.name = this._profileName.textContent;
        this._userInfo.activity = this._profileActivity.textContent;
        return this._userInfo;
    }

    setUserInfo(data) {
        this._profileName.textContent = data.name;
        this._profileActivity.textContent = data.activity;
    }
}