/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_ConstructionAndContracting from "./UI_ConstructionAndContracting";

import * as fgui from "ue"
export default class UI_ConstructionAndContractingPopup {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_n1:UI_ConstructionAndContracting;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://n16w4m5p9ti14d";
	public static Package:string  = "Popup";
	public static Component:string  = "ConstructionAndContractingPopup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_ConstructionAndContractingPopup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_ConstructionAndContractingPopup {
		var obj = new UI_ConstructionAndContractingPopup();
		if(component==null){component = UI_ConstructionAndContractingPopup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_n1 =  UI_ConstructionAndContracting.createInstance(component.GetChild("n1") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}