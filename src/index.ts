import {Easylibs} from "../packages/easylibs";

const progress = new Easylibs.ProgressForm();
const form = document.getElementById('progress-form') as HTMLFormElement;
progress.run({form})