"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnRange {
    m_button;
    m_BtnBg;
    m_Range;
    m_OrdinaryBomb;
    m_video;
    m_n4;
    static URL = "ui://tqsc8htvj17p1q";
    static Package = "SyntheticTakeout";
    static Component = "BtnRange";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnRange.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnRange();
        if (component == null) {
            component = UI_BtnRange.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BtnBg = component.GetChild("BtnBg");
        this.m_Range = component.GetChild("Range");
        this.m_OrdinaryBomb = component.GetChild("OrdinaryBomb");
        this.m_video = component.GetChild("video");
        this.m_n4 = component.GetChild("n4");
    }
}
exports.default = UI_BtnRange;
//# sourceMappingURL=UI_BtnRange.js.map