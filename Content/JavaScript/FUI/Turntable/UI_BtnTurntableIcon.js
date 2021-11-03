"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnTurntableIcon {
    m_button;
    m_Bg;
    m_icon;
    static URL = "ui://tgre8ndbqqq91r";
    static Package = "Turntable";
    static Component = "BtnTurntableIcon";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnTurntableIcon.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnTurntableIcon();
        if (component == null) {
            component = UI_BtnTurntableIcon.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Bg = component.GetChild("Bg");
        this.m_icon = component.GetChild("icon");
    }
}
exports.default = UI_BtnTurntableIcon;
//# sourceMappingURL=UI_BtnTurntableIcon.js.map