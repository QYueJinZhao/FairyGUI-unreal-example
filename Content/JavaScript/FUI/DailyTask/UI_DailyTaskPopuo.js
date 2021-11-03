"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_DailyTaskWindowframe_1 = require("./UI_DailyTaskWindowframe");
const fgui = require("ue");
class UI_DailyTaskPopuo {
    m_c1;
    m_InteractablePanel;
    m_n0;
    m_t0;
    m_t1;
    static URL = "ui://rr0e2yhyj17po";
    static Package = "DailyTask";
    static Component = "DailyTaskPopuo";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_DailyTaskPopuo.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_DailyTaskPopuo();
        if (component == null) {
            component = UI_DailyTaskPopuo.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_n0 = UI_DailyTaskWindowframe_1.default.createInstance(component.GetChild("n0"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_DailyTaskPopuo;
//# sourceMappingURL=UI_DailyTaskPopuo.js.map