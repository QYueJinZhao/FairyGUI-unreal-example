"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Reward {
    m_c1;
    m_RewardBase1;
    m_RewardBase2;
    m_Purse;
    m_quantity;
    m_t0;
    static URL = "ui://5eksxjp2hktbp";
    static Package = "OnlineDuration";
    static Component = "Reward";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Reward.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Reward();
        if (component == null) {
            component = UI_Reward.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_RewardBase1 = component.GetChild("RewardBase1");
        this.m_RewardBase2 = component.GetChild("RewardBase2");
        this.m_Purse = component.GetChild("Purse");
        this.m_quantity = component.GetChild("quantity");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_Reward;
//# sourceMappingURL=UI_Reward.js.map