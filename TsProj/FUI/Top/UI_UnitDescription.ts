/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_UnitDescriptionFrame from "./UI_UnitDescriptionFrame";

import * as fgui from "ue"
export default class UI_UnitDescription {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_frame:UI_UnitDescriptionFrame;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://p6ocxgya9ti1u";
	public static Package:string  = "Top";
	public static Component:string  = "UnitDescription";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_UnitDescription.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_UnitDescription {
		var obj = new UI_UnitDescription();
		if(component==null){component = UI_UnitDescription.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_frame =  UI_UnitDescriptionFrame.createInstance(component.GetChild("frame") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}