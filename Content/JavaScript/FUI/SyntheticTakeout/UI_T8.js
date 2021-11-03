"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_T8_1_1 = require("./UI_T8_1");
const fgui = require("ue");
class UI_T8 {
    m_T8_1;
    m_icon2;
    m_t0;
    static URL = "ui://tqsc8htvwfi047";
    static Package = "SyntheticTakeout";
    static Component = "T8";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_T8.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_T8();
        if (component == null) {
            component = UI_T8.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_T8_1 = UI_T8_1_1.default.createInstance(component.GetChild("T8-1"), WorldContextObject);
        this.m_icon2 = component.GetChild("icon2");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_T8;
//# sourceMappingURL=UI_T8.js.map