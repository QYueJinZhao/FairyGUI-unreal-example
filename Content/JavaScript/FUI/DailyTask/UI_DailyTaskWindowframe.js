"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Bar2_1 = require("./UI_Bar2");
const UI_BtnMoney_1 = require("./UI_BtnMoney");
const fgui = require("ue");
class UI_DailyTaskWindowframe {
    m_Background;
    m_TitmeImage;
    m_title;
    m_closeButton;
    m_img;
    m_Content;
    m_Bar2;
    m_BtnMoney;
    m_Line1;
    m_Line2;
    m_text;
    m_group;
    m_t0;
    static URL = "ui://rr0e2yhy9ab9f";
    static Package = "DailyTask";
    static Component = "DailyTaskWindowframe";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_DailyTaskWindowframe.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_DailyTaskWindowframe();
        if (component == null) {
            component = UI_DailyTaskWindowframe.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_Background = component.GetChild("Background");
        this.m_TitmeImage = component.GetChild("TitmeImage");
        this.m_title = component.GetChild("title");
        this.m_closeButton = component.GetChild("closeButton");
        this.m_img = component.GetChild("img");
        this.m_Content = component.GetChild("Content");
        this.m_Bar2 = UI_Bar2_1.default.createInstance(component.GetChild("Bar2"), WorldContextObject);
        this.m_BtnMoney = UI_BtnMoney_1.default.createInstance(component.GetChild("BtnMoney"), WorldContextObject);
        this.m_Line1 = component.GetChild("Line1");
        this.m_Line2 = component.GetChild("Line2");
        this.m_text = component.GetChild("text");
        this.m_group = component.GetChild("group");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_DailyTaskWindowframe;
//# sourceMappingURL=UI_DailyTaskWindowframe.js.map