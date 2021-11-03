"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Popup_1 = require("./UI_Popup");
const fgui = require("ue");
class UI_InteractionPopup {
    m_c1;
    m_InteractablePanel;
    m_Popup;
    m_t0;
    m_t1;
    static URL = "ui://tqsc8htvpip1a";
    static Package = "SyntheticTakeout";
    static Component = "InteractionPopup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_InteractionPopup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_InteractionPopup();
        if (component == null) {
            component = UI_InteractionPopup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_Popup = UI_Popup_1.default.createInstance(component.GetChild("Popup"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_InteractionPopup;
//# sourceMappingURL=UI_InteractionPopup.js.map