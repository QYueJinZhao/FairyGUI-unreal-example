"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Aperture {
    m_n0;
    m_t0;
    static URL = "ui://eb5tqed8tvuv8";
    static Package = "MainLineTask";
    static Component = "Aperture";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Aperture.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Aperture();
        if (component == null) {
            component = UI_Aperture.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n0 = component.GetChild("n0");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_Aperture;
//# sourceMappingURL=UI_Aperture.js.map