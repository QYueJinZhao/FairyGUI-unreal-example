"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnIncreaseDuration {
    m_button;
    m_IncreaseDuration;
    static URL = "ui://5eksxjp2hktbd";
    static Package = "OnlineDuration";
    static Component = "BtnIncreaseDuration";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnIncreaseDuration.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnIncreaseDuration();
        if (component == null) {
            component = UI_BtnIncreaseDuration.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_IncreaseDuration = component.GetChild("IncreaseDuration");
    }
}
exports.default = UI_BtnIncreaseDuration;
//# sourceMappingURL=UI_BtnIncreaseDuration.js.map