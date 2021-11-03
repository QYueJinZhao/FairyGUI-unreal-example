"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_radiation_1 = require("./UI_radiation");
const UI_RewardPopup_1 = require("./UI_RewardPopup");
const fgui = require("ue");
class UI_Get_AReward {
    m_c1;
    m_InteractablePanel;
    m_radiation;
    m_RewardPopup;
    m_t0;
    m_t1;
    m_t2;
    static URL = "ui://tgre8ndbpip11l";
    static Package = "Turntable";
    static Component = "Get AReward";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Get_AReward.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Get_AReward();
        if (component == null) {
            component = UI_Get_AReward.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_radiation = UI_radiation_1.default.createInstance(component.GetChild("radiation"), WorldContextObject);
        this.m_RewardPopup = UI_RewardPopup_1.default.createInstance(component.GetChild("RewardPopup"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
        this.m_t2 = component.GetTransition("t2");
    }
}
exports.default = UI_Get_AReward;
//# sourceMappingURL=UI_Get_AReward.js.map