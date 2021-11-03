"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_OnlineDuration_1 = require("./UI_OnlineDuration");
const fgui = require("ue");
class UI_OnlineDurationPopup {
    m_c1;
    m_InteractablePanel;
    m_OnlineDuration;
    m_t0;
    m_t1;
    static URL = "ui://5eksxjp2hktbv";
    static Package = "OnlineDuration";
    static Component = "OnlineDurationPopup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_OnlineDurationPopup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_OnlineDurationPopup();
        if (component == null) {
            component = UI_OnlineDurationPopup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_OnlineDuration = UI_OnlineDuration_1.default.createInstance(component.GetChild("OnlineDuration"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_OnlineDurationPopup;
//# sourceMappingURL=UI_OnlineDurationPopup.js.map