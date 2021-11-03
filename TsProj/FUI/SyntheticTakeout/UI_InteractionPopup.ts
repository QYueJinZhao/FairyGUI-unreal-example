/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Popup from "./UI_Popup";

import * as fgui from "ue"
export default class UI_InteractionPopup {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_Popup:UI_Popup;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://tqsc8htvpip1a";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "InteractionPopup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_InteractionPopup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_InteractionPopup {
		var obj = new UI_InteractionPopup();
		if(component==null){component = UI_InteractionPopup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_Popup =  UI_Popup.createInstance(component.GetChild("Popup") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}