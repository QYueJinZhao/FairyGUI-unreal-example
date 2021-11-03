"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Reward_1 = require("./UI_Reward");
const UI_BgTime_1 = require("./UI_BgTime");
const UI_add_10min_1 = require("./UI_add_10min");
const fgui = require("ue");
class UI_Bar {
    m_1h;
    m_Reward;
    m_ProgressBarBottom1;
    m_bar;
    m_SplitLine;
    m_BgTime;
    m_addminutes;
    m_10min;
    m_30min;
    m_50min;
    static URL = "ui://5eksxjp2hktbu";
    static Package = "OnlineDuration";
    static Component = "Bar";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Bar.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Bar();
        if (component == null) {
            component = UI_Bar.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_1h = component.GetChild("1h");
        this.m_Reward = UI_Reward_1.default.createInstance(component.GetChild("Reward"), WorldContextObject);
        this.m_ProgressBarBottom1 = component.GetChild("ProgressBarBottom1");
        this.m_bar = component.GetChild("bar");
        this.m_SplitLine = component.GetChild("SplitLine");
        this.m_BgTime = UI_BgTime_1.default.createInstance(component.GetChild("BgTime"), WorldContextObject);
        this.m_addminutes = UI_add_10min_1.default.createInstance(component.GetChild("addminutes"), WorldContextObject);
        this.m_10min = component.GetChild("10min");
        this.m_30min = component.GetChild("30min");
        this.m_50min = component.GetChild("50min");
    }
}
exports.default = UI_Bar;
//# sourceMappingURL=UI_Bar.js.map