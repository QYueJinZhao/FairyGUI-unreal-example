"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_add_10min {
    m_text;
    m_t0;
    static URL = "ui://5eksxjp2hktbm";
    static Package = "OnlineDuration";
    static Component = "add_10min";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_add_10min.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_add_10min();
        if (component == null) {
            component = UI_add_10min.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_text = component.GetChild("text");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_add_10min;
//# sourceMappingURL=UI_add_10min.js.map