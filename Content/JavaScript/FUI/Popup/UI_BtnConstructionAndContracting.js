"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnConstructionAndContracting {
    m_button;
    m_BtnUpgrade;
    m_Coin;
    m_SigMoney;
    m_Switcher;
    static URL = "ui://n16w4m5p9ti147";
    static Package = "Popup";
    static Component = "BtnConstructionAndContracting";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnConstructionAndContracting.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnConstructionAndContracting();
        if (component == null) {
            component = UI_BtnConstructionAndContracting.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BtnUpgrade = component.GetChild("BtnUpgrade");
        this.m_Coin = component.GetChild("Coin");
        this.m_SigMoney = component.GetChild("SigMoney");
        this.m_Switcher = component.GetChild("Switcher");
    }
}
exports.default = UI_BtnConstructionAndContracting;
//# sourceMappingURL=UI_BtnConstructionAndContracting.js.map