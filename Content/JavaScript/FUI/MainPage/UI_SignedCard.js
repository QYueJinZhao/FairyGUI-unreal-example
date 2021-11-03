"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnBuildAndUpgrade_1 = require("./UI_BtnBuildAndUpgrade");
const fgui = require("ue");
class UI_SignedCard {
    m_BG;
    m_Icon;
    m_BtnSigned;
    m_Level;
    m_Title;
    m_Desc;
    static URL = "ui://sn18zihkpip140";
    static Package = "MainPage";
    static Component = "SignedCard";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_SignedCard.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_SignedCard();
        if (component == null) {
            component = UI_SignedCard.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BG = component.GetChild("BG");
        this.m_Icon = component.GetChild("Icon");
        this.m_BtnSigned = UI_BtnBuildAndUpgrade_1.default.createInstance(component.GetChild("BtnSigned"), WorldContextObject);
        this.m_Level = component.GetChild("Level");
        this.m_Title = component.GetChild("Title");
        this.m_Desc = component.GetChild("Desc");
    }
}
exports.default = UI_SignedCard;
//# sourceMappingURL=UI_SignedCard.js.map