"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnHeaderUpgradeSelect {
    m_button;
    m_btn;
    static URL = "ui://sn18zihkhb0y1y";
    static Package = "MainPage";
    static Component = "BtnHeaderUpgradeSelect";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnHeaderUpgradeSelect.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnHeaderUpgradeSelect();
        if (component == null) {
            component = UI_BtnHeaderUpgradeSelect.CreateComponent(WorldContextObject);
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
exports.default = UI_BtnHeaderUpgradeSelect;
//# sourceMappingURL=UI_BtnHeaderUpgradeSelect.js.map