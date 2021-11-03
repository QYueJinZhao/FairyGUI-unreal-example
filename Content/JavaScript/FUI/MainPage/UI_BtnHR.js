"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnHR {
    m_button;
    m_BG;
    m_Coin;
    m_text;
    static URL = "ui://sn18zihkmos411";
    static Package = "MainPage";
    static Component = "BtnHR";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnHR.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnHR();
        if (component == null) {
            component = UI_BtnHR.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BG = component.GetChild("BG");
        this.m_Coin = component.GetChild("Coin");
        this.m_text = component.GetChild("text");
    }
}
exports.default = UI_BtnHR;
//# sourceMappingURL=UI_BtnHR.js.map