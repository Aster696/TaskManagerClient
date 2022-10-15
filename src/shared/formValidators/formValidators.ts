import { AbstractControl } from "@angular/forms";

export class formValidators {
    
    public formPasswordValidator(control: AbstractControl): { [key: string]: boolean} | null{
        const password = control.get('password');
        const confirmPass = control.get('confirmPass');
        if(password?.pristine || confirmPass?.pristine){
            return null;
        }
        return password && confirmPass && password.value !== confirmPass.value ? {'misMatch': true}: null;
    }
    
}