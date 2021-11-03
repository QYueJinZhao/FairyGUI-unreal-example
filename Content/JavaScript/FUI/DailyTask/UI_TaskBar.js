"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Bar1_1 = require("./UI_Bar1");
const UI_Button_1 = require("./UI_Button");
const fgui = require("ue");
class UI_TaskBar {
    m_c1;
    m_TaskBar;
    m_icon3;
    m_AmountBox;
    m_title;
    m_Bar1;
    m_text;
    m_MoneyText;
    m_BtnReceive;
    m_text2;
    m_text3;
    static URL = "ui://rr0e2yhy9ab9h";
    static Package = "DailyTask";
    static Component = "TaskBar";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_TaskBar.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_TaskBar();
        if (component == null) {
            component = UI_TaskBar.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_TaskBar = component.GetChild("TaskBar");
        this.m_icon3 = component.GetChild("icon3");
        this.m_AmountBox = component.GetChild("AmountBox");
        this.m_title = component.GetChild("title");
        this.m_Bar1 = UI_Bar1_1.default.createInstance(component.GetChild("Bar1"), WorldContextObject);
        this.m_text = component.GetChild("text");
        this.m_MoneyText = component.GetChild("MoneyText");
        this.m_BtnReceive = UI_Button_1.default.createInstance(component.GetChild("BtnReceive"), WorldContextObject);
        this.m_text2 = component.GetChild("text2");
        this.m_text3 = component.GetChild("text3");
    }
}
exports.default = UI_TaskBar;
//# sourceMappingURL=UI_TaskBar.js.map