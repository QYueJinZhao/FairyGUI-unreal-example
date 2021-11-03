/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_CoinsDynamicEffect1 {

	public m_coins:fgui.GImage;
	public m_coins2:fgui.GImage;
	public m_coins3:fgui.GImage;
	public m_n22:fgui.GGraph;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://tqsc8htv4q284p";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "CoinsDynamicEffect1";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_CoinsDynamicEffect1.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_CoinsDynamicEffect1 {
		var obj = new UI_CoinsDynamicEffect1();
		if(component==null){component = UI_CoinsDynamicEffect1.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_coins = <fgui.GImage>component.GetChild("coins");
		this.m_coins2 = <fgui.GImage>component.GetChild("coins2");
		this.m_coins3 = <fgui.GImage>component.GetChild("coins3");
		this.m_n22 = <fgui.GGraph>component.GetChild("n22");
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}