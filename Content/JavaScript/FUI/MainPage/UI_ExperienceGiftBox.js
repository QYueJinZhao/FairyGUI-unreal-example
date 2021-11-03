"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_ExperienceGiftBox {
    m_button;
    m_n0;
    m_t0;
    static URL = "ui://sn18zihkkmwr42";
    static Package = "MainPage";
    static Component = "ExperienceGiftBox";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_ExperienceGiftBox.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_ExperienceGiftBox();
        if (component == null) {
            component = UI_ExperienceGiftBox.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_n0 = component.GetChild("n0");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_ExperienceGiftBox;
//# sourceMappingURL=UI_ExperienceGiftBox.js.map