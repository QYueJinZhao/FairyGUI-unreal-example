"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnEntrance {
    m_button;
    m_EntranceBg;
    m_EntranceIcon;
    static URL = "ui://tqsc8htvj17p1i";
    static Package = "SyntheticTakeout";
    static Component = "BtnEntrance";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnEntrance.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnEntrance();
        if (component == null) {
            component = UI_BtnEntrance.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_EntranceBg = component.GetChild("EntranceBg");
        this.m_EntranceIcon = component.GetChild("EntranceIcon");
    }
}
exports.default = UI_BtnEntrance;
//# sourceMappingURL=UI_BtnEntrance.js.map