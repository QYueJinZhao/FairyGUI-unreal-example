"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnColorBomb {
    m_button;
    m_BtnBg;
    m_SameColor;
    m_ColorBomb;
    m_video;
    m_n4;
    static URL = "ui://tqsc8htvj17p1s";
    static Package = "SyntheticTakeout";
    static Component = "BtnColorBomb";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnColorBomb.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnColorBomb();
        if (component == null) {
            component = UI_BtnColorBomb.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BtnBg = component.GetChild("BtnBg");
        this.m_SameColor = component.GetChild("SameColor");
        this.m_ColorBomb = component.GetChild("ColorBomb");
        this.m_video = component.GetChild("video");
        this.m_n4 = component.GetChild("n4");
    }
}
exports.default = UI_BtnColorBomb;
//# sourceMappingURL=UI_BtnColorBomb.js.map