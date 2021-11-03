"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Overview {
    m_c1;
    m_img1_1;
    m_img2_1;
    m_img3_1;
    m_TextScale1;
    m_TextInvestmentAdvice1;
    m_TextInvestmentAmount1;
    m_Coin1;
    m_TextMoney1;
    m_Money1;
    m_TextResult1;
    static URL = "ui://7d8qawjuky5wy";
    static Package = "Town";
    static Component = "Overview";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Overview.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Overview();
        if (component == null) {
            component = UI_Overview.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_img1_1 = component.GetChild("img1-1");
        this.m_img2_1 = component.GetChild("img2-1");
        this.m_img3_1 = component.GetChild("img3-1");
        this.m_TextScale1 = component.GetChild("TextScale1");
        this.m_TextInvestmentAdvice1 = component.GetChild("TextInvestmentAdvice1");
        this.m_TextInvestmentAmount1 = component.GetChild("TextInvestmentAmount1");
        this.m_Coin1 = component.GetChild("Coin1");
        this.m_TextMoney1 = component.GetChild("TextMoney1");
        this.m_Money1 = component.GetChild("Money1");
        this.m_TextResult1 = component.GetChild("TextResult1");
    }
}
exports.default = UI_Overview;
//# sourceMappingURL=UI_Overview.js.map