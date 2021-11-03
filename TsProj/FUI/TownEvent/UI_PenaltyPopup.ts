/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Penalty from "./UI_Penalty";

import * as fgui from "ue"
export default class UI_PenaltyPopup {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_Penalty:UI_Penalty;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://7zka63zlqqq9n";
	public static Package:string  = "TownEvent";
	public static Component:string  = "PenaltyPopup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_PenaltyPopup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_PenaltyPopup {
		var obj = new UI_PenaltyPopup();
		if(component==null){component = UI_PenaltyPopup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_Penalty =  UI_Penalty.createInstance(component.GetChild("Penalty") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}