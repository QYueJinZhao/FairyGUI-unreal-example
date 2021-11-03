"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Frame {
    m_LowerLeft;
    m_LowerRight;
    m_UpperLeft;
    m_UpperRight;
    m_t0;
    static URL = "ui://bk2v2a36ivrzg";
    static Package = "BuiltInTheCompany";
    static Component = "Frame";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Frame.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Frame();
        if (component == null) {
            component = UI_Frame.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_LowerLeft = component.GetChild("LowerLeft");
        this.m_LowerRight = component.GetChild("LowerRight");
        this.m_UpperLeft = component.GetChild("UpperLeft");
        this.m_UpperRight = component.GetChild("UpperRight");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_Frame;
//# sourceMappingURL=UI_Frame.js.map