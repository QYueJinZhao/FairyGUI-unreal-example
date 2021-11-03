"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnMusic {
    m_button;
    m_c1;
    m_n0;
    static URL = "ui://rnl6o1bldaci9";
    static Package = "SetUp";
    static Component = "BtnMusic";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnMusic.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnMusic();
        if (component == null) {
            component = UI_BtnMusic.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_c1 = component.GetController("c1");
        this.m_n0 = component.GetChild("n0");
    }
}
exports.default = UI_BtnMusic;
//# sourceMappingURL=UI_BtnMusic.js.map