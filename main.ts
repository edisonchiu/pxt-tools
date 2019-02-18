//% weight=0 color=#3CB371 icon="\uf0ad" block="Tools"
namespace tools {
    /**
    * 計算長方形面積，並回傳
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length*width)
    }
	
	//% blockId="ledOfRectangle1" block="show area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle1(length: number, width:number): void {
        basic.showNumber(length*width)
    }
	
	//% blockId="Temperature" block="|%p| Temperature "	
    //% shim=tools::Temperature1
    export function Temperature(p: number): number {
        return Temperature(p)
    }
	

}
