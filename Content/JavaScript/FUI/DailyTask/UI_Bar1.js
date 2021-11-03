"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Bar1 {
    m_n0;
    m_bar;
    m_title;
    static URL = "ui://rr0e2yhy9ab9j";
    static Package = "DailyTask";
    static Component = "Bar1";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Bar1.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Bar1();
        if (component == null) {
            component = UI_Bar1.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n0 = component.GetChild("n0");
        this.m_bar = component.GetChild("bar");
        this.m_title = component.GetChild("title");
    }
}
exports.default = UI_Bar1;
//# sourceMappingURL=UI_Bar1.js.map