import { Consumer } from "./consumer";

export interface Review {
    reviewId:number;
	product:string;
	comments:string;
    reviewedBy:Consumer;
    isEditable?:boolean;
}
