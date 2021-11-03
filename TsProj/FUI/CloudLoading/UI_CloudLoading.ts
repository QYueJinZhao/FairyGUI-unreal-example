/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_LoadingBar from "./UI_LoadingBar";

import * as fgui from "ue"
export default class UI_CloudLoading {

	public m_c1:fgui.GController;
	public m_bottom:fgui.GGraph;
	public m_Left13:fgui.GImage;
	public m_Left12:fgui.GImage;
	public m_Right11:fgui.GImage;
	public m_Right10:fgui.GImage;
	public m_Right9:fgui.GImage;
	public m_Right8:fgui.GImage;
	public m_Right14:fgui.GImage;
	public m_Left7:fgui.GImage;
	public m_Right6:fgui.GImage;
	public m_Left5:fgui.GImage;
	public m_Right4:fgui.GImage;
	public m_Right3:fgui.GImage;
	public m_Left2:fgui.GImage;
	public m_Left14:fgui.GImage;
	public m_Left15:fgui.GImage;
	public m_Left1:fgui.GImage;
	public m_Right16:fgui.GImage;
	public m_Right17:fgui.GImage;
	public m_LoadingBar:UI_LoadingBar;
	public m_Loading:fgui.GLoader;
	public m_MistClose:fgui.Transition;
	public m_MistOpen:fgui.Transition;
	public static URL:string = "ui://4pjqltd9j17p7";
	public static Package:string  = "CloudLoading";
	public static Component:string  = "CloudLoading";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_CloudLoading.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_CloudLoading {
		var obj = new UI_CloudLoading();
		if(component==null){component = UI_CloudLoading.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_bottom = <fgui.GGraph>component.GetChild("bottom");
		this.m_Left13 = <fgui.GImage>component.GetChild("Left13");
		this.m_Left12 = <fgui.GImage>component.GetChild("Left12");
		this.m_Right11 = <fgui.GImage>component.GetChild("Right11");
		this.m_Right10 = <fgui.GImage>component.GetChild("Right10");
		this.m_Right9 = <fgui.GImage>component.GetChild("Right9");
		this.m_Right8 = <fgui.GImage>component.GetChild("Right8");
		this.m_Right14 = <fgui.GImage>component.GetChild("Right14");
		this.m_Left7 = <fgui.GImage>component.GetChild("Left7");
		this.m_Right6 = <fgui.GImage>component.GetChild("Right6");
		this.m_Left5 = <fgui.GImage>component.GetChild("Left5");
		this.m_Right4 = <fgui.GImage>component.GetChild("Right4");
		this.m_Right3 = <fgui.GImage>component.GetChild("Right3");
		this.m_Left2 = <fgui.GImage>component.GetChild("Left2");
		this.m_Left14 = <fgui.GImage>component.GetChild("Left14");
		this.m_Left15 = <fgui.GImage>component.GetChild("Left15");
		this.m_Left1 = <fgui.GImage>component.GetChild("Left1");
		this.m_Right16 = <fgui.GImage>component.GetChild("Right16");
		this.m_Right17 = <fgui.GImage>component.GetChild("Right17");
		this.m_LoadingBar =  UI_LoadingBar.createInstance(component.GetChild("LoadingBar") as fgui.GComponent, WorldContextObject);
		this.m_Loading = <fgui.GLoader>component.GetChild("Loading");
		this.m_MistClose = component.GetTransition("MistClose");
		this.m_MistOpen = component.GetTransition("MistOpen");
	}
}