"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Coin1_1 = require("./UI_Coin1");
const UI_Coin2_1 = require("./UI_Coin2");
const UI_Coin3_1 = require("./UI_Coin3");
const UI_Coin4_1 = require("./UI_Coin4");
const UI_Coin5_1 = require("./UI_Coin5");
const UI_Coin6_1 = require("./UI_Coin6");
const fgui = require("ue");
class UI_Turntable {
    m_BG;
    m_Coin1;
    m_Coin2;
    m_Coin3;
    m_Coin4;
    m_Coin5;
    m_Coin6;
    static URL = "ui://tgre8ndbpip11g";
    static Package = "Turntable";
    static Component = "Turntable";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Turntable.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Turntable();
        if (component == null) {
            component = UI_Turntable.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BG = component.GetChild("BG");
        this.m_Coin1 = UI_Coin1_1.default.createInstance(component.GetChild("Coin1"), WorldContextObject);
        this.m_Coin2 = UI_Coin2_1.default.createInstance(component.GetChild("Coin2"), WorldContextObject);
        this.m_Coin3 = UI_Coin3_1.default.createInstance(component.GetChild("Coin3"), WorldContextObject);
        this.m_Coin4 = UI_Coin4_1.default.createInstance(component.GetChild("Coin4"), WorldContextObject);
        this.m_Coin5 = UI_Coin5_1.default.createInstance(component.GetChild("Coin5"), WorldContextObject);
        this.m_Coin6 = UI_Coin6_1.default.createInstance(component.GetChild("Coin6"), WorldContextObject);
    }
}
exports.default = UI_Turntable;
//# sourceMappingURL=UI_Turntable.js.map