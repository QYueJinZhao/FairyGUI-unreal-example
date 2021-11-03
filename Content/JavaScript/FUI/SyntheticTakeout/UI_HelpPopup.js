"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_HelpPopup {
    m_InteractablePanel;
    m_Dot1;
    m_text1;
    m_group;
    m_arrow2;
    m_img1;
    m_img2;
    m_img3;
    m_arrow1;
    m_icon;
    static URL = "ui://tqsc8htvveax18";
    static Package = "SyntheticTakeout";
    static Component = "HelpPopup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_HelpPopup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_HelpPopup();
        if (component == null) {
            component = UI_HelpPopup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_Dot1 = component.GetChild("Dot1");
        this.m_text1 = component.GetChild("text1");
        this.m_group = component.GetChild("group");
        this.m_arrow2 = component.GetChild("arrow2");
        this.m_img1 = component.GetChild("img1");
        this.m_img2 = component.GetChild("img2");
        this.m_img3 = component.GetChild("img3");
        this.m_arrow1 = component.GetChild("arrow1");
        this.m_icon = component.GetChild("icon");
    }
}
exports.default = UI_HelpPopup;
//# sourceMappingURL=UI_HelpPopup.js.map