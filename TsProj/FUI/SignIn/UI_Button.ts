/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnDouble from "./UI_BtnDouble";
import UI_BtnSignIn from "./UI_BtnSignIn";

import * as fgui from "ue"
export default class UI_Button {

	public m_c1:fgui.GController;
	public m_BtnDouble:UI_BtnDouble;
	public m_BtnSignIn:UI_BtnSignIn;
	public m_text:fgui.GTextField;
	public static URL:string = "ui://h9dczuj86n0lu";
	public static Package:string  = "SignIn";
	public static Component:string  = "Button";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Button.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Button {
		var obj = new UI_Button();
		if(component==null){component = UI_Button.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_BtnDouble =  UI_BtnDouble.createInstance(component.GetChild("BtnDouble") as fgui.GComponent, WorldContextObject);
		this.m_BtnSignIn =  UI_BtnSignIn.createInstance(component.GetChild("BtnSignIn") as fgui.GComponent, WorldContextObject);
		this.m_text = <fgui.GTextField>component.GetChild("text");
	}
}