/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_GetCharacter {

	public m_InteractablePanel:fgui.GGraph;
	public m_Bg:fgui.GImage;
	public m_character:fgui.GLoader;
	public m_name:fgui.GTextField;
	public m_text:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://h9dczuj8daci4p";
	public static Package:string  = "SignIn";
	public static Component:string  = "GetCharacter";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_GetCharacter.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_GetCharacter {
		var obj = new UI_GetCharacter();
		if(component==null){component = UI_GetCharacter.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_Bg = <fgui.GImage>component.GetChild("Bg");
		this.m_character = <fgui.GLoader>component.GetChild("character");
		this.m_name = <fgui.GTextField>component.GetChild("name");
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_t0 = component.GetTransition("t0");
	}
}