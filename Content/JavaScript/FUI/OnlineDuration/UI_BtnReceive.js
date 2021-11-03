"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnReceive {
    m_button;
    m_receive;
    static URL = "ui://5eksxjp2hktbi";
    static Package = "OnlineDuration";
    static Component = "BtnReceive";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnReceive.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnReceive();
        if (component == null) {
            component = UI_BtnReceive.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_receive = component.GetChild("receive");
    }
}
exports.default = UI_BtnReceive;
//# sourceMappingURL=UI_BtnReceive.js.map