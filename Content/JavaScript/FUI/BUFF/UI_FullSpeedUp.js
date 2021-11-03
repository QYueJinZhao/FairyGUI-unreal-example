"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_accelerate_1 = require("./UI_accelerate");
const fgui = require("ue");
class UI_FullSpeedUp {
    m_n1;
    m_t0;
    static URL = "ui://tm2lcvzypip19";
    static Package = "BUFF";
    static Component = "FullSpeedUp";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_FullSpeedUp.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_FullSpeedUp();
        if (component == null) {
            component = UI_FullSpeedUp.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n1 = UI_accelerate_1.default.createInstance(component.GetChild("n1"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_FullSpeedUp;
//# sourceMappingURL=UI_FullSpeedUp.js.map