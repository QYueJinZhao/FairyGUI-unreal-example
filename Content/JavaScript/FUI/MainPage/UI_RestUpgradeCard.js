"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnBuildAndUpgrade_1 = require("./UI_BtnBuildAndUpgrade");
const fgui = require("ue");
class UI_RestUpgradeCard {
    m_BG;
    m_TextRestName;
    m_Image_rest;
    m_upgrade_1;
    m_UpgradeRest;
    m_TextRestNum;
    m_title_1;
    m_Text__1;
    m_Image_merchant;
    m_Image_arrow;
    m_SigMerchant;
    m_TextMerchantNum;
    m_title_2;
    m_Text__2;
    static URL = "ui://sn18zihkqb9d2o";
    static Package = "MainPage";
    static Component = "RestUpgradeCard";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_RestUpgradeCard.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_RestUpgradeCard();
        if (component == null) {
            component = UI_RestUpgradeCard.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BG = component.GetChild("BG");
        this.m_TextRestName = component.GetChild("TextRestName");
        this.m_Image_rest = component.GetChild("Image_rest");
        this.m_upgrade_1 = component.GetChild("upgrade_1");
        this.m_UpgradeRest = UI_BtnBuildAndUpgrade_1.default.createInstance(component.GetChild("UpgradeRest"), WorldContextObject);
        this.m_TextRestNum = component.GetChild("TextRestNum");
        this.m_title_1 = component.GetChild("title_1");
        this.m_Text__1 = component.GetChild("Text _1");
        this.m_Image_merchant = component.GetChild("Image_merchant");
        this.m_Image_arrow = component.GetChild("Image_arrow");
        this.m_SigMerchant = UI_BtnBuildAndUpgrade_1.default.createInstance(component.GetChild("SigMerchant"), WorldContextObject);
        this.m_TextMerchantNum = component.GetChild("TextMerchantNum");
        this.m_title_2 = component.GetChild("title_2");
        this.m_Text__2 = component.GetChild("Text _2");
    }
}
exports.default = UI_RestUpgradeCard;
//# sourceMappingURL=UI_RestUpgradeCard.js.map