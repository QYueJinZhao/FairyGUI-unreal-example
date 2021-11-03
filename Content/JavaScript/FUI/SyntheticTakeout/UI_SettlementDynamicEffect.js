"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Take_outFood4_1 = require("./UI_Take_outFood4");
const UI_Take_outFood3_1 = require("./UI_Take_outFood3");
const UI_Take_outFood2_1 = require("./UI_Take_outFood2");
const UI_Take_outFood1_1 = require("./UI_Take_outFood1");
const fgui = require("ue");
class UI_SettlementDynamicEffect {
    m_Take_outFood4;
    m_Take_outFood3;
    m_Take_outFood2;
    m_Take_outFood1;
    static URL = "ui://tqsc8htvwfi04k";
    static Package = "SyntheticTakeout";
    static Component = "SettlementDynamicEffect";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_SettlementDynamicEffect.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_SettlementDynamicEffect();
        if (component == null) {
            component = UI_SettlementDynamicEffect.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_Take_outFood4 = UI_Take_outFood4_1.default.createInstance(component.GetChild("Take-outFood4"), WorldContextObject);
        this.m_Take_outFood3 = UI_Take_outFood3_1.default.createInstance(component.GetChild("Take-outFood3"), WorldContextObject);
        this.m_Take_outFood2 = UI_Take_outFood2_1.default.createInstance(component.GetChild("Take-outFood2"), WorldContextObject);
        this.m_Take_outFood1 = UI_Take_outFood1_1.default.createInstance(component.GetChild("Take-outFood1"), WorldContextObject);
    }
}
exports.default = UI_SettlementDynamicEffect;
//# sourceMappingURL=UI_SettlementDynamicEffect.js.map