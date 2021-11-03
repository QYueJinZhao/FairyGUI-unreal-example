/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_OnlineDuration from "./UI_OnlineDuration";

import * as fgui from "ue"
export default class UI_OnlineDurationPopup {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_OnlineDuration:UI_OnlineDuration;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://5eksxjp2hktbv";
	public static Package:string  = "OnlineDuration";
	public static Component:string  = "OnlineDurationPopup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_OnlineDurationPopup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_OnlineDurationPopup {
		var obj = new UI_OnlineDurationPopup();
		if(component==null){component = UI_OnlineDurationPopup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_OnlineDuration =  UI_OnlineDuration.createInstance(component.GetChild("OnlineDuration") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}