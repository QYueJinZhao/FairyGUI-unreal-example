"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnBuildBubbles {
    m_button;
    m_Bubble;
    m_Build;
    static URL = "ui://n16w4m5p9ti149";
    static Package = "Popup";
    static Component = "BtnBuildBubbles";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnBuildBubbles.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnBuildBubbles();
        if (component == null) {
            component = UI_BtnBuildBubbles.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Bubble = component.GetChild("Bubble");
        this.m_Build = component.GetChild("Build");
    }
}
exports.default = UI_BtnBuildBubbles;
//# sourceMappingURL=UI_BtnBuildBubbles.js.map