"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BgTime {
    m_img;
    m_time;
    static URL = "ui://5eksxjp2hktbn";
    static Package = "OnlineDuration";
    static Component = "BgTime";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BgTime.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BgTime();
        if (component == null) {
            component = UI_BgTime.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_img = component.GetChild("img");
        this.m_time = component.GetChild("time");
    }
}
exports.default = UI_BgTime;
//# sourceMappingURL=UI_BgTime.js.map