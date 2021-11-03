/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_radiation from "./UI_radiation";
import UI_RewardPopup from "./UI_RewardPopup";

import * as fgui from "ue"
export default class UI_Get_AReward {

	public m_c1:fgui.GController;
	public m_InteractablePanel:fgui.GGraph;
	public m_radiation:UI_radiation;
	public m_RewardPopup:UI_RewardPopup;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public m_t2:fgui.Transition;
	public static URL:string = "ui://tgre8ndbpip11l";
	public static Package:string  = "Turntable";
	public static Component:string  = "Get AReward";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Get_AReward.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Get_AReward {
		var obj = new UI_Get_AReward();
		if(component==null){component = UI_Get_AReward.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_radiation =  UI_radiation.createInstance(component.GetChild("radiation") as fgui.GComponent, WorldContextObject);
		this.m_RewardPopup =  UI_RewardPopup.createInstance(component.GetChild("RewardPopup") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
		this.m_t2 = component.GetTransition("t2");
	}
}