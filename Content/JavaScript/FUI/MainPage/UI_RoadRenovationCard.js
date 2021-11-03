"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnBuildAndUpgrade_1 = require("./UI_BtnBuildAndUpgrade");
const fgui = require("ue");
class UI_RoadRenovationCard {
    m_CompanyRoomCard;
    m_Image;
    m_upgrade;
    m_BtnBuildAndUpgrade;
    m_Level;
    m_Title;
    m_Desc;
    static URL = "ui://sn18zihkhb0y24";
    static Package = "MainPage";
    static Component = "RoadRenovationCard";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_RoadRenovationCard.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_RoadRenovationCard();
        if (component == null) {
            component = UI_RoadRenovationCard.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_CompanyRoomCard = component.GetChild("CompanyRoomCard");
        this.m_Image = component.GetChild("Image");
        this.m_upgrade = component.GetChild("upgrade");
        this.m_BtnBuildAndUpgrade = UI_BtnBuildAndUpgrade_1.default.createInstance(component.GetChild("BtnBuildAndUpgrade"), WorldContextObject);
        this.m_Level = component.GetChild("Level");
        this.m_Title = component.GetChild("Title");
        this.m_Desc = component.GetChild("Desc");
    }
}
exports.default = UI_RoadRenovationCard;
//# sourceMappingURL=UI_RoadRenovationCard.js.map