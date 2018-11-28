import {
    Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef
} from '@angular/core';
import { flyIn, halo } from '../../animations';
import { Observable, Observer } from 'rxjs';
import { KnowledgeComponent } from '../../knowledge';

declare const $: any;
@Component({
    selector: 'temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})
export class TemperatureComponent implements OnInit {
    jgonetxt1 = [
        {
            text: '请选择热敏电阻类型，并操作酒精灯，观察万用表的电阻变化。',
            open: '',
            style: {
                display: 'block',
                fontSize: "16px",
                color: '#fff',
                textIndent: '2em'
            }
        }
    ];
    jgonetxt2 = [
        {
            text: '请操作“升温”或“降温”，观察万用表的电压读数，了解温度传感器所产生的电压信号变化。',
            open: '',
            style: {
                display: 'block',
                fontSize: "16px",
                color: '#fff',
                textIndent: '2em'
            }
        }
    ];
    spanClick1: boolean = false;
    spanClick2: boolean = false;
    knowledgePage: number = 1;
    timer1 = null;
    timer2 = null;
    timer3 = null;
    timer4 = null;
    resistanceValue1: any = 'OL';
    resistanceValue2: any = 'OL';
    elegantValue: any = '3.90';
    returnClick: string = '';
    obj1 = {
        halo1: 'halo',
        halo2: 'halo',
    }
    obj2 = {
        halo3: 'halo',
        halo4: 'halo',
    }
    obj3 = {
        halo5: 'halo',
        halo6: 'halo',
    }
    constructor(
        element: ElementRef,
    ) {
    }
    ptcORntc(param, str) {
        if (this.returnClick == param) {
            return;
        }
        this.initButton();
        this.obj1[str] = '';
        this.returnClick = param;
        clearInterval(this.timer1);
        clearInterval(this.timer2);
        this.spanClick1 = false;
        this.spanClick2 = false;
        $('.isShow').css('display', 'none');
        $('.hight1').css('background', 'lightseagreen');
        $('.hight').css('background', 'lightseagreen');
        $('.' + param).css('background', '#ccc');
        if (param === 'spanClick1') {
            $('#line1').css({ 'display': 'none' });
            $('#line').css({ 'display': 'block' });
            this.spanClick1 = true;
            this.resistanceValue1 = 1000;
        } else {
            $('#line').css({ 'display': 'none' });
            $('#line1').css({ 'display': 'block' });
            this.spanClick2 = true;
            this.resistanceValue2 = 7355;
        }
    }
    // 酒精灯交互
    alcoholLamp(param, str) {
        clearInterval(this.timer1);
        clearInterval(this.timer2);

        if (!this.spanClick1 && !this.spanClick2) {
            return;
        }
        Object.keys(this.obj2).map((item, index) => {
            this.obj2[item] = 'halo';
        })
        this.obj2[str] = '';
        $('.hight').css('background', 'lightseagreen');
        $('.' + param).css('background', '#ccc');
        if (this.spanClick1) {
            if (param === 'spanClick3') {
                $('.isShow').css('display', 'block');
                let line = document.getElementById('line');
                line.style.height = '96px';
                line.style.top = '210px';
                this.timer1 = setInterval(() => {
                    if (this.resistanceValue1 >= 1535) {
                        this.resistanceValue1 = 1535;
                        return;
                    }
                    this.resistanceValue1 += 40;
                }, 100)
            } else {
                $('.isShow').css('display', 'none');
                let line = document.getElementById('line');
                line.style.height = '0px';
                line.style.top = '310px';
                this.timer2 = setInterval(() => {
                    if (this.resistanceValue1 <= 1000) {
                        this.resistanceValue1 = 1000;
                        return;
                    }
                    this.resistanceValue1 -= 40;
                }, 100)
            }
        } else if (this.spanClick2) {
            if (param === 'spanClick3') {
                $('.isShow').css('display', 'block');
                let line1 = document.getElementById('line1');
                line1.style.height = '96px';
                line1.style.top = '210px';
                this.timer1 = setInterval(() => {
                    if (this.resistanceValue2 - 450 <= 53) {
                        this.resistanceValue2 = 53;
                        return;
                    }
                    this.resistanceValue2 -= 450;
                }, 100)
            } else {
                $('.isShow').css('display', 'none');
                let line1 = document.getElementById('line1');
                line1.style.height = '0px';
                line1.style.top = '310px';
                this.timer2 = setInterval(() => {
                    if (this.resistanceValue2 + 500 >= 7355) {
                        this.resistanceValue2 = 7355;
                        return;
                    }
                    this.resistanceValue2 += 500;
                }, 100)
            }
        }
    }

    // 初始化按钮
    initButton() {
        Object.keys(this.obj1).map((item, index) => {
            this.obj1[item] = 'halo';
        });
        Object.keys(this.obj2).map((item, index) => {
            this.obj2[item] = 'halo';
        });
        Object.keys(this.obj3).map((item, index) => {
            this.obj3[item] = 'halo';
        });
    }

    // 升温或者降温
    temperature(param, str) {
        $('.hight').css('background', 'lightseagreen');
        $('.' + param).css('background', '#ccc');
        Object.keys(this.obj3).map((item, index) => {
            this.obj3[item] = 'halo';
        })
        this.obj3[str] = '';
        switch (param) {
            case "up":
                clearTimeout(this.timer4);
                clearTimeout(this.timer3);
                setTimeout(() => {
                    let line2 = document.getElementById('line2');
                    line2.style.height = '96px';
                    line2.style.top = '210px';
                }, 100);
                this.timer3 = setInterval(() => {
                    if (this.elegantValue <= 1.10) {
                        this.elegantValue = '1.10';
                        return;
                    }
                    this.elegantValue = (parseFloat(this.elegantValue) - 0.1).toFixed(2);
                }, 50)
                break;
            case "down":
                clearTimeout(this.timer3);
                clearTimeout(this.timer4);
                setTimeout(() => {
                    let line2 = document.getElementById('line2');
                    line2.style.height = '0px';
                    line2.style.top = '320px';
                }, 100);
                this.timer4 = setInterval(() => {
                    if (this.elegantValue >= 3.90) {
                        this.elegantValue = '3.90';
                        return;
                    }
                    this.elegantValue = (parseFloat(this.elegantValue) + 0.1).toFixed(2);
                }, 50)
                break;
        }
    }

    flipUp(param) {
        switch (param) {
            case "principle":
                if (this.knowledgePage <= 1) {
                    return;
                }
                this.isColor('principle', 1);
                if (this.knowledgePage <= 2) {
                    clearTimeout(this.timer3);
                    clearTimeout(this.timer4);
                    this.initButton();
                    this.elegantValue = '3.90';
                    this.spanClick1 = false;
                    this.spanClick2 = false;
                    this.returnClick = '';
                    this.isColor('principle', 3);
                }
                this.knowledgePage--;
                break;
        }
    }
    flipDown(param) {
        switch (param) {
            case "principle":
                if (this.knowledgePage >= 2) {
                    return;
                }
                this.isColor('principle', 1);
                if (this.knowledgePage >= 1) {
                    clearTimeout(this.timer3);
                    clearTimeout(this.timer4);
                    this.initButton();
                    this.elegantValue = '3.90';
                    this.spanClick1 = false;
                    this.spanClick2 = false;
                    this.returnClick = '';
                    this.isColor('principle', 2);
                }
                this.knowledgePage++;
                break;
        }
    }

    // 上下翻页文字和三角的颜色变化
    isColor(param, num) {
        switch (num) {
            case 1:
                setTimeout(function () {
                    // $('.' + param + '-flip .leftArrow').css('border', '20px rgb(65, 67, 79) solid').siblings('.rightArrow').css('border', ' 20px rgb(65, 67, 79) solid').siblings('.prev,.next').css('color', 'rgb(65, 67, 79)');
                    $('.prev-flip').css('background-color', 'rgb(136, 140, 143)');
                    $('.next-flip').css('background-color', 'rgb(136, 140, 143)');
                }, 10);
                break;
            case 2:
                setTimeout(function () {
                    // $('.' + param + '-flip .rightArrow').css('border', '20px rgb(136, 140, 143) solid').siblings('.leftArrow').css('border', '20px rgb(65, 67, 79) solid').siblings('.prev').css('color', 'rgb(65, 67, 79)').siblings('.next').css('color', 'rgb(136, 140, 143)');
                    $('.prev-flip').css('background-color', 'rgb(136, 140, 143)');
                    $('.next-flip').css('background-color', '#fcb41e');
                }, 10);
                break;
            case 3:
                setTimeout(function () {
                    // $('.' + param + '-flip .leftArrow').css('border', '20px rgb(136, 140, 143) solid').siblings('.rightArrow').css('border', '20px rgb(65, 67, 79) solid').siblings('.prev').css('color', 'rgb(136, 140, 143)').siblings('.next').css('color', 'rgb(65, 67, 79)');  
                    $('.prev-flip').css('background-color', '#fcb41e');
                    $('.next-flip').css('background-color', 'rgb(136, 140, 143)');
                }, 10);
                break;
        }

    }
    ngOnInit() {
    }

}
