"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_warning {
    m_warning1;
    m_WarningLine;
    m_warning2;
    m_t0;
    static URL = "ui://tqsc8htvpip1o";
    static Package = "SyntheticTakeout";
    static Component = "warning";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_warning.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_warning();
        if (component == null) {
            component = UI_warning.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_warning1 = component.GetChild("warning1");
        this.m_WarningLine = component.GetChild("WarningLine");
        this.m_warning2 = component.GetChild("warning2");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_warning;
//# sourceMappingURL=UI_warning.js.map