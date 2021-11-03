"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_T2_1 {
    m_2;
    m_Mask;
    m_t0;
    static URL = "ui://tqsc8htvwfi03w";
    static Package = "SyntheticTakeout";
    static Component = "T2-1";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_T2_1.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_T2_1();
        if (component == null) {
            component = UI_T2_1.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_2 = component.GetChild("2");
        this.m_Mask = component.GetChild("Mask");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_T2_1;
//# sourceMappingURL=UI_T2_1.js.map