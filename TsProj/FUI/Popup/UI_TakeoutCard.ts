/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Card from "./UI_Card";

import * as fgui from "ue"
export default class UI_TakeoutCard {

	public m_c1:fgui.GController;
	public m_Card1:UI_Card;
	public m_Card2:UI_Card;
	public m_Card3:UI_Card;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public m_t2:fgui.Transition;
	public static URL:string = "ui://n16w4m5pae104m";
	public static Package:string  = "Popup";
	public static Component:string  = "TakeoutCard";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_TakeoutCard.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_TakeoutCard {
		var obj = new UI_TakeoutCard();
		if(component==null){component = UI_TakeoutCard.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_Card1 =  UI_Card.createInstance(component.GetChild("Card1") as fgui.GComponent, WorldContextObject);
		this.m_Card2 =  UI_Card.createInstance(component.GetChild("Card2") as fgui.GComponent, WorldContextObject);
		this.m_Card3 =  UI_Card.createInstance(component.GetChild("Card3") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
		this.m_t2 = component.GetTransition("t2");
	}
}