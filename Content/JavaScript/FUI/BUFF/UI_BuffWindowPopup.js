"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BuffWindow_1 = require("./UI_BuffWindow");
const fgui = require("ue");
class UI_BuffWindowPopup {
    m_c1;
    m_InteractablePanel;
    m_BuffWindow;
    m_t0;
    m_t1;
    static URL = "ui://tm2lcvzyjdb720";
    static Package = "BUFF";
    static Component = "BuffWindowPopup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BuffWindowPopup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BuffWindowPopup();
        if (component == null) {
            component = UI_BuffWindowPopup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_BuffWindow = UI_BuffWindow_1.default.createInstance(component.GetChild("BuffWindow"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_BuffWindowPopup;
//# sourceMappingURL=UI_BuffWindowPopup.js.map