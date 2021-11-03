"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_GoToTown {
    m_n0;
    m_n1;
    m_n2;
    m_n3;
    m_n4;
    m_n5;
    m_n6;
    m_n7;
    m_n8;
    m_t0;
    static URL = "ui://4pjqltd9rtxm40";
    static Package = "CloudLoading";
    static Component = "GoToTown";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_GoToTown.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_GoToTown();
        if (component == null) {
            component = UI_GoToTown.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n0 = component.GetChild("n0");
        this.m_n1 = component.GetChild("n1");
        this.m_n2 = component.GetChild("n2");
        this.m_n3 = component.GetChild("n3");
        this.m_n4 = component.GetChild("n4");
        this.m_n5 = component.GetChild("n5");
        this.m_n6 = component.GetChild("n6");
        this.m_n7 = component.GetChild("n7");
        this.m_n8 = component.GetChild("n8");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_GoToTown;
//# sourceMappingURL=UI_GoToTown.js.map