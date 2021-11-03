"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_CoinsEffect {
    m_c1;
    m_coins3;
    m_coins2;
    m_coins;
    m_coins_2;
    static URL = "ui://p6ocxgyaky5w1w";
    static Package = "Top";
    static Component = "CoinsEffect";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_CoinsEffect.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_CoinsEffect();
        if (component == null) {
            component = UI_CoinsEffect.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_coins3 = component.GetChild("coins3");
        this.m_coins2 = component.GetChild("coins2");
        this.m_coins = component.GetChild("coins");
        this.m_coins_2 = component.GetTransition("coins");
    }
}
exports.default = UI_CoinsEffect;
//# sourceMappingURL=UI_CoinsEffect.js.map