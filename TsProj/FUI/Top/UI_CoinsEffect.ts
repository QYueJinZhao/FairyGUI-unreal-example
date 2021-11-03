/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_CoinsEffect {

	public m_c1:fgui.GController;
	public m_coins3:fgui.GImage;
	public m_coins2:fgui.GImage;
	public m_coins:fgui.GImage;
	public m_coins_2:fgui.Transition;
	public static URL:string = "ui://p6ocxgyaky5w1w";
	public static Package:string  = "Top";
	public static Component:string  = "CoinsEffect";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_CoinsEffect.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_CoinsEffect {
		var obj = new UI_CoinsEffect();
		if(component==null){component = UI_CoinsEffect.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_coins3 = <fgui.GImage>component.GetChild("coins3");
		this.m_coins2 = <fgui.GImage>component.GetChild("coins2");
		this.m_coins = <fgui.GImage>component.GetChild("coins");
		this.m_coins_2 = component.GetTransition("coins");
	}
}