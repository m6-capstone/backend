import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user";
import { Adverts } from "../../entities/adverts";
import { Comments } from "../../entities/comments";
import { ICommentsCreateRequest } from "../../interfaces/comments";

export const createCommentsService = async ({
  text,
  userId,
  advertsId,
}: ICommentsCreateRequest): Promise<Comments> => {
  const usersRepository = AppDataSource.getRepository(User);
  const user = await usersRepository.findOneBy({ id: userId });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const advertsRepository = AppDataSource.getRepository(Adverts);
  const adverts = await advertsRepository.findOneBy({ id: advertsId });
  if (!adverts) {
    throw new AppError("Advert not found", 404);
  }

  const commentsRepository = AppDataSource.getRepository(Comments);
  const comment = commentsRepository.create({ text, user, adverts });

  await commentsRepository.save(comment);

  return comment;
};
