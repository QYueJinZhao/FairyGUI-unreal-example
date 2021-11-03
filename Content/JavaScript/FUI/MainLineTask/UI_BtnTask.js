"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Streamer_1 = require("./UI_Streamer");
const UI_Aperture_1 = require("./UI_Aperture");
const fgui = require("ue");
class UI_BtnTask {
    m_button;
    m_c1;
    m_n2;
    m_Streamer;
    m_coin;
    m_text;
    m_SpeedOfProgress;
    m_reward;
    m_n4;
    m_complete;
    m_task;
    m_Aperture;
    m_t0;
    static URL = "ui://eb5tqed8tvuvb";
    static Package = "MainLineTask";
    static Component = "BtnTask";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnTask.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnTask();
        if (component == null) {
            component = UI_BtnTask.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_c1 = component.GetController("c1");
        this.m_n2 = component.GetChild("n2");
        this.m_Streamer = UI_Streamer_1.default.createInstance(component.GetChild("Streamer"), WorldContextObject);
        this.m_coin = component.GetChild("coin");
        this.m_text = component.GetChild("text");
        this.m_SpeedOfProgress = component.GetChild("SpeedOfProgress");
        this.m_reward = component.GetChild("reward");
        this.m_n4 = component.GetChild("n4");
        this.m_complete = component.GetChild("complete");
        this.m_task = component.GetChild("task");
        this.m_Aperture = UI_Aperture_1.default.createInstance(component.GetChild("Aperture"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_BtnTask;
//# sourceMappingURL=UI_BtnTask.js.map