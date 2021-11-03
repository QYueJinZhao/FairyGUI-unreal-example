"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnFire_1 = require("./UI_BtnFire");
const UI_BtnUpgrade_1 = require("./UI_BtnUpgrade");
const UI_Speed_1 = require("./UI_Speed");
const fgui = require("ue");
class UI_DelvieryManCardPanel {
    m_cFire;
    m_cUpgrade;
    m_BackGround;
    m_Profile;
    m_BtnFire;
    m_BtnUpgrade;
    m_Level;
    m_Bar;
    m_Describe;
    m_Name;
    m_Quality;
    m_Title;
    m_working;
    m_RestDesc;
    m_isRest;
    m_Energy;
    m_EnergyValue;
    m_Carrier;
    m_CarrierName;
    static URL = "ui://sn18zihkhb0y2d";
    static Package = "MainPage";
    static Component = "DelvieryManCardPanel";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_DelvieryManCardPanel.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_DelvieryManCardPanel();
        if (component == null) {
            component = UI_DelvieryManCardPanel.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_cFire = component.GetController("cFire");
        this.m_cUpgrade = component.GetController("cUpgrade");
        this.m_BackGround = component.GetChild("BackGround");
        this.m_Profile = component.GetChild("Profile");
        this.m_BtnFire = UI_BtnFire_1.default.createInstance(component.GetChild("BtnFire"), WorldContextObject);
        this.m_BtnUpgrade = UI_BtnUpgrade_1.default.createInstance(component.GetChild("BtnUpgrade"), WorldContextObject);
        this.m_Level = component.GetChild("Level");
        this.m_Bar = UI_Speed_1.default.createInstance(component.GetChild("Bar"), WorldContextObject);
        this.m_Describe = component.GetChild("Describe");
        this.m_Name = component.GetChild("Name");
        this.m_Quality = component.GetChild("Quality");
        this.m_Title = component.GetChild("Title");
        this.m_working = component.GetChild("working");
        this.m_RestDesc = component.GetChild("RestDesc");
        this.m_isRest = component.GetChild("isRest");
        this.m_Energy = component.GetChild("Energy");
        this.m_EnergyValue = component.GetChild("EnergyValue");
        this.m_Carrier = component.GetChild("Carrier");
        this.m_CarrierName = component.GetChild("CarrierName");
    }
}
exports.default = UI_DelvieryManCardPanel;
//# sourceMappingURL=UI_DelvieryManCardPanel.js.map