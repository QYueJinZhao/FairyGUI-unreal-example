"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_T1_1 {
    m_1;
    m_Mask;
    m_t0;
    static URL = "ui://tqsc8htvwfi03u";
    static Package = "SyntheticTakeout";
    static Component = "T1-1";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_T1_1.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_T1_1();
        if (component == null) {
            component = UI_T1_1.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_1 = component.GetChild("1");
        this.m_Mask = component.GetChild("Mask");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_T1_1;
//# sourceMappingURL=UI_T1_1.js.map