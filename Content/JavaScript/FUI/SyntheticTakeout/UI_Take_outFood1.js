"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Take_outFood1 {
    m_GradeBottom;
    m_packing;
    m_t0;
    static URL = "ui://tqsc8htvwfi04d";
    static Package = "SyntheticTakeout";
    static Component = "Take-outFood1";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Take_outFood1.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Take_outFood1();
        if (component == null) {
            component = UI_Take_outFood1.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_GradeBottom = component.GetChild("GradeBottom");
        this.m_packing = component.GetChild("packing");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_Take_outFood1;
//# sourceMappingURL=UI_Take_outFood1.js.map