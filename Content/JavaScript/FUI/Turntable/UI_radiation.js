"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_radiation {
    m_n3;
    m_t0;
    static URL = "ui://tgre8ndbpip11m";
    static Package = "Turntable";
    static Component = "radiation";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_radiation.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_radiation();
        if (component == null) {
            component = UI_radiation.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n3 = component.GetChild("n3");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_radiation;
//# sourceMappingURL=UI_radiation.js.map