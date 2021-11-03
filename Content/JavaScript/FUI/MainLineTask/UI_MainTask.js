"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnTask_1 = require("./UI_BtnTask");
const fgui = require("ue");
class UI_MainTask {
    m_BtnTask;
    static URL = "ui://eb5tqed8tvuvc";
    static Package = "MainLineTask";
    static Component = "MainTask";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_MainTask.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_MainTask();
        if (component == null) {
            component = UI_MainTask.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BtnTask = UI_BtnTask_1.default.createInstance(component.GetChild("BtnTask"), WorldContextObject);
    }
}
exports.default = UI_MainTask;
//# sourceMappingURL=UI_MainTask.js.map