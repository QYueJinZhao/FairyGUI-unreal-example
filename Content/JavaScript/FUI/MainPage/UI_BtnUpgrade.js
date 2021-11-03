"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnUpgrade {
    m_button;
    m_BtnUpgrade;
    m_Coin;
    m_Up;
    m_TextUpgrade;
    static URL = "ui://sn18zihk90iz13";
    static Package = "MainPage";
    static Component = "BtnUpgrade";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnUpgrade.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnUpgrade();
        if (component == null) {
            component = UI_BtnUpgrade.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BtnUpgrade = component.GetChild("BtnUpgrade");
        this.m_Coin = component.GetChild("Coin");
        this.m_Up = component.GetChild("Up");
        this.m_TextUpgrade = component.GetChild("TextUpgrade");
    }
}
exports.default = UI_BtnUpgrade;
//# sourceMappingURL=UI_BtnUpgrade.js.map