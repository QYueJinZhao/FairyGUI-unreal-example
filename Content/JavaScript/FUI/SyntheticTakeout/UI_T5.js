"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_T5_1_1 = require("./UI_T5_1");
const fgui = require("ue");
class UI_T5 {
    m_T5_1;
    m_icon1;
    m_t0;
    static URL = "ui://tqsc8htvwfi041";
    static Package = "SyntheticTakeout";
    static Component = "T5";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_T5.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_T5();
        if (component == null) {
            component = UI_T5.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_T5_1 = UI_T5_1_1.default.createInstance(component.GetChild("T5-1"), WorldContextObject);
        this.m_icon1 = component.GetChild("icon1");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_T5;
//# sourceMappingURL=UI_T5.js.map