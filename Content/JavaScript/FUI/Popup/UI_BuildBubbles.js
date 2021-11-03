"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnBuildBubbles_1 = require("./UI_BtnBuildBubbles");
const fgui = require("ue");
class UI_BuildBubbles {
    m_BtnBuildBubbles;
    m_t0;
    static URL = "ui://n16w4m5p9ti14a";
    static Package = "Popup";
    static Component = "BuildBubbles";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BuildBubbles.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BuildBubbles();
        if (component == null) {
            component = UI_BuildBubbles.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BtnBuildBubbles = UI_BtnBuildBubbles_1.default.createInstance(component.GetChild("BtnBuildBubbles"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_BuildBubbles;
//# sourceMappingURL=UI_BuildBubbles.js.map