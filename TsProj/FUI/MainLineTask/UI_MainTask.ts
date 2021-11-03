/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnTask from "./UI_BtnTask";

import * as fgui from "ue"
export default class UI_MainTask {

	public m_BtnTask:UI_BtnTask;
	public static URL:string = "ui://eb5tqed8tvuvc";
	public static Package:string  = "MainLineTask";
	public static Component:string  = "MainTask";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_MainTask.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_MainTask {
		var obj = new UI_MainTask();
		if(component==null){component = UI_MainTask.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BtnTask =  UI_BtnTask.createInstance(component.GetChild("BtnTask") as fgui.GComponent, WorldContextObject);
	}
}