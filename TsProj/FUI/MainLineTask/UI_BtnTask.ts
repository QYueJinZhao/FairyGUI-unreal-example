/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Streamer from "./UI_Streamer";
import UI_Aperture from "./UI_Aperture";

import * as fgui from "ue"
export default class UI_BtnTask {

	public m_button:fgui.GController;
	public m_c1:fgui.GController;
	public m_n2:fgui.GImage;
	public m_Streamer:UI_Streamer;
	public m_coin:fgui.GImage;
	public m_text:fgui.GTextField;
	public m_SpeedOfProgress:fgui.GTextField;
	public m_reward:fgui.GTextField;
	public m_n4:fgui.GImage;
	public m_complete:fgui.GImage;
	public m_task:fgui.GImage;
	public m_Aperture:UI_Aperture;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://eb5tqed8tvuvb";
	public static Package:string  = "MainLineTask";
	public static Component:string  = "BtnTask";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnTask.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnTask {
		var obj = new UI_BtnTask();
		if(component==null){component = UI_BtnTask.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_c1 = component.GetController("c1");
		this.m_n2 = <fgui.GImage>component.GetChild("n2");
		this.m_Streamer =  UI_Streamer.createInstance(component.GetChild("Streamer") as fgui.GComponent, WorldContextObject);
		this.m_coin = <fgui.GImage>component.GetChild("coin");
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_SpeedOfProgress = <fgui.GTextField>component.GetChild("SpeedOfProgress");
		this.m_reward = <fgui.GTextField>component.GetChild("reward");
		this.m_n4 = <fgui.GImage>component.GetChild("n4");
		this.m_complete = <fgui.GImage>component.GetChild("complete");
		this.m_task = <fgui.GImage>component.GetChild("task");
		this.m_Aperture =  UI_Aperture.createInstance(component.GetChild("Aperture") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}