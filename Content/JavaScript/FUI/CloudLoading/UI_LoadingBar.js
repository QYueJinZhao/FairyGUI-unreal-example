"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_ElectricVehicle_1 = require("./UI_ElectricVehicle");
const fgui = require("ue");
class UI_LoadingBar {
    m_BG;
    m_bar;
    m_Electric_vehicle;
    m_title;
    static URL = "ui://4pjqltd9952639";
    static Package = "CloudLoading";
    static Component = "LoadingBar";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_LoadingBar.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_LoadingBar();
        if (component == null) {
            component = UI_LoadingBar.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BG = component.GetChild("BG");
        this.m_bar = component.GetChild("bar");
        this.m_Electric_vehicle = UI_ElectricVehicle_1.default.createInstance(component.GetChild("Electric vehicle"), WorldContextObject);
        this.m_title = component.GetChild("title");
    }
}
exports.default = UI_LoadingBar;
//# sourceMappingURL=UI_LoadingBar.js.map