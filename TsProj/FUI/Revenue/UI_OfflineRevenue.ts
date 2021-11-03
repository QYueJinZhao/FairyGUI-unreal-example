/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_radiation from "./UI_radiation";
import UI_BtnDouble from "./UI_BtnDouble";
import UI_BtnReceive from "./UI_BtnReceive";

import * as fgui from "ue"
export default class UI_OfflineRevenue {

	public m_InteractablePanel:fgui.GGraph;
	public m_radiation:UI_radiation;
	public m_GoldCoinPile:fgui.GImage;
	public m_belt:fgui.GImage;
	public m_title:fgui.GTextField;
	public m_TimeText:fgui.GTextField;
	public m_ProfitText:fgui.GTextField;
	public m_BtnDouble:UI_BtnDouble;
	public m_BtnReceive:UI_BtnReceive;
	public m_receive:fgui.GTextField;
	public static URL:string = "ui://tfx03j5ppip14";
	public static Package:string  = "Revenue";
	public static Component:string  = "OfflineRevenue";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_OfflineRevenue.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_OfflineRevenue {
		var obj = new UI_OfflineRevenue();
		if(component==null){component = UI_OfflineRevenue.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_InteractablePanel = <fgui.GGraph>component.GetChild("InteractablePanel");
		this.m_radiation =  UI_radiation.createInstance(component.GetChild("radiation") as fgui.GComponent, WorldContextObject);
		this.m_GoldCoinPile = <fgui.GImage>component.GetChild("GoldCoinPile");
		this.m_belt = <fgui.GImage>component.GetChild("belt");
		this.m_title = <fgui.GTextField>component.GetChild("title");
		this.m_TimeText = <fgui.GTextField>component.GetChild("TimeText");
		this.m_ProfitText = <fgui.GTextField>component.GetChild("ProfitText");
		this.m_BtnDouble =  UI_BtnDouble.createInstance(component.GetChild("BtnDouble") as fgui.GComponent, WorldContextObject);
		this.m_BtnReceive =  UI_BtnReceive.createInstance(component.GetChild("BtnReceive") as fgui.GComponent, WorldContextObject);
		this.m_receive = <fgui.GTextField>component.GetChild("receive");
	}
}