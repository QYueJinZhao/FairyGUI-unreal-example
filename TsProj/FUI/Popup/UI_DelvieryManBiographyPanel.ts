/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_TakeoutCard from "./UI_TakeoutCard";
import UI_BtnRefresh from "./UI_BtnRefresh";

import * as fgui from "ue"
export default class UI_DelvieryManBiographyPanel {

	public m_InteractablePanel:fgui.GGraph;
	public m_TakeoutCard:UI_TakeoutCard;
	public m_BtnRefresh:UI_BtnRefresh;
	public m_Text:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://n16w4m5pae104n";
	public static Package:string  = "Popup";
	public static Component:string  = "DelvieryManBiographyPanel";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_DelvieryManBiographyPanel.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_DelvieryManBiographyPanel {
		var obj = new UI_DelvieryManBiographyPanel();
		if(component==null){component = UI_DelvieryManBiographyPanel.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_TakeoutCard =  UI_TakeoutCard.createInstance(component.GetChild("TakeoutCard") as fgui.GComponent, WorldContextObject);
		this.m_BtnRefresh =  UI_BtnRefresh.createInstance(component.GetChild("BtnRefresh") as fgui.GComponent, WorldContextObject);
		this.m_Text = <fgui.GTextField>component.GetChild("Text");
		this.m_t0 = component.GetTransition("t0");
	}
}