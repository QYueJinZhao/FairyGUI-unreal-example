"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnUpgrade_1 = require("./UI_BtnUpgrade");
const fgui = require("ue");
class UI_TitleCompanyPlayerLevel {
    m_BtnUpgrade;
    m_t0;
    static URL = "ui://p6ocxgya95268";
    static Package = "Top";
    static Component = "TitleCompanyPlayerLevel";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_TitleCompanyPlayerLevel.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_TitleCompanyPlayerLevel();
        if (component == null) {
            component = UI_TitleCompanyPlayerLevel.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BtnUpgrade = UI_BtnUpgrade_1.default.createInstance(component.GetChild("BtnUpgrade"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_TitleCompanyPlayerLevel;
//# sourceMappingURL=UI_TitleCompanyPlayerLevel.js.map