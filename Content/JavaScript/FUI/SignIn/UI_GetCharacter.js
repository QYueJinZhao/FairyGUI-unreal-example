"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_GetCharacter {
    m_InteractablePanel;
    m_Bg;
    m_character;
    m_name;
    m_text;
    m_t0;
    static URL = "ui://h9dczuj8daci4p";
    static Package = "SignIn";
    static Component = "GetCharacter";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_GetCharacter.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_GetCharacter();
        if (component == null) {
            component = UI_GetCharacter.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_Bg = component.GetChild("Bg");
        this.m_character = component.GetChild("character");
        this.m_name = component.GetChild("name");
        this.m_text = component.GetChild("text");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_GetCharacter;
//# sourceMappingURL=UI_GetCharacter.js.map