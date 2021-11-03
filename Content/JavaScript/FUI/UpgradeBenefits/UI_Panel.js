"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const UI_BtnAds_1 = require("./UI_BtnAds");
const UI_BtnGot_1 = require("./UI_BtnGot");
const fgui = require("ue");
class UI_Panel {
    m_Panel;
    m_closeButton;
    m_Coin;
    m_InCome;
    m_LayoutGroup;
    m_Desc;
    m_TextTitle;
    m_BtnAds;
    m_BtnGot;
    m_BtnGroup;
    static URL = "ui://t8uh51qkpip1d";
    static Package = "UpgradeBenefits";
    static Component = "Panel";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Panel.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Panel();
        if (component == null) {
            component = UI_Panel.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_Panel = component.GetChild("Panel");
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_Coin = component.GetChild("Coin");
        this.m_InCome = component.GetChild("InCome");
        this.m_LayoutGroup = component.GetChild("LayoutGroup");
        this.m_Desc = component.GetChild("Desc");
        this.m_TextTitle = component.GetChild("TextTitle");
        this.m_BtnAds = UI_BtnAds_1.default.createInstance(component.GetChild("BtnAds"), WorldContextObject);
        this.m_BtnGot = UI_BtnGot_1.default.createInstance(component.GetChild("BtnGot"), WorldContextObject);
        this.m_BtnGroup = component.GetChild("BtnGroup");
    }
}
exports.default = UI_Panel;
//# sourceMappingURL=UI_Panel.js.map