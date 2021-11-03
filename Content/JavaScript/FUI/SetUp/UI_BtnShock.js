"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnShock {
    m_button;
    m_c1;
    m_n0;
    static URL = "ui://rnl6o1bldacia";
    static Package = "SetUp";
    static Component = "BtnShock";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnShock.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnShock();
        if (component == null) {
            component = UI_BtnShock.CreateComponent(WorldContextObject);
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
exports.default = UI_BtnShock;
//# sourceMappingURL=UI_BtnShock.js.map