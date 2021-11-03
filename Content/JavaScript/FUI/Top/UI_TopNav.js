"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_TitleCompanyPlayerLevel_1 = require("./UI_TitleCompanyPlayerLevel");
const UI_BtnSetting_1 = require("./UI_BtnSetting");
const UI_TitleCompanyGold_1 = require("./UI_TitleCompanyGold");
const fgui = require("ue");
class UI_TopNav {
    m_enlarge;
    m_TitleCompanyPlayerLevel;
    m_BtnSetting;
    m_TitleCompanyGold;
    m_t0;
    static URL = "ui://p6ocxgya9526t";
    static Package = "Top";
    static Component = "TopNav";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_TopNav.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_TopNav();
        if (component == null) {
            component = UI_TopNav.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_enlarge = UI_TitleCompanyPlayerLevel_1.default.createInstance(component.GetChild("enlarge"), WorldContextObject);
        this.m_TitleCompanyPlayerLevel = UI_TitleCompanyPlayerLevel_1.default.createInstance(component.GetChild("TitleCompanyPlayerLevel"), WorldContextObject);
        this.m_BtnSetting = UI_BtnSetting_1.default.createInstance(component.GetChild("BtnSetting"), WorldContextObject);
        this.m_TitleCompanyGold = UI_TitleCompanyGold_1.default.createInstance(component.GetChild("TitleCompanyGold"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_TopNav;
//# sourceMappingURL=UI_TopNav.js.map