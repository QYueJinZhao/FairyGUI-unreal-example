"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnOnlineIcon {
    m_button;
    m_Bg;
    m_Purse;
    m_time;
    static URL = "ui://5eksxjp2hktbf";
    static Package = "OnlineDuration";
    static Component = "BtnOnlineIcon";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnOnlineIcon.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnOnlineIcon();
        if (component == null) {
            component = UI_BtnOnlineIcon.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Bg = component.GetChild("Bg");
        this.m_Purse = component.GetChild("Purse");
        this.m_time = component.GetChild("time");
    }
}
exports.default = UI_BtnOnlineIcon;
//# sourceMappingURL=UI_BtnOnlineIcon.js.map