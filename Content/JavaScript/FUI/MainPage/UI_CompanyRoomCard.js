"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnBuildAndUpgrade_1 = require("./UI_BtnBuildAndUpgrade");
const fgui = require("ue");
class UI_CompanyRoomCard {
    m_BG;
    m_Image;
    m_upgrade;
    m_Btn;
    m_Level;
    m_Title;
    m_Desc;
    static URL = "ui://sn18zihkhb0y20";
    static Package = "MainPage";
    static Component = "CompanyRoomCard";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_CompanyRoomCard.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_CompanyRoomCard();
        if (component == null) {
            component = UI_CompanyRoomCard.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BG = component.GetChild("BG");
        this.m_Image = component.GetChild("Image");
        this.m_upgrade = component.GetChild("upgrade");
        this.m_Btn = UI_BtnBuildAndUpgrade_1.default.createInstance(component.GetChild("Btn"), WorldContextObject);
        this.m_Level = component.GetChild("Level");
        this.m_Title = component.GetChild("Title");
        this.m_Desc = component.GetChild("Desc");
    }
}
exports.default = UI_CompanyRoomCard;
//# sourceMappingURL=UI_CompanyRoomCard.js.map