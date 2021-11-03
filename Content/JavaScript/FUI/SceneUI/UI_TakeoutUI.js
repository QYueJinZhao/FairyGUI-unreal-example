"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_TakeoutUI {
    m_Bottom;
    m_Grade;
    m_OrderIcon;
    m_name;
    m_expression;
    m_text;
    m_t0;
    static URL = "ui://vw08vbbghzjj14";
    static Package = "SceneUI";
    static Component = "TakeoutUI";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_TakeoutUI.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_TakeoutUI();
        if (component == null) {
            component = UI_TakeoutUI.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_Bottom = component.GetChild("Bottom");
        this.m_Grade = component.GetChild("Grade");
        this.m_OrderIcon = component.GetChild("OrderIcon");
        this.m_name = component.GetChild("name");
        this.m_expression = component.GetChild("expression");
        this.m_text = component.GetChild("text");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_TakeoutUI;
//# sourceMappingURL=UI_TakeoutUI.js.map