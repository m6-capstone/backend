import AppDataSource from "../../data-source";
import {AppError} from "../../errors/AppError";
import { Comments } from "../../entities/comments";
import { ICommentsDeleteReponse } from '../../interfaces/comments'

export const deleteCommentsService = async (commentsId:string, userId:string) => {
  const commentsRepository = AppDataSource.getRepository(Comments);

  const comments = await commentsRepository.findOne({
    relations: { user: true, adverts: true },
    where: { id: commentsId },
  });

  if(comments?.user.id !== userId){
    throw new AppError("Unauthorized", 401);
  }

  if (!comments) {
    throw new AppError("Comments not Found", 400);
  }

  await commentsRepository.delete(comments.id);
  const response: ICommentsDeleteReponse = { message: "comments has been deleted" };

  return response;
};
