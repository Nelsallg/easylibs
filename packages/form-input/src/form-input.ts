import CheckboxManager  from './scripts/checkbox-manager';
import ColorManager  from './scripts/color-manager';
import DateManager  from './scripts/date-manager';
import PasswordManager  from './scripts/password-manager';
import SelectManager  from './scripts/select-manager';

export namespace FormInput {
  export class CheckboxType extends CheckboxManager {}
  export class ColorType extends ColorManager {}
  export class PasswordType extends PasswordManager {}
  export class SelectType extends SelectManager {}
  export class DateType extends DateManager {}
}