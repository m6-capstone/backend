import AppDataSource from "../../data-source";
import {AppError} from "../../errors/AppError";
import { Comments } from "../../entities/comments";
import { ICommentsUpdateRequest } from '../../interfaces/comments'

export const updateCommentsService = async ({commentsId,text}: ICommentsUpdateRequest) => {
    const commentsRepository = AppDataSource.getRepository(Comments);
    const comments = await commentsRepository.findOne({
        relations: { user: true, adverts: true },
        where: { id: commentsId },
    });

    if (!comments) {
        throw new AppError("Comments not Found", 400);
    }

    await commentsRepository.update(comments!.id, {text: text ? text : comments.text});

    return true
};
