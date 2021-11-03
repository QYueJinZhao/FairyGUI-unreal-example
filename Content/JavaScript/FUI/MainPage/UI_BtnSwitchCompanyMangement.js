"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnSwitchCompanyMangement {
    m_button;
    m_ButtonCompany;
    m_Notify;
    static URL = "ui://sn18zihkmos45";
    static Package = "MainPage";
    static Component = "BtnSwitchCompanyMangement";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnSwitchCompanyMangement.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnSwitchCompanyMangement();
        if (component == null) {
            component = UI_BtnSwitchCompanyMangement.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_ButtonCompany = component.GetChild("ButtonCompany");
        this.m_Notify = component.GetChild("Notify");
    }
}
exports.default = UI_BtnSwitchCompanyMangement;
//# sourceMappingURL=UI_BtnSwitchCompanyMangement.js.map