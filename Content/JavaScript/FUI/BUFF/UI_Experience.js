"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Experience {
    m_button;
    m_Bottom;
    m_Experience;
    m_x2;
    m_t0;
    static URL = "ui://tm2lcvzypip1h";
    static Package = "BUFF";
    static Component = "Experience";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Experience.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Experience();
        if (component == null) {
            component = UI_Experience.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Bottom = component.GetChild("Bottom");
        this.m_Experience = component.GetChild("Experience");
        this.m_x2 = component.GetChild("x2");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_Experience;
//# sourceMappingURL=UI_Experience.js.map