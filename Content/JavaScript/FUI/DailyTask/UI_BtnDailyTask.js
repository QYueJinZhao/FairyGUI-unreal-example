"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnDailyTask {
    m_button;
    m_Bg;
    m_icon;
    static URL = "ui://rr0e2yhy9ab90";
    static Package = "DailyTask";
    static Component = "BtnDailyTask";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnDailyTask.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnDailyTask();
        if (component == null) {
            component = UI_BtnDailyTask.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Bg = component.GetChild("Bg");
        this.m_icon = component.GetChild("icon");
    }
}
exports.default = UI_BtnDailyTask;
//# sourceMappingURL=UI_BtnDailyTask.js.map