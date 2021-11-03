"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Tips_1 = require("./UI_Tips");
const fgui = require("ue");
class UI_DoubleTheTip {
    m_n4;
    m_t0;
    static URL = "ui://tm2lcvzypip16";
    static Package = "BUFF";
    static Component = "DoubleTheTip";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_DoubleTheTip.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_DoubleTheTip();
        if (component == null) {
            component = UI_DoubleTheTip.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n4 = UI_Tips_1.default.createInstance(component.GetChild("n4"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_DoubleTheTip;
//# sourceMappingURL=UI_DoubleTheTip.js.map