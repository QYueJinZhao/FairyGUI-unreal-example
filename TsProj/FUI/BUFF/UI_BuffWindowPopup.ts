/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BuffWindow from "./UI_BuffWindow";

import * as fgui from "ue"
export default class UI_BuffWindowPopup {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_BuffWindow:UI_BuffWindow;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://tm2lcvzyjdb720";
	public static Package:string  = "BUFF";
	public static Component:string  = "BuffWindowPopup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BuffWindowPopup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BuffWindowPopup {
		var obj = new UI_BuffWindowPopup();
		if(component==null){component = UI_BuffWindowPopup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_BuffWindow =  UI_BuffWindow.createInstance(component.GetChild("BuffWindow") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}