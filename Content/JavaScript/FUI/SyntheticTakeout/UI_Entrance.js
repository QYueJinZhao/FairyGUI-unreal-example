"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnEntrance_1 = require("./UI_BtnEntrance");
const fgui = require("ue");
class UI_Entrance {
    m_BtnEntrance;
    m_t0;
    static URL = "ui://tqsc8htvj17p1j";
    static Package = "SyntheticTakeout";
    static Component = "Entrance";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Entrance.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Entrance();
        if (component == null) {
            component = UI_Entrance.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BtnEntrance = UI_BtnEntrance_1.default.createInstance(component.GetChild("BtnEntrance"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_Entrance;
//# sourceMappingURL=UI_Entrance.js.map