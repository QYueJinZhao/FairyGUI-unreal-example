/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Reward from "./UI_Reward";
import UI_BgTime from "./UI_BgTime";
import UI_add_10min from "./UI_add_10min";

import * as fgui from "ue"
export default class UI_Bar {

	public m_1h:fgui.GTextField;
	public m_Reward:UI_Reward;
	public m_ProgressBarBottom1:fgui.GImage;
	public m_bar:fgui.GImage;
	public m_SplitLine:fgui.GImage;
	public m_BgTime:UI_BgTime;
	public m_addminutes:UI_add_10min;
	public m_10min:fgui.GTextField;
	public m_30min:fgui.GTextField;
	public m_50min:fgui.GTextField;
	public static URL:string = "ui://5eksxjp2hktbu";
	public static Package:string  = "OnlineDuration";
	public static Component:string  = "Bar";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Bar.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Bar {
		var obj = new UI_Bar();
		if(component==null){component = UI_Bar.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_1h = <fgui.GTextField>component.GetChild("1h");
		this.m_Reward =  UI_Reward.createInstance(component.GetChild("Reward") as fgui.GComponent, WorldContextObject);
		this.m_ProgressBarBottom1 = <fgui.GImage>component.GetChild("ProgressBarBottom1");
		this.m_bar = <fgui.GImage>component.GetChild("bar");
		this.m_SplitLine = <fgui.GImage>component.GetChild("SplitLine");
		this.m_BgTime =  UI_BgTime.createInstance(component.GetChild("BgTime") as fgui.GComponent, WorldContextObject);
		this.m_addminutes =  UI_add_10min.createInstance(component.GetChild("addminutes") as fgui.GComponent, WorldContextObject);
		this.m_10min = <fgui.GTextField>component.GetChild("10min");
		this.m_30min = <fgui.GTextField>component.GetChild("30min");
		this.m_50min = <fgui.GTextField>component.GetChild("50min");
	}
}