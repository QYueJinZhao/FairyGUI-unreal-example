"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const fgui = require("ue");
class UI_Penalty {
    m_PenaltyPopupBg;
    m_closeButton;
    m_TextTitle;
    m_IconBottom;
    m_icon;
    m_text;
    m_coin;
    m_text2;
    m_money;
    m_AmountOfDamages;
    static URL = "ui://7zka63zlqqq9k";
    static Package = "TownEvent";
    static Component = "Penalty";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Penalty.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Penalty();
        if (component == null) {
            component = UI_Penalty.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_PenaltyPopupBg = component.GetChild("PenaltyPopupBg");
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_TextTitle = component.GetChild("TextTitle");
        this.m_IconBottom = component.GetChild("IconBottom");
        this.m_icon = component.GetChild("icon");
        this.m_text = component.GetChild("text");
        this.m_coin = component.GetChild("coin");
        this.m_text2 = component.GetChild("text2");
        this.m_money = component.GetChild("money");
        this.m_AmountOfDamages = component.GetChild("AmountOfDamages");
    }
}
exports.default = UI_Penalty;
//# sourceMappingURL=UI_Penalty.js.map