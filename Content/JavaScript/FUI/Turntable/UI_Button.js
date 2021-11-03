"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Button {
    m_button;
    m_n0;
    m_n1;
    m_n2;
    static URL = "ui://tgre8ndbpip113";
    static Package = "Turntable";
    static Component = "Button";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Button.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Button();
        if (component == null) {
            component = UI_Button.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_n0 = component.GetChild("n0");
        this.m_n1 = component.GetChild("n1");
        this.m_n2 = component.GetChild("n2");
    }
}
exports.default = UI_Button;
//# sourceMappingURL=UI_Button.js.map