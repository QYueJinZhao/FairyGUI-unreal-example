"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const UI_Bar_1 = require("./UI_Bar");
const UI_BtnIncreaseDuration_1 = require("./UI_BtnIncreaseDuration");
const UI_BtnReceive_1 = require("./UI_BtnReceive");
const fgui = require("ue");
class UI_OnlineDuration {
    m_c1;
    m_Bottom;
    m_x;
    m_TextTitle;
    m_Bar;
    m_BtnIncreaseDuration;
    m_BtnReceive;
    m_text;
    m_TimeText;
    static URL = "ui://5eksxjp2hktbt";
    static Package = "OnlineDuration";
    static Component = "OnlineDuration";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_OnlineDuration.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_OnlineDuration();
        if (component == null) {
            component = UI_OnlineDuration.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_Bottom = component.GetChild("Bottom");
        this.m_x = UI_x_1.default.createInstance(component.GetChild("x"), WorldContextObject);
        this.m_TextTitle = component.GetChild("TextTitle");
        this.m_Bar = UI_Bar_1.default.createInstance(component.GetChild("Bar"), WorldContextObject);
        this.m_BtnIncreaseDuration = UI_BtnIncreaseDuration_1.default.createInstance(component.GetChild("BtnIncreaseDuration"), WorldContextObject);
        this.m_BtnReceive = UI_BtnReceive_1.default.createInstance(component.GetChild("BtnReceive"), WorldContextObject);
        this.m_text = component.GetChild("text");
        this.m_TimeText = component.GetChild("TimeText");
    }
}
exports.default = UI_OnlineDuration;
//# sourceMappingURL=UI_OnlineDuration.js.map