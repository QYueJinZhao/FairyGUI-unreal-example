"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_ElectricVehicle {
    m_TailGas;
    m_TailGas2;
    m_wheel2;
    m_wheel1;
    m_Frame;
    m_body;
    m_t0;
    static URL = "ui://4pjqltd9j17p4";
    static Package = "CloudLoading";
    static Component = "ElectricVehicle";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_ElectricVehicle.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_ElectricVehicle();
        if (component == null) {
            component = UI_ElectricVehicle.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_TailGas = component.GetChild("TailGas");
        this.m_TailGas2 = component.GetChild("TailGas2");
        this.m_wheel2 = component.GetChild("wheel2");
        this.m_wheel1 = component.GetChild("wheel1");
        this.m_Frame = component.GetChild("Frame");
        this.m_body = component.GetChild("body");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_ElectricVehicle;
//# sourceMappingURL=UI_ElectricVehicle.js.map