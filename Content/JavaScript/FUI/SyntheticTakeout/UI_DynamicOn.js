"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_T1_1 = require("./UI_T1");
const UI_T2_1 = require("./UI_T2");
const UI_T3_1 = require("./UI_T3");
const UI_T4_1 = require("./UI_T4");
const UI_T5_1 = require("./UI_T5");
const UI_T6_1 = require("./UI_T6");
const UI_T7_1 = require("./UI_T7");
const UI_T8_1 = require("./UI_T8");
const fgui = require("ue");
class UI_DynamicOn {
    m_T1;
    m_T2;
    m_T3;
    m_T4;
    m_T5;
    m_T6;
    m_T7;
    m_T8;
    static URL = "ui://tqsc8htvwfi049";
    static Package = "SyntheticTakeout";
    static Component = "DynamicOn";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_DynamicOn.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_DynamicOn();
        if (component == null) {
            component = UI_DynamicOn.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_T1 = UI_T1_1.default.createInstance(component.GetChild("T1"), WorldContextObject);
        this.m_T2 = UI_T2_1.default.createInstance(component.GetChild("T2"), WorldContextObject);
        this.m_T3 = UI_T3_1.default.createInstance(component.GetChild("T3"), WorldContextObject);
        this.m_T4 = UI_T4_1.default.createInstance(component.GetChild("T4"), WorldContextObject);
        this.m_T5 = UI_T5_1.default.createInstance(component.GetChild("T5"), WorldContextObject);
        this.m_T6 = UI_T6_1.default.createInstance(component.GetChild("T6"), WorldContextObject);
        this.m_T7 = UI_T7_1.default.createInstance(component.GetChild("T7"), WorldContextObject);
        this.m_T8 = UI_T8_1.default.createInstance(component.GetChild("T8"), WorldContextObject);
    }
}
exports.default = UI_DynamicOn;
//# sourceMappingURL=UI_DynamicOn.js.map