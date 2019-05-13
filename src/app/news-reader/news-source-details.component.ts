import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, NgZone } from '@angular/core';

@Component({
    selector: "my-source-details",
    changeDetection: ChangeDetectionStrategy.Default,
    template: `
        <p>News Source Details</p>
        <p>{{desc}}</p>
    `,
    styleUrls: ['./news-reader.component.sass'],
})

export class NewsSourceDetailsComponent{
    
    public desc = "Description";
    
    constructor(public ref: ChangeDetectorRef, public zone: NgZone) { }
        
    selectNewsSource(nsrc){
        console.log(nsrc.description);
        //this.desc = "sss";
        this.zone.runOutsideAngular(() => this.desc = "sss");
        //this.desc = nsrc.description;
        this.refresh();
    }
    
    refresh() {
        this.ref.detectChanges();
        //this.ref.markForCheck();
    }
}

