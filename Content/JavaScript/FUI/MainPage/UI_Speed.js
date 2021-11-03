"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Speed {
    m_bar;
    m_title;
    m_Text;
    static URL = "ui://sn18zihk90iz16";
    static Package = "MainPage";
    static Component = "Speed";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Speed.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Speed();
        if (component == null) {
            component = UI_Speed.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_bar = component.GetChild("bar");
        this.m_title = component.GetChild("title");
        this.m_Text = component.GetChild("Text");
    }
}
exports.default = UI_Speed;
//# sourceMappingURL=UI_Speed.js.map