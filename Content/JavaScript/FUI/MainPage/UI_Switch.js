"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnCompany_1 = require("./UI_BtnCompany");
const UI_BtnTown_1 = require("./UI_BtnTown");
const fgui = require("ue");
class UI_Switch {
    m_c1;
    m_BtnCompany;
    m_BtnTown;
    m_t0;
    m_t1;
    static URL = "ui://sn18zihkq13148";
    static Package = "MainPage";
    static Component = "Switch";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Switch.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Switch();
        if (component == null) {
            component = UI_Switch.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_BtnCompany = UI_BtnCompany_1.default.createInstance(component.GetChild("BtnCompany"), WorldContextObject);
        this.m_BtnTown = UI_BtnTown_1.default.createInstance(component.GetChild("BtnTown"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_Switch;
//# sourceMappingURL=UI_Switch.js.map