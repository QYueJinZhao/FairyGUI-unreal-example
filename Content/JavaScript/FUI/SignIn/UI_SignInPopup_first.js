"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Popup_first_1 = require("./UI_Popup_first");
const fgui = require("ue");
class UI_SignInPopup_first {
    m_c1;
    m_InteractablePanel;
    m_Popup_first;
    m_t0;
    m_t1;
    static URL = "ui://h9dczuj8daci4o";
    static Package = "SignIn";
    static Component = "SignInPopup_first";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_SignInPopup_first.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_SignInPopup_first();
        if (component == null) {
            component = UI_SignInPopup_first.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_Popup_first = UI_Popup_first_1.default.createInstance(component.GetChild("Popup_first"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_SignInPopup_first;
//# sourceMappingURL=UI_SignInPopup_first.js.map