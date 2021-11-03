"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const UI_Button_1 = require("./UI_Button");
const UI_Reward1_1 = require("./UI_Reward1");
const UI_Reward2_1 = require("./UI_Reward2");
const UI_Reward3_1 = require("./UI_Reward3");
const UI_Reward4_1 = require("./UI_Reward4");
const UI_Reward5_1 = require("./UI_Reward5");
const UI_Reward6_1 = require("./UI_Reward6");
const UI_Reward7_1 = require("./UI_Reward7");
const fgui = require("ue");
class UI_Popup {
    m_BG;
    m_closeButton;
    m_TextTitle;
    m_Button;
    m_Reward1;
    m_Reward2;
    m_Reward3;
    m_Reward4;
    m_Reward5;
    m_Reward6;
    m_Reward7;
    m_RewardGroup;
    static URL = "ui://h9dczuj89xrpk";
    static Package = "SignIn";
    static Component = "Popup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Popup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Popup();
        if (component == null) {
            component = UI_Popup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BG = component.GetChild("BG");
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_TextTitle = component.GetChild("TextTitle");
        this.m_Button = UI_Button_1.default.createInstance(component.GetChild("Button"), WorldContextObject);
        this.m_Reward1 = UI_Reward1_1.default.createInstance(component.GetChild("Reward1"), WorldContextObject);
        this.m_Reward2 = UI_Reward2_1.default.createInstance(component.GetChild("Reward2"), WorldContextObject);
        this.m_Reward3 = UI_Reward3_1.default.createInstance(component.GetChild("Reward3"), WorldContextObject);
        this.m_Reward4 = UI_Reward4_1.default.createInstance(component.GetChild("Reward4"), WorldContextObject);
        this.m_Reward5 = UI_Reward5_1.default.createInstance(component.GetChild("Reward5"), WorldContextObject);
        this.m_Reward6 = UI_Reward6_1.default.createInstance(component.GetChild("Reward6"), WorldContextObject);
        this.m_Reward7 = UI_Reward7_1.default.createInstance(component.GetChild("Reward7"), WorldContextObject);
        this.m_RewardGroup = component.GetChild("RewardGroup");
    }
}
exports.default = UI_Popup;
//# sourceMappingURL=UI_Popup.js.map