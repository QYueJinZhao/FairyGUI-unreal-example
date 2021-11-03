"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_CoinsDynamicEffect1_1 = require("./UI_CoinsDynamicEffect1");
const UI_CoinsDynamicEffect2_1 = require("./UI_CoinsDynamicEffect2");
const UI_CoinsDynamicEffect3_1 = require("./UI_CoinsDynamicEffect3");
const UI_CoinsDynamicEffect4_1 = require("./UI_CoinsDynamicEffect4");
const UI_SettlementDynamicEffect_1 = require("./UI_SettlementDynamicEffect");
const UI_BtnReturn_1 = require("./UI_BtnReturn");
const fgui = require("ue");
class UI_settlement {
    m_InteractablePanel;
    m_CoinsDynamicEffect1;
    m_CoinsDynamicEffect2;
    m_CoinsDynamicEffect3;
    m_CoinsDynamicEffect4;
    m_SettlementDynamicEffect;
    m_InCome;
    m_Button;
    m_BtnReturn;
    m_t0;
    static URL = "ui://tqsc8htvpip1r";
    static Package = "SyntheticTakeout";
    static Component = "settlement";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_settlement.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_settlement();
        if (component == null) {
            component = UI_settlement.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_CoinsDynamicEffect1 = UI_CoinsDynamicEffect1_1.default.createInstance(component.GetChild("CoinsDynamicEffect1"), WorldContextObject);
        this.m_CoinsDynamicEffect2 = UI_CoinsDynamicEffect2_1.default.createInstance(component.GetChild("CoinsDynamicEffect2"), WorldContextObject);
        this.m_CoinsDynamicEffect3 = UI_CoinsDynamicEffect3_1.default.createInstance(component.GetChild("CoinsDynamicEffect3"), WorldContextObject);
        this.m_CoinsDynamicEffect4 = UI_CoinsDynamicEffect4_1.default.createInstance(component.GetChild("CoinsDynamicEffect4"), WorldContextObject);
        this.m_SettlementDynamicEffect = UI_SettlementDynamicEffect_1.default.createInstance(component.GetChild("SettlementDynamicEffect"), WorldContextObject);
        this.m_InCome = component.GetChild("InCome");
        this.m_Button = component.GetChild("Button");
        this.m_BtnReturn = UI_BtnReturn_1.default.createInstance(component.GetChild("BtnReturn"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_settlement;
//# sourceMappingURL=UI_settlement.js.map