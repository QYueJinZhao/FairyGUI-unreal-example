"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnSigningBubble_1 = require("./UI_BtnSigningBubble");
const fgui = require("ue");
class UI_SigningBubble {
    m_BtnSigningBubble;
    m_t0;
    static URL = "ui://n16w4m5p9ti14c";
    static Package = "Popup";
    static Component = "SigningBubble";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_SigningBubble.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_SigningBubble();
        if (component == null) {
            component = UI_SigningBubble.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BtnSigningBubble = UI_BtnSigningBubble_1.default.createInstance(component.GetChild("BtnSigningBubble"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_SigningBubble;
//# sourceMappingURL=UI_SigningBubble.js.map