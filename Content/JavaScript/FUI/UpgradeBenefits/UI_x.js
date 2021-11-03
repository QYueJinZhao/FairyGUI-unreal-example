"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_x {
    m_button;
    m_n0;
    static URL = "ui://t8uh51qkpip16";
    static Package = "UpgradeBenefits";
    static Component = "x";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_x.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_x();
        if (component == null) {
            component = UI_x.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_n0 = component.GetChild("n0");
    }
}
exports.default = UI_x;
//# sourceMappingURL=UI_x.js.map