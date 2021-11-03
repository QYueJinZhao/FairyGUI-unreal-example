"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Experience {
    m_n2;
    m_n3;
    m_n4;
    m_n5;
    m_n6;
    m_n7;
    m_n9;
    m_n10;
    m_ExperienceGiftBox;
    m_arrow;
    m_Experience_;
    m_t0;
    static URL = "ui://p6ocxgyav2ma1z";
    static Package = "Top";
    static Component = "Experience";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Experience.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Experience();
        if (component == null) {
            component = UI_Experience.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n2 = component.GetChild("n2");
        this.m_n3 = component.GetChild("n3");
        this.m_n4 = component.GetChild("n4");
        this.m_n5 = component.GetChild("n5");
        this.m_n6 = component.GetChild("n6");
        this.m_n7 = component.GetChild("n7");
        this.m_n9 = component.GetChild("n9");
        this.m_n10 = component.GetChild("n10");
        this.m_ExperienceGiftBox = component.GetChild("ExperienceGiftBox");
        this.m_arrow = component.GetChild("arrow");
        this.m_Experience_ = component.GetChild("Experience+");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_Experience;
//# sourceMappingURL=UI_Experience.js.map