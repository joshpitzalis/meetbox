import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

export const textInput$ = new Subject().pipe(debounceTime(2000));
