"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Details_1 = require("./UI_Details");
const fgui = require("ue");
class UI_TitleCompanyGold {
    m_BackGround;
    m_coins3;
    m_coins2;
    m_coins1;
    m_Coin;
    m_Details;
    m_TextGoldValue;
    m_TextAddGoldValue;
    m_t1;
    static URL = "ui://p6ocxgya9526r";
    static Package = "Top";
    static Component = "TitleCompanyGold";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_TitleCompanyGold.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_TitleCompanyGold();
        if (component == null) {
            component = UI_TitleCompanyGold.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BackGround = component.GetChild("BackGround");
        this.m_coins3 = component.GetChild("coins3");
        this.m_coins2 = component.GetChild("coins2");
        this.m_coins1 = component.GetChild("coins1");
        this.m_Coin = component.GetChild("Coin");
        this.m_Details = UI_Details_1.default.createInstance(component.GetChild("Details"), WorldContextObject);
        this.m_TextGoldValue = component.GetChild("TextGoldValue");
        this.m_TextAddGoldValue = component.GetChild("TextAddGoldValue");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_TitleCompanyGold;
//# sourceMappingURL=UI_TitleCompanyGold.js.map