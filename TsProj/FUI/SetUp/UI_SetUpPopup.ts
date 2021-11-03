/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_SetUp from "./UI_SetUp";

import * as fgui from "ue"
export default class UI_SetUpPopup {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_SetUp:UI_SetUp;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://rnl6o1bldaci5";
	public static Package:string  = "SetUp";
	public static Component:string  = "SetUpPopup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_SetUpPopup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_SetUpPopup {
		var obj = new UI_SetUpPopup();
		if(component==null){component = UI_SetUpPopup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_SetUp =  UI_SetUp.createInstance(component.GetChild("SetUp") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}