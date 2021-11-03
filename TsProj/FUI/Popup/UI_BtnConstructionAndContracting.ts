/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnConstructionAndContracting {

	public m_button:fgui.GController;
	public m_BtnUpgrade:fgui.GImage;
	public m_Coin:fgui.GImage;
	public m_SigMoney:fgui.GTextField;
	public m_Switcher:fgui.GLoader;
	public static URL:string = "ui://n16w4m5p9ti147";
	public static Package:string  = "Popup";
	public static Component:string  = "BtnConstructionAndContracting";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnConstructionAndContracting.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnConstructionAndContracting {
		var obj = new UI_BtnConstructionAndContracting();
		if(component==null){component = UI_BtnConstructionAndContracting.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_BtnUpgrade = <fgui.GImage>component.GetChild("BtnUpgrade");
		this.m_Coin = <fgui.GImage>component.GetChild("Coin");
		this.m_SigMoney = <fgui.GTextField>component.GetChild("SigMoney");
		this.m_Switcher = <fgui.GLoader>component.GetChild("Switcher");
	}
}