import AppDataSource from "../../data-source";
import { Comments } from "../../entities/comments";

export const listCommentsService = async () => {
  const commentsRepository = AppDataSource.getRepository(Comments);
  const comments = commentsRepository.find();
  return comments;
};
