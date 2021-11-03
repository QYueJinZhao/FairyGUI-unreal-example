"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_EventList {
    m_n0;
    static URL = "ui://7zka63zlqqq90";
    static Package = "TownEvent";
    static Component = "EventList";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_EventList.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_EventList();
        if (component == null) {
            component = UI_EventList.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n0 = component.GetChild("n0");
    }
}
exports.default = UI_EventList;
//# sourceMappingURL=UI_EventList.js.map