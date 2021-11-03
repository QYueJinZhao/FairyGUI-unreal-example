/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnHelp from "./UI_BtnHelp";
import UI_warning from "./UI_warning";
import UI_BtnComplete from "./UI_BtnComplete";
import UI_BtnColorBomb from "./UI_BtnColorBomb";
import UI_BtnRange from "./UI_BtnRange";

import * as fgui from "ue"
export default class UI_SyntheticInterface {

	public m_icon:fgui.GLoader;
	public m_title:fgui.GTextField;
	public m_text:fgui.GTextField;
	public m_Title:fgui.GGroup;
	public m_BtnHelp:UI_BtnHelp;
	public m_warning:UI_warning;
	public m_BtnComplete:UI_BtnComplete;
	public m_BtnColorBomb:UI_BtnColorBomb;
	public m_BtnRange:UI_BtnRange;
	public static URL:string = "ui://tqsc8htvpip1f";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "SyntheticInterface";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_SyntheticInterface.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_SyntheticInterface {
		var obj = new UI_SyntheticInterface();
		if(component==null){component = UI_SyntheticInterface.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_icon = <fgui.GLoader>component.GetChild("icon");
		this.m_title = <fgui.GTextField>component.GetChild("title");
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_Title = <fgui.GGroup>component.GetChild("Title");
		this.m_BtnHelp =  UI_BtnHelp.createInstance(component.GetChild("BtnHelp") as fgui.GComponent, WorldContextObject);
		this.m_warning =  UI_warning.createInstance(component.GetChild("warning") as fgui.GComponent, WorldContextObject);
		this.m_BtnComplete =  UI_BtnComplete.createInstance(component.GetChild("BtnComplete") as fgui.GComponent, WorldContextObject);
		this.m_BtnColorBomb =  UI_BtnColorBomb.createInstance(component.GetChild("BtnColorBomb") as fgui.GComponent, WorldContextObject);
		this.m_BtnRange =  UI_BtnRange.createInstance(component.GetChild("BtnRange") as fgui.GComponent, WorldContextObject);
	}
}