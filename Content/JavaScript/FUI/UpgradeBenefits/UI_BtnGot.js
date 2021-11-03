"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnGot {
    m_button;
    m_BG;
    static URL = "ui://t8uh51qkpip19";
    static Package = "UpgradeBenefits";
    static Component = "BtnGot";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnGot.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnGot();
        if (component == null) {
            component = UI_BtnGot.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BG = component.GetChild("BG");
    }
}
exports.default = UI_BtnGot;
//# sourceMappingURL=UI_BtnGot.js.map