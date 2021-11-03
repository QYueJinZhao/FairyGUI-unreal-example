"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Main {
    m_n2;
    m_n3;
    static URL = "ui://k4ns6b0567za0";
    static Package = "TestPos";
    static Component = "Main";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Main.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Main();
        if (component == null) {
            component = UI_Main.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n2 = component.GetChild("n2");
        this.m_n3 = component.GetChild("n3");
    }
}
exports.default = UI_Main;
//# sourceMappingURL=UI_Main.js.map