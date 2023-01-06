export interface ICommentsCreateRequest{
    text: string;
    userId?: string;
    advertsId?: string;
}

export interface ICommentsUpdateRequest{
    text: string;
    userId?: string;
    commentsId?: string;
}

export interface ICommentsDeleteReponse {
    message: string;
}