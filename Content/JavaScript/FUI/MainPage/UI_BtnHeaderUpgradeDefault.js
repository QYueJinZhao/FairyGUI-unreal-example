"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnHeaderUpgradeDefault {
    m_button;
    m_btn;
    static URL = "ui://sn18zihkhb0y1z";
    static Package = "MainPage";
    static Component = "BtnHeaderUpgradeDefault";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnHeaderUpgradeDefault.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnHeaderUpgradeDefault();
        if (component == null) {
            component = UI_BtnHeaderUpgradeDefault.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_btn = component.GetChild("btn");
    }
}
exports.default = UI_BtnHeaderUpgradeDefault;
//# sourceMappingURL=UI_BtnHeaderUpgradeDefault.js.map