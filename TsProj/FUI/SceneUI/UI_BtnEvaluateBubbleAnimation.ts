/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_EvaluationBubble from "./UI_EvaluationBubble";

import * as fgui from "ue"
export default class UI_BtnEvaluateBubbleAnimation {

	public m_button:fgui.GController;
	public m_n0:UI_EvaluationBubble;
	public static URL:string = "ui://vw08vbbgdkz6t";
	public static Package:string  = "SceneUI";
	public static Component:string  = "BtnEvaluateBubbleAnimation";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnEvaluateBubbleAnimation.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnEvaluateBubbleAnimation {
		var obj = new UI_BtnEvaluateBubbleAnimation();
		if(component==null){component = UI_BtnEvaluateBubbleAnimation.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_n0 =  UI_EvaluationBubble.createInstance(component.GetChild("n0") as fgui.GComponent, WorldContextObject);
	}
}