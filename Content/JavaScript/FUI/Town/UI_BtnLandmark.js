"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnLandmark {
    m_button;
    m_Bg;
    m_icon;
    static URL = "ui://7d8qawju9ab9q";
    static Package = "Town";
    static Component = "BtnLandmark";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnLandmark.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnLandmark();
        if (component == null) {
            component = UI_BtnLandmark.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Bg = component.GetChild("Bg");
        this.m_icon = component.GetChild("icon");
    }
}
exports.default = UI_BtnLandmark;
//# sourceMappingURL=UI_BtnLandmark.js.map