/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Advertisement from "./UI_Advertisement";

import * as fgui from "ue"
export default class UI_AdvertisementPopup {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_Advertisement:UI_Advertisement;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://7zka63zlqqq9q";
	public static Package:string  = "TownEvent";
	public static Component:string  = "AdvertisementPopup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_AdvertisementPopup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_AdvertisementPopup {
		var obj = new UI_AdvertisementPopup();
		if(component==null){component = UI_AdvertisementPopup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_Advertisement =  UI_Advertisement.createInstance(component.GetChild("Advertisement") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}