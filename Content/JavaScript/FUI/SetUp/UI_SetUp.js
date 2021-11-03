"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const UI_BtnMusic_1 = require("./UI_BtnMusic");
const UI_BtnShock_1 = require("./UI_BtnShock");
const UI_BtnSoundEffect_1 = require("./UI_BtnSoundEffect");
const UI_BtnAdditiveGroup_1 = require("./UI_BtnAdditiveGroup");
const fgui = require("ue");
class UI_SetUp {
    m_Bg;
    m_closeButton;
    m_TextTitle;
    m_BtnMusic;
    m_BtnShock;
    m_BtnSoundEffect;
    m_NameText1;
    m_NameText2;
    m_NameText3;
    m_BtnAdditiveGroup;
    m_text;
    m_MailboxText;
    static URL = "ui://rnl6o1bldaci6";
    static Package = "SetUp";
    static Component = "SetUp";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_SetUp.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_SetUp();
        if (component == null) {
            component = UI_SetUp.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_Bg = component.GetChild("Bg");
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_TextTitle = component.GetChild("TextTitle");
        this.m_BtnMusic = UI_BtnMusic_1.default.createInstance(component.GetChild("BtnMusic"), WorldContextObject);
        this.m_BtnShock = UI_BtnShock_1.default.createInstance(component.GetChild("BtnShock"), WorldContextObject);
        this.m_BtnSoundEffect = UI_BtnSoundEffect_1.default.createInstance(component.GetChild("BtnSoundEffect"), WorldContextObject);
        this.m_NameText1 = component.GetChild("NameText1");
        this.m_NameText2 = component.GetChild("NameText2");
        this.m_NameText3 = component.GetChild("NameText3");
        this.m_BtnAdditiveGroup = UI_BtnAdditiveGroup_1.default.createInstance(component.GetChild("BtnAdditiveGroup"), WorldContextObject);
        this.m_text = component.GetChild("text");
        this.m_MailboxText = component.GetChild("MailboxText");
    }
}
exports.default = UI_SetUp;
//# sourceMappingURL=UI_SetUp.js.map