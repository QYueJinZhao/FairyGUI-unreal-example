/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Coin1 from "./UI_Coin1";
import UI_Coin2 from "./UI_Coin2";
import UI_Coin3 from "./UI_Coin3";
import UI_Coin4 from "./UI_Coin4";
import UI_Coin5 from "./UI_Coin5";
import UI_Coin6 from "./UI_Coin6";

import * as fgui from "ue"
export default class UI_Turntable {

	public m_BG:fgui.GImage;
	public m_Coin1:UI_Coin1;
	public m_Coin2:UI_Coin2;
	public m_Coin3:UI_Coin3;
	public m_Coin4:UI_Coin4;
	public m_Coin5:UI_Coin5;
	public m_Coin6:UI_Coin6;
	public static URL:string = "ui://tgre8ndbpip11g";
	public static Package:string  = "Turntable";
	public static Component:string  = "Turntable";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Turntable.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Turntable {
		var obj = new UI_Turntable();
		if(component==null){component = UI_Turntable.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_Coin1 =  UI_Coin1.createInstance(component.GetChild("Coin1") as fgui.GComponent, WorldContextObject);
		this.m_Coin2 =  UI_Coin2.createInstance(component.GetChild("Coin2") as fgui.GComponent, WorldContextObject);
		this.m_Coin3 =  UI_Coin3.createInstance(component.GetChild("Coin3") as fgui.GComponent, WorldContextObject);
		this.m_Coin4 =  UI_Coin4.createInstance(component.GetChild("Coin4") as fgui.GComponent, WorldContextObject);
		this.m_Coin5 =  UI_Coin5.createInstance(component.GetChild("Coin5") as fgui.GComponent, WorldContextObject);
		this.m_Coin6 =  UI_Coin6.createInstance(component.GetChild("Coin6") as fgui.GComponent, WorldContextObject);
	}
}