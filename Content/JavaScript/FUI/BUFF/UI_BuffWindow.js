"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const UI_BtnCancel_1 = require("./UI_BtnCancel");
const UI_BtnReceive_1 = require("./UI_BtnReceive");
const fgui = require("ue");
class UI_BuffWindow {
    m_BackGround;
    m_TextTitle;
    m_closeButton;
    m_BtnCancel;
    m_BtnReceive;
    m_text;
    static URL = "ui://tm2lcvzyjdb71s";
    static Package = "BUFF";
    static Component = "BuffWindow";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BuffWindow.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BuffWindow();
        if (component == null) {
            component = UI_BuffWindow.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BackGround = component.GetChild("BackGround");
        this.m_TextTitle = component.GetChild("TextTitle");
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_BtnCancel = UI_BtnCancel_1.default.createInstance(component.GetChild("BtnCancel"), WorldContextObject);
        this.m_BtnReceive = UI_BtnReceive_1.default.createInstance(component.GetChild("BtnReceive"), WorldContextObject);
        this.m_text = component.GetChild("text");
    }
}
exports.default = UI_BuffWindow;
//# sourceMappingURL=UI_BuffWindow.js.map