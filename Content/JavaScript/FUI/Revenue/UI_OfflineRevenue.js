"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_radiation_1 = require("./UI_radiation");
const UI_BtnDouble_1 = require("./UI_BtnDouble");
const UI_BtnReceive_1 = require("./UI_BtnReceive");
const fgui = require("ue");
class UI_OfflineRevenue {
    m_InteractablePanel;
    m_radiation;
    m_GoldCoinPile;
    m_belt;
    m_title;
    m_TimeText;
    m_ProfitText;
    m_BtnDouble;
    m_BtnReceive;
    m_receive;
    static URL = "ui://tfx03j5ppip14";
    static Package = "Revenue";
    static Component = "OfflineRevenue";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_OfflineRevenue.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_OfflineRevenue();
        if (component == null) {
            component = UI_OfflineRevenue.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_radiation = UI_radiation_1.default.createInstance(component.GetChild("radiation"), WorldContextObject);
        this.m_GoldCoinPile = component.GetChild("GoldCoinPile");
        this.m_belt = component.GetChild("belt");
        this.m_title = component.GetChild("title");
        this.m_TimeText = component.GetChild("TimeText");
        this.m_ProfitText = component.GetChild("ProfitText");
        this.m_BtnDouble = UI_BtnDouble_1.default.createInstance(component.GetChild("BtnDouble"), WorldContextObject);
        this.m_BtnReceive = UI_BtnReceive_1.default.createInstance(component.GetChild("BtnReceive"), WorldContextObject);
        this.m_receive = component.GetChild("receive");
    }
}
exports.default = UI_OfflineRevenue;
//# sourceMappingURL=UI_OfflineRevenue.js.map