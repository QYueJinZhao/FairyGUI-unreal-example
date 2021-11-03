/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Popup_first from "./UI_Popup_first";

import * as fgui from "ue"
export default class UI_SignInPopup_first {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_Popup_first:UI_Popup_first;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://h9dczuj8daci4o";
	public static Package:string  = "SignIn";
	public static Component:string  = "SignInPopup_first";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_SignInPopup_first.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_SignInPopup_first {
		var obj = new UI_SignInPopup_first();
		if(component==null){component = UI_SignInPopup_first.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_Popup_first =  UI_Popup_first.createInstance(component.GetChild("Popup_first") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}