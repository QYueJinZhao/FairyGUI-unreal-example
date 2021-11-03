"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_ConstructionAndContracting_1 = require("./UI_ConstructionAndContracting");
const fgui = require("ue");
class UI_ConstructionAndContractingPopup {
    m_c1;
    m_InteractablePanel;
    m_n1;
    m_t0;
    m_t1;
    static URL = "ui://n16w4m5p9ti14d";
    static Package = "Popup";
    static Component = "ConstructionAndContractingPopup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_ConstructionAndContractingPopup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_ConstructionAndContractingPopup();
        if (component == null) {
            component = UI_ConstructionAndContractingPopup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_n1 = UI_ConstructionAndContracting_1.default.createInstance(component.GetChild("n1"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_ConstructionAndContractingPopup;
//# sourceMappingURL=UI_ConstructionAndContractingPopup.js.map