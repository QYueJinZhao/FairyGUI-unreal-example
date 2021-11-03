"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Penalty_1 = require("./UI_Penalty");
const fgui = require("ue");
class UI_PenaltyPopup {
    m_c1;
    m_InteractablePanel;
    m_Penalty;
    m_t0;
    m_t1;
    static URL = "ui://7zka63zlqqq9n";
    static Package = "TownEvent";
    static Component = "PenaltyPopup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_PenaltyPopup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_PenaltyPopup();
        if (component == null) {
            component = UI_PenaltyPopup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_Penalty = UI_Penalty_1.default.createInstance(component.GetChild("Penalty"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_PenaltyPopup;
//# sourceMappingURL=UI_PenaltyPopup.js.map