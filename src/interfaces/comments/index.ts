export interface ICommentsCreateRequest{
    text: string;
    userId?: string;
    advertsId?: string;
}

export interface ICommentsDeleteReponse {
    message: string;
}