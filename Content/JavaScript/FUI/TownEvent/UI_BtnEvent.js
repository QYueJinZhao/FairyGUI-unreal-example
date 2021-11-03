"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnEvent {
    m_button;
    m_Bg;
    m_icon;
    m_time;
    m_t0;
    static URL = "ui://7zka63zlqqq9g";
    static Package = "TownEvent";
    static Component = "BtnEvent";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnEvent.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnEvent();
        if (component == null) {
            component = UI_BtnEvent.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Bg = component.GetChild("Bg");
        this.m_icon = component.GetChild("icon");
        this.m_time = component.GetChild("time");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_BtnEvent;
//# sourceMappingURL=UI_BtnEvent.js.map