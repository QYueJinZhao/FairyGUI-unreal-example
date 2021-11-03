"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const fgui = require("ue");
class UI_RewardPopup {
    m_Panel;
    m_closeButton;
    m_Coin;
    m_InCome;
    m_LayoutGroup;
    m_Desc;
    m_TextTitle;
    m_BtnGot;
    static URL = "ui://tgre8ndbpip11h";
    static Package = "Turntable";
    static Component = "RewardPopup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_RewardPopup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_RewardPopup();
        if (component == null) {
            component = UI_RewardPopup.CreateComponent(WorldContextObject);
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
        this.m_BtnGot = component.GetChild("BtnGot");
    }
}
exports.default = UI_RewardPopup;
//# sourceMappingURL=UI_RewardPopup.js.map