"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const fgui = require("ue");
class UI_UnitDescriptionFrame {
    m_n1;
    m_closeButton;
    m_TextTitle;
    m_n4;
    static URL = "ui://p6ocxgya9ti11l";
    static Package = "Top";
    static Component = "UnitDescriptionFrame";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_UnitDescriptionFrame.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_UnitDescriptionFrame();
        if (component == null) {
            component = UI_UnitDescriptionFrame.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n1 = component.GetChild("n1");
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_TextTitle = component.GetChild("TextTitle");
        this.m_n4 = component.GetChild("n4");
    }
}
exports.default = UI_UnitDescriptionFrame;
//# sourceMappingURL=UI_UnitDescriptionFrame.js.map