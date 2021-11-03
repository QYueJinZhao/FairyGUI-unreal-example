/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";
import UI_Bar from "./UI_Bar";
import UI_BtnIncreaseDuration from "./UI_BtnIncreaseDuration";
import UI_BtnReceive from "./UI_BtnReceive";

import * as fgui from "ue"
export default class UI_OnlineDuration {

	public m_c1:fgui.GController;
	public m_Bottom:fgui.GImage;
	public m_x:UI_x;
	public m_TextTitle:fgui.GTextField;
	public m_Bar:UI_Bar;
	public m_BtnIncreaseDuration:UI_BtnIncreaseDuration;
	public m_BtnReceive:UI_BtnReceive;
	public m_text:fgui.GTextField;
	public m_TimeText:fgui.GTextField;
	public static URL:string = "ui://5eksxjp2hktbt";
	public static Package:string  = "OnlineDuration";
	public static Component:string  = "OnlineDuration";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_OnlineDuration.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_OnlineDuration {
		var obj = new UI_OnlineDuration();
		if(component==null){component = UI_OnlineDuration.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_Bottom = <fgui.GImage>component.GetChild("Bottom");
		this.m_x =  UI_x.createInstance(component.GetChild("x") as fgui.GComponent, WorldContextObject);
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_Bar =  UI_Bar.createInstance(component.GetChild("Bar") as fgui.GComponent, WorldContextObject);
		this.m_BtnIncreaseDuration =  UI_BtnIncreaseDuration.createInstance(component.GetChild("BtnIncreaseDuration") as fgui.GComponent, WorldContextObject);
		this.m_BtnReceive =  UI_BtnReceive.createInstance(component.GetChild("BtnReceive") as fgui.GComponent, WorldContextObject);
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_TimeText = <fgui.GTextField>component.GetChild("TimeText");
	}
}