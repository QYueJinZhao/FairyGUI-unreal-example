"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnBuildAndUpgrade {
    m_button;
    m_BtnUpgrade;
    m_Coin;
    m_SigMoney;
    m_Switcher;
    static URL = "ui://sn18zihkhb0y22";
    static Package = "MainPage";
    static Component = "BtnBuildAndUpgrade";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnBuildAndUpgrade.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnBuildAndUpgrade();
        if (component == null) {
            component = UI_BtnBuildAndUpgrade.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BtnUpgrade = component.GetChild("BtnUpgrade");
        this.m_Coin = component.GetChild("Coin");
        this.m_SigMoney = component.GetChild("SigMoney");
        this.m_Switcher = component.GetChild("Switcher");
    }
}
exports.default = UI_BtnBuildAndUpgrade;
//# sourceMappingURL=UI_BtnBuildAndUpgrade.js.map