"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const UI_BtnWindproofTreatment_1 = require("./UI_BtnWindproofTreatment");
const fgui = require("ue");
class UI_Advertisement {
    m_PopupBg;
    m_closeButton;
    m_TextTitle;
    m_IconBottom;
    m_icon;
    m_text;
    m_Button;
    static URL = "ui://7zka63zlqqq9p";
    static Package = "TownEvent";
    static Component = "Advertisement";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Advertisement.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Advertisement();
        if (component == null) {
            component = UI_Advertisement.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_PopupBg = component.GetChild("PopupBg");
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_TextTitle = component.GetChild("TextTitle");
        this.m_IconBottom = component.GetChild("IconBottom");
        this.m_icon = component.GetChild("icon");
        this.m_text = component.GetChild("text");
        this.m_Button = UI_BtnWindproofTreatment_1.default.createInstance(component.GetChild("Button"), WorldContextObject);
    }
}
exports.default = UI_Advertisement;
//# sourceMappingURL=UI_Advertisement.js.map