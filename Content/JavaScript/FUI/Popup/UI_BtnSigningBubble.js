"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnSigningBubble {
    m_button;
    m_Bubble;
    m_Signing;
    static URL = "ui://n16w4m5p9ti14b";
    static Package = "Popup";
    static Component = "BtnSigningBubble";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnSigningBubble.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnSigningBubble();
        if (component == null) {
            component = UI_BtnSigningBubble.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Bubble = component.GetChild("Bubble");
        this.m_Signing = component.GetChild("Signing");
    }
}
exports.default = UI_BtnSigningBubble;
//# sourceMappingURL=UI_BtnSigningBubble.js.map