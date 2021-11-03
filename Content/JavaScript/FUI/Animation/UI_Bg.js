"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Bg {
    m_Bg;
    m_TakeoutBox;
    static URL = "ui://rqcz0xy9jl8x4t";
    static Package = "Animation";
    static Component = "Bg";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Bg.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Bg();
        if (component == null) {
            component = UI_Bg.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_Bg = component.GetChild("Bg");
        this.m_TakeoutBox = component.GetChild("TakeoutBox");
    }
}
exports.default = UI_Bg;
//# sourceMappingURL=UI_Bg.js.map