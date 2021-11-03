"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_T6_1_1 = require("./UI_T6_1");
const fgui = require("ue");
class UI_T6 {
    m_T6_1;
    m_icon2;
    m_t0;
    static URL = "ui://tqsc8htvwfi043";
    static Package = "SyntheticTakeout";
    static Component = "T6";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_T6.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_T6();
        if (component == null) {
            component = UI_T6.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_T6_1 = UI_T6_1_1.default.createInstance(component.GetChild("T6-1"), WorldContextObject);
        this.m_icon2 = component.GetChild("icon2");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_T6;
//# sourceMappingURL=UI_T6.js.map