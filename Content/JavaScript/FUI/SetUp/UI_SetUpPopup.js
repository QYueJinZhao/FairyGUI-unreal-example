"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_SetUp_1 = require("./UI_SetUp");
const fgui = require("ue");
class UI_SetUpPopup {
    m_c1;
    m_InteractablePanel;
    m_SetUp;
    m_t0;
    m_t1;
    static URL = "ui://rnl6o1bldaci5";
    static Package = "SetUp";
    static Component = "SetUpPopup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_SetUpPopup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_SetUpPopup();
        if (component == null) {
            component = UI_SetUpPopup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_SetUp = UI_SetUp_1.default.createInstance(component.GetChild("SetUp"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_SetUpPopup;
//# sourceMappingURL=UI_SetUpPopup.js.map