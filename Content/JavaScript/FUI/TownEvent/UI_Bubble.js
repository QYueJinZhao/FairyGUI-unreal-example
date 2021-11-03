"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Bubble {
    m_Bubble;
    m_icon;
    m_Prohibit;
    static URL = "ui://7zka63zlqqq9i";
    static Package = "TownEvent";
    static Component = "Bubble";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Bubble.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Bubble();
        if (component == null) {
            component = UI_Bubble.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_Bubble = component.GetChild("Bubble");
        this.m_icon = component.GetChild("icon");
        this.m_Prohibit = component.GetChild("Prohibit");
    }
}
exports.default = UI_Bubble;
//# sourceMappingURL=UI_Bubble.js.map