"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_FireDialogWith2Btn_1 = require("./UI_FireDialogWith2Btn");
const fgui = require("ue");
class UI_DelvieryManFirePopupPanel {
    m_c1;
    m_InteractablePanel;
    m_frame;
    m_t0;
    m_t1;
    static URL = "ui://n16w4m5pqb9d34";
    static Package = "Popup";
    static Component = "DelvieryManFirePopupPanel";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_DelvieryManFirePopupPanel.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_DelvieryManFirePopupPanel();
        if (component == null) {
            component = UI_DelvieryManFirePopupPanel.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_frame = UI_FireDialogWith2Btn_1.default.createInstance(component.GetChild("frame"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_DelvieryManFirePopupPanel;
//# sourceMappingURL=UI_DelvieryManFirePopupPanel.js.map