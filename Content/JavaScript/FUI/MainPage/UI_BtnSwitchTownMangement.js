"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnSwitchTownMangement {
    m_button;
    m_ButtonTown;
    m_Notify;
    static URL = "ui://sn18zihkmos47";
    static Package = "MainPage";
    static Component = "BtnSwitchTownMangement";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnSwitchTownMangement.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnSwitchTownMangement();
        if (component == null) {
            component = UI_BtnSwitchTownMangement.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_ButtonTown = component.GetChild("ButtonTown");
        this.m_Notify = component.GetChild("Notify");
    }
}
exports.default = UI_BtnSwitchTownMangement;
//# sourceMappingURL=UI_BtnSwitchTownMangement.js.map