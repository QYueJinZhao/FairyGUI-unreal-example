"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Bubble_1 = require("./UI_Bubble");
const fgui = require("ue");
class UI_BtnBubble {
    m_button;
    m_n3;
    m_t0;
    static URL = "ui://7zka63zlqqq9h";
    static Package = "TownEvent";
    static Component = "BtnBubble";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnBubble.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnBubble();
        if (component == null) {
            component = UI_BtnBubble.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_n3 = UI_Bubble_1.default.createInstance(component.GetChild("n3"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_BtnBubble;
//# sourceMappingURL=UI_BtnBubble.js.map