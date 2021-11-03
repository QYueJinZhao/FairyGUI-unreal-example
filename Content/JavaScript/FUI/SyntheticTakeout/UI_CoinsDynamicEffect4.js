"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_CoinsDynamicEffect4 {
    m_coins;
    m_coins2;
    m_coins3;
    m_n22;
    m_t0;
    m_t1;
    static URL = "ui://tqsc8htv4q284s";
    static Package = "SyntheticTakeout";
    static Component = "CoinsDynamicEffect4";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_CoinsDynamicEffect4.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_CoinsDynamicEffect4();
        if (component == null) {
            component = UI_CoinsDynamicEffect4.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_coins = component.GetChild("coins");
        this.m_coins2 = component.GetChild("coins2");
        this.m_coins3 = component.GetChild("coins3");
        this.m_n22 = component.GetChild("n22");
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_CoinsDynamicEffect4;
//# sourceMappingURL=UI_CoinsDynamicEffect4.js.map