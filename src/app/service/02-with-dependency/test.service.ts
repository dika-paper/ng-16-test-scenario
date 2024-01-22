import { Injectable } from "@angular/core";
import { OtherService } from "./other.service";

@Injectable()
export class TestService {
    constructor(private otherService: OtherService) {}

    log() {
        console.log(this.otherService.foo());
    }
}