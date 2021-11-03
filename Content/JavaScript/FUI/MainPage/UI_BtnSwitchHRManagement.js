"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnSwitchHRManagement {
    m_button;
    m_ButtonPersonnel;
    m_Notify;
    static URL = "ui://sn18zihkmos46";
    static Package = "MainPage";
    static Component = "BtnSwitchHRManagement";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnSwitchHRManagement.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnSwitchHRManagement();
        if (component == null) {
            component = UI_BtnSwitchHRManagement.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_ButtonPersonnel = component.GetChild("ButtonPersonnel");
        this.m_Notify = component.GetChild("Notify");
    }
}
exports.default = UI_BtnSwitchHRManagement;
//# sourceMappingURL=UI_BtnSwitchHRManagement.js.map