"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BuffGroup {
    m_group;
    static URL = "ui://tm2lcvzypip1e";
    static Package = "BUFF";
    static Component = "BuffGroup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BuffGroup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BuffGroup();
        if (component == null) {
            component = UI_BuffGroup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_group = component.GetChild("group");
    }
}
exports.default = UI_BuffGroup;
//# sourceMappingURL=UI_BuffGroup.js.map