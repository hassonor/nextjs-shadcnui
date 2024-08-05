import {IPostComment} from "@/types/post-comment.interface";

export interface IPost {
    id: string;
    title: string;
    body: string;
    author: string;
    date: string;
    comments: IPostComment[];
}