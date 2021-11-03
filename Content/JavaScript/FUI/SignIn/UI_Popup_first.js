"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const UI_Button_1 = require("./UI_Button");
const UI_Reward1_1 = require("./UI_Reward1");
const UI_Reward2_first_1 = require("./UI_Reward2_first");
const UI_Reward3_1 = require("./UI_Reward3");
const UI_Reward4_first_1 = require("./UI_Reward4_first");
const UI_Reward5_1 = require("./UI_Reward5");
const UI_Reward6_1 = require("./UI_Reward6");
const UI_Reward7_first_1 = require("./UI_Reward7_first");
const fgui = require("ue");
class UI_Popup_first {
    m_BG;
    m_closeButton;
    m_TextTitle;
    m_Button;
    m_Reward1;
    m_Reward2_first;
    m_Reward3;
    m_Reward4_first;
    m_Reward5;
    m_Reward6;
    m_Reward7_first;
    m_RewardGroup;
    static URL = "ui://h9dczuj8daci4c";
    static Package = "SignIn";
    static Component = "Popup_first";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Popup_first.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Popup_first();
        if (component == null) {
            component = UI_Popup_first.CreateComponent(WorldContextObject);
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
        this.m_Reward2_first = UI_Reward2_first_1.default.createInstance(component.GetChild("Reward2_first"), WorldContextObject);
        this.m_Reward3 = UI_Reward3_1.default.createInstance(component.GetChild("Reward3"), WorldContextObject);
        this.m_Reward4_first = UI_Reward4_first_1.default.createInstance(component.GetChild("Reward4_first"), WorldContextObject);
        this.m_Reward5 = UI_Reward5_1.default.createInstance(component.GetChild("Reward5"), WorldContextObject);
        this.m_Reward6 = UI_Reward6_1.default.createInstance(component.GetChild("Reward6"), WorldContextObject);
        this.m_Reward7_first = UI_Reward7_first_1.default.createInstance(component.GetChild("Reward7_first"), WorldContextObject);
        this.m_RewardGroup = component.GetChild("RewardGroup");
    }
}
exports.default = UI_Popup_first;
//# sourceMappingURL=UI_Popup_first.js.map