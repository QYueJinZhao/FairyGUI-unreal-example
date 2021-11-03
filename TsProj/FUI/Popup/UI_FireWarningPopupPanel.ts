/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_FireDialog from "./UI_FireDialog";

import * as fgui from "ue"
export default class UI_FireWarningPopupPanel {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_frame:UI_FireDialog;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://n16w4m5pqb9d3a";
	public static Package:string  = "Popup";
	public static Component:string  = "FireWarningPopupPanel";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_FireWarningPopupPanel.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_FireWarningPopupPanel {
		var obj = new UI_FireWarningPopupPanel();
		if(component==null){component = UI_FireWarningPopupPanel.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_frame =  UI_FireDialog.createInstance(component.GetChild("frame") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}