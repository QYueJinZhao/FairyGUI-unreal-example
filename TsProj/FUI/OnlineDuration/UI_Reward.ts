/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Reward {

	public m_c1:fgui.GController;
	public m_RewardBase1:fgui.GImage;
	public m_RewardBase2:fgui.GImage;
	public m_Purse:fgui.GImage;
	public m_quantity:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://5eksxjp2hktbp";
	public static Package:string  = "OnlineDuration";
	public static Component:string  = "Reward";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Reward.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Reward {
		var obj = new UI_Reward();
		if(component==null){component = UI_Reward.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_RewardBase1 = <fgui.GImage>component.GetChild("RewardBase1");
		this.m_RewardBase2 = <fgui.GImage>component.GetChild("RewardBase2");
		this.m_Purse = <fgui.GImage>component.GetChild("Purse");
		this.m_quantity = <fgui.GTextField>component.GetChild("quantity");
		this.m_t0 = component.GetTransition("t0");
	}
}